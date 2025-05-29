const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");


//INdexRoute

router.get("/",wrapAsync(listingController.index)
);
//NewRoute
router.get("/new",isLoggedIn,listingController.renderNewForm);

//ShowRoute
router.get("/:id", wrapAsync(listingController.showListing)
);

//create 
router.post("/",isLoggedIn,
    validateListing, 
    wrapAsync(listingController.createListing)
);


//Edit
router.get("/:id/edit",isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

 //update
 router.put("/:id",isLoggedIn,
  isOwner,
    validateListing,
     wrapAsync(listingController.updateListing)
);

 //delete
 router.delete("/:id",isLoggedIn,
  isOwner,
   wrapAsync(listingController.destroyLlisting)
);

module.exports = router;