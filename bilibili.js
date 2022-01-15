// ==UserScript==
// @name         bilibili视频倍速调整
// @version      1.0.1
// @description  bilibili视频调整倍速
// @author       Forece
// @include      *://*.bilibili.com/*
// @include      *://*.bilibili.tv/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  window.addEventListener('keyup', changeSpeed)
})()

function changeSpeed(e) {
    console.log(e)
    if (e.keyCode == 107) {
        document.querySelector('video').playbackRate += 0.25
        console.log(document.querySelector('bwp-video').playbackRate)
    }
    if (e.keyCode == 109) {
        document.querySelector('video').playbackRate -= 0.25
        console.log(document.querySelector('bwp-video').playbackRate)
    }
}
