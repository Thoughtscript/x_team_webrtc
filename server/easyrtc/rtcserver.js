"use strict";

const e = require('easyrtc'),
    s = require('../socketio/socketio'),
    h = require('../https/https');

module.exports = {
    createRtcServer: (expressApp) => {
        e.setOption("logLevel", "debug");
        return e.listen(expressApp, s.createSocketServer(h.createHttpsServer()), null, (err, rtcRef) => {
            if (err) return `Exception: ${err}`;
        });
    }
};