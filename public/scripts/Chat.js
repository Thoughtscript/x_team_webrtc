"use strict";

var Chat = function(endpoint) {
    this.socket = io(endpoint);
    this.outEl = '';
};

Chat.prototype.print = function(d) {
    var m = document.createElement("p");
    m.textContent = d.user + " @" + d.time + " says: " + d.msg;
    document.getElementById(this.outEl).appendChild(m);
};

Chat.prototype.check = function(string) {
    return (string != null && string !== undefined && string !== "");
};

Chat.prototype.initializeSocket = function(el, username) {
    this.userName = username;
    this.outEl = el;
    this.socket.emit('connection', {user: username});
    var that = this;
    this.socket.on("toClient", function(d) {
        that.print(d);
    });
};

Chat.prototype.sendMessage = function(msg) {
    if (this.check(this.userName)) {
        var d = {user: this.userName, msg: msg, time: new Date()};
        this.socket.emit("toServer", d);
        this.print(d);
    }
};
