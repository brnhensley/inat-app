const express = require('express');
const router = express.Router();

exports.helloWorld = () => {
    return ('<h1>Hello World!</h1>');
};

let url = "https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&hrank=species&lat=45.3510&lng=122.4909&radius=80";