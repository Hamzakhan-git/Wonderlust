if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
//console.log(process.env.SECRET)
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const reviewRouter = require("./routes/review.js");
const listingRouter = require("./routes/listing.js");
const userRouter = require("./routes/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/user.js");
const homeRoutes = require("./routes/home");



//const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
const dbUrl = process.env.ATLASDB_URL;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
main().then(()=> {
    console.log("connected to DB ");
})
.catch((err) =>{
    console.log(err);
});
async function main(){
    await mongoose.connect(dbUrl);
};

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});
//sessions
const sessionOptions ={
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 *1000,
        maxAge: 7 * 24 * 60 * 60 *1000,
        httpOnly: true,
    }
}

//passport hashing algorithm = pbkdf2
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser((user, done) => {
  console.log("Serializing user:", user); // Debugging purpose
  done(null, user._id); // Save MongoDB _id into session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
app.use((req,res,next) => {
    res.locals.currUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    //console.log(res.locals.success);
    next();
});

// app.get("/demouser", async(req,res) =>{
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student",
//     });
// let registeredUser = await User.register(fakeUser, "helloworld");
// res.send(registeredUser);
// })

// app.get("/",(req,res) => {
//     res.send("Hi, I'm root");
// });



 // Adjust path to your User model

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,     // from Google Dev Console
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://wonderlust-u1lx.onrender.com/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Try to find existing user
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // Create new user if not found
        user = new User({
          username: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          isVerified: true
        });
        await user.save();
      }

      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));



app.use("/", homeRoutes);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/", userRouter);

app.all(/.*/, (req,res,next) =>{
    next(new ExpressError(404, "Page not Found!"));
});
 
app.use((err, req, res,next) =>{
    let{statusCode =500, message = "Something went wrong!"} = err;
    res.status(statusCode).render("listings/error.ejs", {message});
    //res.status(statusCode).send(message);
});


app.listen(8080, () => {
    console.log("Server is listning at port 8080");
})