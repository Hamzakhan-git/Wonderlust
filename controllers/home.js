module.exports.renderHome = (req, res) => {
    console.log("Rendering home page...");

  res.render("listings/home.ejs");
};
