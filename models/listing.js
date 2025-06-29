const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const Review = require("./review.js");
// Add this snippet to debug router-level GET calls
const originalRouterGet = router.get;
router.get = function (path, ...args) {
  console.log("Router GET:", path);
  return originalRouterGet.call(this, path, ...args);
};

// Then your usual routes:
router.get('/:id', (req, res) => {
  res.send('Listing ID');
});

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
//      image : {
//         url: {
//   type: String,
//   default: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   set: v => v === "" ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" : v
// },

//         filename:String,
//     },
image : {
        url:String,
        filename:String,
    }, 
    price : Number,
    location : String,
    country : String,
    reviews: [
      {
        type : Schema.Types.ObjectId,
        ref: "Review",
      }
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    geometry: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    category: {
  type: String,
  enum: ["Trending", "Rooms", "Iconic Cities", "Mountains", "Castles", "Amazing Pools", "Camping", "Farms", "Arctic", "Domes", "Boats"]
}

});
listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews }});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
//https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60