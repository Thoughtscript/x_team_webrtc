'use strict'

var Video = function () {
  this.video = easyrtc
  this.id = ''
  this.callList = []
  this.easyrtcid = ''
}

/**
 * Login and Initialize
 */

Video.prototype.initializeConnection = function () {

  var easy = this.video,
    getCallList = function (r, d, p) {
      console.log('RoomList: ' + d)
      this.callList = d
    },
    loginSuccess = function (id) {
      this.id = id
    },
    loginFailure = function (errCd, msg) {
      easy.showError(errCd, msg)
    }

  easy.setAcceptChecker(function (caller, cb) {
    cb(true)
  })

  easy.setStreamAcceptor(function (easyrtcid, stream) {
    this.easyrtcid = easyrtcid
    console.log('EayrtcId: ' + easyrtcid)
    var video = document.getElementById('receiveEl')
    easy.setVideoObjectSrc(video, stream)
  })

  navigator.getUserMedia({audio: true, video: {width: 1280, height: 720}},
    function (stream) {
      try {
        var video = document.getElementById('sendEl')
        video.srcObject = stream
        video.onloadedmetadata = function (e) {
          video.play()
        }
        easy.setRoomOccupantListener(getCallList)
        easy.easyApp('easyrtc.videoChatHd', 'sendEl', ['receiveEl'], loginSuccess, loginFailure)
      } catch (ex) {
        console.log('Exception Encountered: ' + ex)
      }
    })
}

/**
 * Make a Call
 */

//https://github.com/priologic/easyrtc/blob/master/demos/js/demo_audio_video_simple_hd.js

Video.prototype.call = function () {

  var callSuccess = function () {
      console.log('Call succeeded!')
    },
    callFail = function () {
      console.log('Call failed!')
    },
    callAccepted = function (a, c) {
      console.log('Call to ' + c + ' accepted?' + a)
    }

  for (var a = 0; a < this.callList; a++) {
    this.video.call(this.callList[a], callSuccess, callFail, callAccepted)
  }
}
