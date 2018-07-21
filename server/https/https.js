"use strict";

const https = require('https'),
    c = require('../../config'),
    ex = require('../express/express');

module.exports = {
    createHttpsServer: ()=> {
        const h = https.createServer(c.server.ssl, ex.createServer()).listen(c.server.port);
        console.log(`HTTPS server up on ${c.server.port}`);
        return {
            h: h,
            p: c.server.port
        };
    }
};