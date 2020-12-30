const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
        
        res.render("cities");

})


app.listen(3000, () => {
        console.log("Server running on 3000...");
})