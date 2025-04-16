const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
main().then(()=> {
    console.log("connected to DB ");
})
.catch((err) =>{
    consolr.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
};


app.get("/",(req,res) => {
    res.send("Hi, I'm root");
});
app.get("/listings",async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});
app.get("/listings/:id", async (req,res) => {
let {id} = req.params;
const listing = await Listing.findById(id);
res.render("listings/show.ejs", {listing}); 
})


// app.get("/testListing", async(req,res) => {
//     let sampleListing = new Listing({
//         title : "My new Villa",
//         description : "By thd beach",
//         price : 1200,
//         location : "Calangute, Goa",
//         country : "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successfully testing");
// })
app.listen(8080, () => {
    console.log("Server is listning at port 8080");
})