const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup)
);

router
.route('/login')
.get(userController.renderLoginForm)
.post(
    savedRedirectUrl,
     passport.authenticate("local",{
    failureRedirect: '/login',
     failureFlash: true,
    }),
    userController.Login);

router.get("/logout", 
    userController.Logout
);

// Google OAuth
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  userController.googleCallback
);

router.get("/verify-email/:token", async (req, res) => {
  try {
    const token = req.params.token;

    // Find user by token AND check expiry in the same query
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpires: { $gt: Date.now() }
    });

    if (!user) {
      req.flash("error", "Verification link is invalid or has expired.");
      return res.redirect("/signup");
    }

    if (user.isVerified) {
      req.flash("info", "Your email is already verified. Please log in.");
      return res.redirect("/login");
    }

    // Mark user as verified
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpires = undefined;
    await user.save();

    req.flash("success", "Email verified! You can now log in.");
    res.redirect("/login");
  } catch (err) {
    console.error("Verification Error:", err);
    req.flash("error", "An error occurred during verification.");
    res.redirect("/signup");
  }
});

module.exports = router;