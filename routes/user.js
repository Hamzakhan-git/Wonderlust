const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

//signup form
router.get("/signup", userController.renderSignupForm);

//signup
router.post("/signup",wrapAsync(userController.signup)
);

//login form
router.get("/login",userController.renderLoginForm);

router.post("/login",
    savedRedirectUrl,
     passport.authenticate("local",{
    failureRedirect: '/login',
     failureFlash: true,
    }),
    userController.Login);

router.get("/logout", 
    userController.Logout
);
module.exports = router;