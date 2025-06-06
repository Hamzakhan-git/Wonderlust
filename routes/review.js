const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn , isReviewAuthor} = require("../middleware.js");
const reviewControllerr = require("../controllers/review.js");
 

//reviews
//post route
router.post("/",
    isLoggedIn,
     validateReview, wrapAsync(reviewControllerr.createReview)
);
//Delete review route
router.delete("/:reviewId", isReviewAuthor,
    wrapAsync(reviewControllerr.destroyReview)
);
module.exports = router;