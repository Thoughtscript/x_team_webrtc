'use strict'

var Video = function () {
  this.video = easyrtc
  this.id = ''
  this.callList = []
}

/**
 * Login and Initialize
 */

Video.prototype.getCallList = function (r, d, p) {
  console.log('RoomList: ' + d)
  this.callList = d
}

Video.prototype.loginSuccess = function (id) {
  this.id = id
}

Video.prototype.loginFailure = function (errCd, msg) {
  this.video.showError(errCd, msg)
}

Video.prototype.initializeConnection = function () {
  navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
    function(stream) {

      var video = document.getElementById('sendEl');
      video.srcObject = stream;
      video.onloadedmetadata = function(e) {
        video.play();
      };

      this.video.setRoomOccupantListener(this.getCallList)
      this.video.easyApp('easyrtc.videoChatHd', 'selfVideo', ['callerVideo'], this.loginSuccess, this.loginFailure)
  })
}

/**
 * Make a Call
 */

//https://github.com/priologic/easyrtc/blob/master/demos/js/demo_audio_video_simple_hd.js

Video.prototype.callSuccess = function () {
  console.log('Call succeeded!')
}

Video.prototype.callFail = function () {
  console.log('Call failed!')
}

Video.prototype.callAccepted = function (a, c) {
  console.log('Call to ' + c + ' accepted?' + a)
}

Video.prototype.call = function () {
  for (var a = 0; a < this.callList; a++) {
    this.video.call(this.callList[a], this.callSuccess, this.callFail, this.callAccepted)
  }
}


