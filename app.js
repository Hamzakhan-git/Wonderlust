const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
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
app.get("/listing/new", (req,res) => {
    res.render("listings/new.ejs")
});
app.post("/listings", wrapAsync(async(req,res,next) =>{
    //let listing = req.body.listing;

        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    
//console.log(listing);
})
);


//Edit
app.get("/listings/:id/edit", async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});
 //update
 app.put("/listings/:id", async(req,res) =>{
let {id} = req.params;
 await Listing.findByIdAndUpdate(id,{...req.body.listing});
res.redirect(`/listings/${id}`);
 });

 //delete
 app.delete("/listings/:id", async(req,res) =>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
 });



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

app.use((err, req, res,next) =>{
res.send("Something went wrong");
});


app.listen(8080, () => {
    console.log("Server is listning at port 8080");
})