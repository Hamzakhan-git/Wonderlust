const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema,userSchema} = require("./schema.js");

// middleware.js
module.exports.isLoggedIn = (req, res, next) => {
  console.log("SESSION:", req.session);
  console.log("isAuthenticated:", req.isAuthenticated());
  console.log("USER:", req.user);

  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in.");
    return res.status(401).redirect("/login");
  }

  if (!req.user?.isVerified) {
    req.logout(() => {
      req.flash("error", "Please verify your email before continuing.");
      return res.redirect("/login");
    });
  } else {
    return next();
  }
};


module.exports.savedRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req,res,next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)) {
      req.flash("error", "You are not the owner of this listing");
     return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req,res,next) => {
    //console.log("REQ.BODY >>>", JSON.stringify(req.body, null, 2));
    let {error} =  listingSchema.validate(req.body);
    if(error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  }
}; 

module.exports.validateReview = (req,res,next) => {
    let {error} =  reviewSchema.validate(req.body);
    if(error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  }
}; 

module.exports.isReviewAuthor = async (req,res,next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)) {
      req.flash("error", "You are not the author of this review");
     return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    req.flash("error", msg);
    return res.redirect("back");
  }
  next();
};
