const User = require("../models/user.js");
const crypto = require("crypto");
const { sendVerificationEmail } = require("../utils/sendVerificationEmail.js");
const nodemailer = require("nodemailer");


// controllers/user.js

module.exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create user instance without saving
    const user = new User({ username, email, isVerified: false });

    // Register user with password
    const registeredUser = await User.register(user, password);

    // Generate verification token
    const verifyToken = crypto.randomBytes(32).toString("hex");
    registeredUser.verifyToken = verifyToken;
    registeredUser.verifyTokenExpires = Date.now() + 3600000; // 1 hour

    await registeredUser.save(); // 🔴 Save before sending email

    // Verification link
    const verifyLink = `https://yourdomain.com/verify-email/${verifyToken}`;

    // Send email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: registeredUser.email,
      subject: "Verify your WonderLust account",
      html: `<p>Hi ${username},</p>
             <p>Click the link below to verify your email:</p>
             <a href="${verifyLink}">${verifyLink}</a>`,
    });

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
      verifyTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      req.flash("error", "Verification token is invalid or has expired.");
      return res.redirect("/signup");
    }

    if (user.isVerified) {
      req.flash("info", "Your email is already verified. Please log in.");
      return res.redirect("/login");
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
