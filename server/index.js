const express = require("express");
const axios = require('axios');
const API_KEY = "a9e290a30469df15c5f49d73b3c54192"

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey='+ API_KEY +'&hash=1e1fbb64cbc9f5ab7a0b644b433c716c')
    .then(response => {
        res.json({ message: response.data});
    })
    .catch(error => {
        console.log(error);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});