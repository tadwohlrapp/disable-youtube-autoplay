# Disable YouTube Autoplay

Recently, it appears that YouTube has introduced a new type of anti-feature that continually re-enables autoplay for videos. Even after disabling autoplay, it becomes enabled again within a minute, and this cycle repeats incessantly.

To address this issue, I wrote this simple userscript. It continuously checks every two seconds to see if autoplay is enabled, and if it is, the script promptly disables it once more.

## Installation

To use userscripts you need to first install a userscript manager. They come as extensions for various browsers:

- [Violentmonkey](https://violentmonkey.github.io/) - for Chrome, Edge, Firefox, Opera
- [Tampermonkey](https://tampermonkey.net/) - for Chrome, Edge, Safari, Firefox, Opera

After you have installed a userscript manager, head over to [greasyfork.org/scripts/483523](https://greasyfork.org/scripts/483523) and click on the green "Install this script" button there.
