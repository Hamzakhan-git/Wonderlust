const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js")
const Listing = require("../models/listing.js");

//validate Listing
const validateListing = (req,res,next) => {
    //console.log("REQ.BODY >>>", JSON.stringify(req.body, null, 2));
    let {error} =  listingSchema.validate(req.body);
    if(error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  }
}; 

//INdexRoute

router.get("/",wrapAsync(async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
})
);
//NewRoute
router.get("/new", (req,res) => {
     res.render("listings/new.ejs")
});

//ShowRoute
router.get("/:id", wrapAsync(async (req,res) => {
let {id} = req.params;
const listing = await Listing.findById(id).populate("reviews");
if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
}
res.render("listings/show.ejs", {listing}); 
})
);



//create 
router.post("/",
    validateListing, 
    wrapAsync(async(req,res,next) =>{
    //let listing = req.body.listing;
  
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    
})
);


//Edit
router.get("/:id/edit", wrapAsync(async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
}
    res.render("listings/edit.ejs", {
  listing,
  originalImageUrl: listing.image.url // ✅ add this
})
})
);

 //update
 router.put("/:id",
    validateListing,
     wrapAsync(async(req,res) =>{
let {id} = req.params;
 await Listing.findByIdAndUpdate(id,{...req.body.listing});
 req.flash("success", "Listing Updated!")
res.redirect(`/listings/${id}`);
 })
);

 //delete
 router.delete("/:id", wrapAsync(async(req,res) =>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
 })
);

module.exports = router;