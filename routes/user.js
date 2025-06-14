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
    const { token } = req.params;
    console.log("🔍 Incoming token:", token);

    // First: try to find the user with unexpired token
    let user = await User.findOne({
      verifyToken: token,
      verifyTokenExpires: { $gt: Date.now() }
    });

    if (user) {
      if (!user.isVerified) {
        // ✅ First-time verification
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpires = undefined;
        await user.save();
        console.log("✅ Email verified for:", user.email);
        req.flash("success", "Email verified! You can now log in.");
        return res.redirect("/login");
      } else {
        // 🔁 Token reused after verified
        req.flash("info", "Your email is already verified. Please log in.");
        return res.redirect("/login");
      }
    }

    // Else, check if already verified but token expired or deleted
    user = await User.findOne({ verifyToken: token }) || await User.findOne({ isVerified: true });
    if (user?.isVerified) {
      req.flash("info", "Your email is already verified. Please log in.");
      return res.redirect("/login");
    }

    // If not verified and token invalid
    req.flash("error", "Verification link is invalid or has expired.");
    return res.redirect("/signup");

  } catch (err) {
    console.error("🔥 Error in verify-email:", err);
    req.flash("error", "An error occurred during email verification.");
    return res.redirect("/signup");
  }
});



module.exports = router;