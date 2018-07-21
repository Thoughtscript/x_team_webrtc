"use strict";

const r = require('./easyrtc/rtcserver'),
    e = require('./express/express');

module.exports = {
    startRtcService: ()=> {
       r.createRtcServer(e.createServer());
    }
};