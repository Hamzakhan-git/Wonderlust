const User = require("../models/user.js");
const crypto = require("crypto");
const { sendVerificationEmail } = require("../utils/sendVerificationEmail.js");
const nodemailer = require("nodemailer");


// controllers/user.js

module.exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({ username, email });

    // Register with passport-local-mongoose
    await User.register(user, password);

    // Generate token and expiry
    user.verifyToken = crypto.randomBytes(32).toString("hex");
    user.verifyTokenExpires = Date.now() + 1000 * 60 * 60; // 1 hour
    await user.save(); // ✅ Save token info in DB

    const link = `https://wonderlust-u1lx.onrender.com/verify-email/${user.verifyToken}`;
;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: '"WonderLust" <no-reply@wonderlust.com>',
      to: user.email,
      subject: "Verify your email",
      html: `<p>Hello ${user.username},</p>
             <p>Please click the link below to verify your email:</p>
             <a href="${link}">${link}</a>`
    };

    await transporter.sendMail(mailOptions);

    req.flash("success", "Verification email sent! Please check your inbox.");
    res.redirect("/login");
  } catch (err) {
    console.error("Signup error:", err);
    req.flash("error", "Something went wrong during signup.");
    res.redirect("/signup");
  }
};


module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.Login = async (req, res, next) => {
    // Check if user has verified their email
    if (!req.user.isVerified) {
        req.logout(() => {});
        req.flash("error", "Please verify your email before logging in.");
        return res.redirect("/login");
    }

    req.flash("success", "Welcome to WonderLust! You are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.Logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect('/listings');
    });
};

// ADD THIS: Handles the email verification route
module.exports.verifyEmail = async (req, res) => {
  try {
    const token = req.params.token;
    console.log("Token received:", token);

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpires: { $gt: Date.now() }
    });

    if (!user) {
      req.flash("error", "Verification token is invalid or has expired.");
      return res.redirect("/signup");
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpires = undefined;
    await user.save();

    req.flash("success", "Email verified! You can now log in.");
    res.redirect("/login");
  } catch (err) {
    console.error("Verification Error:", err);
    req.flash("error", "Something went wrong.");
    res.redirect("/signup");
  }
};
//Google Oauth
module.exports.googleCallback = (req, res) => {
  req.flash("success", "Logged in with Google!");
  res.redirect("/listings");
};
