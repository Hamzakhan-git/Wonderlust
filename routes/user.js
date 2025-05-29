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
module.exports = router;