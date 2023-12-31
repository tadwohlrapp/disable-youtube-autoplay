// ==UserScript==
// @name            Disable YouTube Autoplay
// @description     Keeps checking if autoplay is enabled and disables it
// @namespace       https://github.com/tadwohlrapp
// @author          Tad Wohlrapp
// @version         0.0.1
// @license         MIT
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