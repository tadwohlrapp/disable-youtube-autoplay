// ==UserScript==
// @name            Disable YouTube Autoplay
// @description     Keeps checking if autoplay is enabled and disables it
// @namespace       https://github.com/tadwohlrapp
// @author          Tad Wohlrapp
// @version         0.0.2
// @license         MIT
// @homepageURL     https://github.com/tadwohlrapp/disable-youtube-autoplay
// @supportURL      https://github.com/tadwohlrapp/disable-youtube-autoplay/issues
// @updateURL       https://greasyfork.org/scripts/483523/code/script.meta.js
// @downloadURL     https://greasyfork.org/scripts/483523/code/script.user.js
// @icon            https://github.com/tadwohlrapp/disable-youtube-autoplay/raw/main/icon.png
// @match           https://www.youtube.com/*
// @grant           none
// ==/UserScript==

(function () {
  'use strict';

  const consoleOutput = true

  setInterval(() => {
    const storageItem = JSON.parse(window.sessionStorage.getItem('yt-player-autonavstate'))
    const autoplayButton = document.querySelector('button[data-tooltip-target-id="ytp-autonav-toggle-button"]')
    if (storageItem.data === '2' && autoplayButton.querySelector('.ytp-autonav-toggle-button[aria-checked="true"]')) {
      if (consoleOutput) console.log(`${new Date().toLocaleTimeString()}: 🙄 YouTube tried again to re-activate Autoplay!`)
      setTimeout(() => {
        autoplayButton.click()
        if (consoleOutput) console.log(`${new Date().toLocaleTimeString()}: It's disabled again.`)
      }, 1000)
    }
  }, 2000)

})();