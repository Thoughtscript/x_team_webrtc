"use strict";

const fs = require('fs');

module.exports = {
    server: {
        port: process.env.PORT || 8886,
        ssl: {
            cert: fs.readFileSync('./server/https/cert.crt'),
            key: fs.readFileSync('./server/https/key.key')
        }
    },
    express: {
        port: process.env.PORT || 8887
    }
};