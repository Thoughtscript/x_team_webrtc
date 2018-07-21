"use strict";

const express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    home = require('../expresscontrollers/home'),
    c = require('../../config'),
    app = express();

module.exports = {
    createServer: () => {
        app.set('views', path.join(__dirname, '../../public'))
            .set('view engine', 'ejs')
            .use(express.static(path.join(__dirname, '../../public')))
            .use(favicon(path.join(__dirname, '../../public', 'favicon.ico')))
            .use(logger('dev'))
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({extended: true}))
            .use(cookieParser())
            .use('/', home);

        return app;
    }
};