const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

let cities = [
        {
                id: 0,
                city: "London",
                image: "views/assets/london.jpg",
                description: "London is the capital and largest city of England and the United Kingdom.",
                link: "https://en.wikipedia.org/wiki/London" 
        },
        {
                id: 1,
                city: "Madrid",
                image: "views/assets/madrid.jpg",
                description: "Madrid is the capital and most-populous city of Spain.",
                link: "https://en.wikipedia.org/wiki/Madrid" 
        },
        {
                id: 2,
                city: "Miami",
                image: "views/assets/miami.jpg",
                description: "Miami, officially the City of Miami, is a metropolis located in southeastern Florida in the United States.",
                link: "https://en.wikipedia.org/wiki/Miami" 
        },
        {
                id: 3,
                city: "Paris",
                image: "views/assets/paris.jpg",
                description: "Paris is the capital and most populous city of France.",
                link: "https://en.wikipedia.org/wiki/Paris" 
        },
        {
                id: 4,
                city: "São Paulo",
                image: "views/assets/sao-paulo.jpg",
                description: "São Paulo is a municipality in the Southeast Region of Brazil.",
                link: "https://en.wikipedia.org/wiki/São_Paulo" 
        },
        {
                id: 5,
                city: "Vancouver",
                image: "views/assets/vancouver.jpg",
                description: "Vancouver is a major city in western Canada, located in the Lower Mainland region of British Columbia.",
                link: "https://en.wikipedia.org/wiki/Vancouver" 
        }        
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
        
        res.render("cities", {cities});

})


app.listen(3000, () => {
        console.log("Server running on 3000...");
})