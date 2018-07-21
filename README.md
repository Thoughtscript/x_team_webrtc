# x_team_webrtc

Many **WebRTC** demos are just "*element*" to "*element*" within the same browser. In this simple **Node**, <a href="https://socket.io/">**Socket.io**</a> and <a href="http://easyrtc.com/">**EasyRTC**</a> example we'll demonstrate full one-on-one **WebRTC** video chat between clients and managed by a signal server.

**WebRTC** leverages several different communication protocols in order to make true *client* to *client* streaming possible. No servers are
ever involved with the streams themselves (just the inter-coordination to get the streams to go directly from browser to browser). This can vastly increase savings from a bandwidth and hosting perspective while improving privacy.

# How Does it Work?

Server-side:
```
    (1) An HTTPS server is started and is wrapped by Express -> handles URL/HTTP requests.
    (2) An EasyRTC server is launched wrapping both a Socket Server and Express.
```

Client-side:
```
    (1) Use **Adapter.js** for shimming (WebRTC recommended).
    (2) Use the supplied **EasyRTC** API libraries.
    (3) Use the supplied **Socket.io** examples to build a chat system!
```

# Shout Outs

1. ![EasyRTC](https://github.com/priologic/easyrtc/tree/master/server_example)

# Licensing

MIT licensed and free to use!