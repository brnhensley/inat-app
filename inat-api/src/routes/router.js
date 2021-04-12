const express = require('express');
const Controller = require('../controllers/controller');
const testData = require('../test.json');

const router = express.Router();

router.get('/', function (req, res, next) {
    res.send(testData);
});

module.exports = router;

// https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&hrank=species&lat=45.3510&lng=122.4909&radius=80