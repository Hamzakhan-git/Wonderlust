const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {
    allListings,
    listings: [],
    searchQuery: null
  });
};


module.exports.renderNewForm =  (req,res) => {
    
     res.render("listings/new.ejs")
};

module.exports.showListing = async (req,res) => {
let {id} = req.params;
const listing = await Listing.findById(id)
.populate({path: "reviews", populate: {
  path: "author",
},
})
.populate("owner");
if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
}
res.render("listings/show", {
  listing,
  MAP_TOKEN: process.env.MAP_TOKEN,
  currUser: req.user,
});

};

module.exports.createListing =async(req,res,next) =>{
    //let listing = req.body.listing;
    let response = await geocodingClient.forwardGeocode({
  query: req.body.listing.location, 
  limit: 1
})
  .send();


    let url = req.file.path;
    let filename = req.file.filename;
   
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {url, filename};
        newListing.geometry = response.body.features[0].geometry;

        let savedListing = await newListing.save();
        console.log(savedListing);
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    
};

module.exports.renderEditForm = async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
    return;
}
let originalImageUrl = listing.image.url;
originalImageUrl =originalImageUrl.replace("/upload","/upload/w_250")
    res.render("listings/edit.ejs", {
  listing, originalImageUrl
})
};

module.exports.updateListing = async(req,res) =>{
let {id} = req.params;

let listing =  await Listing.findByIdAndUpdate(id,{...req.body.listing});
if(typeof req.file !== "undefined"){
let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save();
}
 req.flash("success", "Listing Updated!")
res.redirect(`/listings/${id}`);
 };

 module.exports.destroyLlisting = async(req,res) =>{
     let {id} = req.params;
     let deleteListing = await Listing.findByIdAndDelete(id);
     console.log(deleteListing);
     req.flash("success", "Listing Deleted!");
     res.redirect("/listings");
  };

 //search
 module.exports.searchListings = async (req, res) => {
  let query = req.query.q;
  console.log("QUERY:", req.query);

  // Sanitize and validate query
  if (Array.isArray(query)) {
    query = query[0]; // Take the first element if it's an array
  }

  if (typeof query !== "string" || query.trim() === "") {
    // No valid search input — show empty or all listings as fallback
    return res.render("listings/index", {
      listings: [],
      searchQuery: "",
      allListings: []
    });
  }

  query = query.trim(); // Remove leading/trailing spaces

  try {
    let listings;

    const categories = [
      "Trending", "Rooms", "Iconic Cities", "Mountains",
      "Castles", "Amazing Pools", "Camping", "Farms",
      "Arctic", "Domes", "Boats"
    ];

    if (categories.includes(query)) {
      // Exact match for category
      listings = await Listing.find({ category: query });
    } else {
      // Free-text search
      listings = await Listing.find({
        $or: [
          { location: { $regex: query, $options: "i" } },
          { title: { $regex: query, $options: "i" } },
          { country: { $regex: query, $options: "i" } }
        ]
      });
    }

    res.render("listings/index", {
      listings,
      searchQuery: query,
      allListings: []
    });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).send("Something went wrong during search.");
  }
};
