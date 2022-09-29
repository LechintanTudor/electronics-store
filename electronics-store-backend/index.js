const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

// Data
const categories = require("./data/categories.json");
const products = require("./data/products.json");

function getImagePath(imageName) {
    return `${__dirname}/images/${imageName}.png`;
}

app.get("/images/:imageName", (req, res) => {
    const imageName = req.params.imageName;
    res.sendFile(getImagePath(imageName));
});

app.get("/categories", (_req, res) => {
    res.send(categories);
});

app.get("/products", (_req, res) => {
    res.send(products);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
