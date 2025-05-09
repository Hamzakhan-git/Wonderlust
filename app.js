const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
const {listingSchema} = require("./schema.js")
const Review = require("./models/review.js");

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
    consolr.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
};


app.get("/",(req,res) => {
    res.send("Hi, I'm root");
});
const validateListing = (req,res,next) => {
    let {error} =  listingSchema.validate(req.body);
    if(error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  }
}; 
//INdexRoute

app.get("/listings",wrapAsync(async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
})
);
//ShowRoute
app.get("/listings/:id", wrapAsync(async (req,res) => {
let {id} = req.params;
const listing = await Listing.findById(id);
res.render("listings/show.ejs", {listing}); 
})
);

//NewRoute
app.get("/listing/new", (req,res) => {
    res.render("listings/new.ejs")
});
app.post("/listings",
    validateListing, 
    wrapAsync(async(req,res,next) =>{
    //let listing = req.body.listing;
  
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    
})
);


//Edit
app.get("/listings/:id/edit", wrapAsync(async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})
);
 //update
 app.put("/listings/:id",
    validateListing,
     wrapAsync(async(req,res) =>{
let {id} = req.params;
 await Listing.findByIdAndUpdate(id,{...req.body.listing});
res.redirect(`/listings/${id}`);
 })
);

 //delete
 app.delete("/listings/:id", wrapAsync(async(req,res) =>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
 })
);

//reviews
//post route
app.post("/listings/:id/reviews", async (req,res) => {
let listing = await Listing.findById(req.params.id);
let newReview = new Review(req.body.review);

listing.reviews.push(newReview);
await newReview.save();
await listing.save();
res.redirect(`/listings/${listing._id}`);
// console.log("new review saved");
// res.send("new review saved");

});



// app.get("/testListing", async(req,res) => {
//     let sampleListing = new Listing({
//         title : "My new Villa",
//         description : "By thd beach",
//         price : 1200,
//         location : "Calangute, Goa",
//         country : "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successfully testing");
// })
app.all(/.*/, (req,res,next) =>{
    next(new ExpressError(404, "Page not Found!"));
});
 
app.use((err, req, res,next) =>{
    let{statusCode =500, message = "Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
    //res.status(statusCode).send(message);
});


app.listen(8080, () => {
    console.log("Server is listning at port 8080");
})