# 📦 PhantomFox - Firefox `user.js` Installation Guide (All Platforms)

This guide explains how to install the **PhantomFox** `user.js` configuration (Betterfox-based with enhanced privacy and Discord WebRTC compatibility) on Windows, macOS, and Linux systems.

---

## 🧠 What is `user.js`?

Firefox checks for a file named `user.js` in your profile directory when it starts. If it exists, Firefox applies all the preferences defined in it. This allows full control over Firefox behavior, especially for privacy and performance enhancements.

---

## 🖥️ Installation Steps

### 🔹 1. Locate Your Firefox Profile Folder

#### The easiest way (cross-platform):

1. Open Firefox.
2. Type `about:profiles` in the address bar and hit Enter.
3. Find the "Root Directory" of your **default profile** and click **“Open Folder”** or **“Show in Finder”/“Open in Files”**.
4. This is your Firefox profile folder — where `user.js` needs to be placed.

---

### 🔹 2. Add the `user.js` File

1. Download the `user.js` file from your GitHub repository.
2. Copy and paste the file into your Firefox profile folder.

---

### 🔹 3. Restart Firefox

- Fully close Firefox (make sure it's not running in the background).
- Reopen Firefox — your custom privacy settings will now be active!

---

## 🖱️ Platform-Specific Profile Paths

| Operating System | Profile Folder Location |
|------------------|-----------------------------|
| **Windows** | `C:\Users\USERNAME\AppData\Roaming\Mozilla\Firefox\Profiles\xxxx.default-release` |
| **macOS** | `~/Library/Application Support/Firefox/Profiles/xxxx.default-release` |
| **Linux** | `~/.mozilla/firefox/xxxx.default-release` |

> Note: Your actual profile folder name will vary (e.g. `abc123.default-release`).

---

## 🔒 What to Expect After Installation

- Stronger privacy, less tracking, and better performance.
- YouTube, Discord, and social media sites work out of the box.
- WebRTC is enabled to support Discord voice/video calls.
- Mozilla telemetry and most trackers are disabled.

---

## ❌ Not Supported on Mobile (iOS / Android)

- `user.js` is only supported on **desktop Firefox**.
- Mobile Firefox apps on iOS/Android do not support `user.js`.
- For privacy on mobile, use [Firefox Focus](https://apps.apple.com/us/app/firefox-focus-privacy-browser/id1055677337).

---

## 📌 Recommended Add-ons

- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/)
- [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)

---

## 📎 References

- [Betterfox GitHub](https://github.com/yokoffing/Betterfox)
- [arkenfox user.js](https://github.com/arkenfox/user.js)
- [Mozilla Support - Profile Manager](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles)

---

Enjoy a faster and more private browsing experience with PhantomFox 🦊
