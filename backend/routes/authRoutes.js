const express = require('express');
const { googleauth, googlecallback } = require('../controllers/googleAuthcontroller');

const googleauthrouter = express.Router();


googleauthrouter.get('/google',googleauth);

googleauthrouter.get('/google/callback',googlecallback)

module.exports = googleauthrouter