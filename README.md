# Disable YouTube Autoplay

Recently, it seems that YouTube has introduced a new type of anti-feature that consistently re-enables autoplay for videos. Even after disabling autoplay, it reverts to being enabled again within a minute, and this cycle repeats continuously. Note: this behavior occurs when you're watching a single video and is unrelated to queues or playlists.

To tackle this issue, I have developed this simple userscript. It checks every second if autoplay is enabled, and if it is, the script promptly disables it once more. Additionally, a small counter within the autoplay toggle button displays how many times autoplay has been deactivated for the current video.

<img width="319" alt="Demo GIF" src="https://raw.githubusercontent.com/tadwohlrapp/disable-youtube-autoplay/main/demo.gif">

## Installation

To use userscripts you need to first install a userscript manager. They come as extensions for various browsers:

- [Violentmonkey](https://violentmonkey.github.io/) - for Chrome, Edge, Firefox, Opera
- [Tampermonkey](https://tampermonkey.net/) - for Chrome, Edge, Safari, Firefox, Opera

After you have installed a userscript manager, head over to [greasyfork.org/scripts/483523](https://greasyfork.org/scripts/483523) and click on the green "Install this script" button there.
