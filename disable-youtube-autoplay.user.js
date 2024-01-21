// ==UserScript==
// @name            Disable YouTube Autoplay
// @description     Keeps checking if autoplay is enabled and disables it
// @namespace       https://github.com/tadwohlrapp
// @author          Tad Wohlrapp
// @version         0.0.3
// @license         MIT
// @homepageURL     https://github.com/tadwohlrapp/disable-youtube-autoplay
// @supportURL      https://github.com/tadwohlrapp/disable-youtube-autoplay/issues
// @updateURL       https://update.greasyfork.org/scripts/483523/script.meta.js
// @downloadURL     https://update.greasyfork.org/scripts/483523/script.user.js
// @icon            https://github.com/tadwohlrapp/disable-youtube-autoplay/raw/main/icon.png
// @match           https://www.youtube.com/*
// @grant           none
// ==/UserScript==

let counter
const isVideo = location.pathname.startsWith("/watch")

function resetCount() {
  if (isVideo) counter = 0
}

(function () {
  'use strict';

  window.addEventListener("yt-navigate-finish", resetCount, true)
  resetCount()

  setInterval(() => {
    if (!isVideo) return

    const autoplayButton = document.querySelector('button[data-tooltip-target-id="ytp-autonav-toggle-button"]')
    const autoplayBadge = document.querySelector('.ytp-autonav-toggle-button')
    autoplayBadge.dataset.counter = counter > 0 ? counter : '⏸'

    if (autoplayBadge.getAttribute('aria-checked') === 'true') {
      autoplayButton.click()
      counter++
      autoplayBadge.dataset.counter = counter
      console.log(`[Disable YouTube Autoplay]: Autoplay deactivation counter: ${counter} (${new Date().toLocaleTimeString()})`)
    }
  }, 1000)

  function addGlobalStyle(css) {
    const head = document.getElementsByTagName('head')[0]
    if (!head) return
    const style = document.createElement('style')
    style.innerHTML = css
    head.appendChild(style)
  }

  addGlobalStyle(`
    .ytp-autonav-toggle-button[aria-checked=false]:after {
      content: attr(data-counter);
      line-height: 20.4px;
      text-align: center;
      font-size: 12px;
      font-weight:700;
      background-color: #666;
      background-image: none;
    }
    .ytp-autonav-toggle-button[aria-checked=true]:after {
      content: "";
    }
    .ytp-big-mode .ytp-autonav-toggle-button[aria-checked=false]:after {
      line-height: 25.5px;
      font-size: 14px;
    }
  `)

})();
