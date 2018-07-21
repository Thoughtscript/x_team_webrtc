"use strict";

const express = require('express'),
    home = express.Router(),
    c = require('../../config');

home
    .get('/', (req, res) => res.render('index', {
        port: c.server.port
    }));

module.exports = home;