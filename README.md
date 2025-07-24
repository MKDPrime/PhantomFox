# PhantomFox

PhantomFox is a modular `user.js` configuration designed to balance **privacy**, **performance**, and **cross-browser compatibility** across Firefox and its forks.

---

## 🧱 Modular Structure

PhantomFox is now split into **two modular user.js files** for broader compatibility and flexibility:

### 🔹 `phantomfox.user.js`
The **core configuration** file. It includes privacy, security, and performance tweaks that are compatible with:

- Firefox
- LibreWolf
- Waterfox
- Mull
- Any Firefox-based browser

**Recommended for all users.**

---

### 🔸 `phantomwolf.user.js`
Optional enhancements for advanced users. Includes:

- Extra telemetry blocking
- Strict network and DNS tweaks
- Experimental isolation settings

**Best for hardened setups (e.g., LibreWolf, Waterfox).**  
⚠️ May slightly reduce site compatibility.

---

## 🔧 How to Use

1. Download `phantomfox.user.js`
2. Place it in your Firefox profile directory (as `user.js`)
3. *(Optional)* Download and append `phantomwolf.user.js` after the base config
4. Restart Firefox

> You can find your profile folder here:  
> `about:support → Profile Folder → Open Folder`

---

## 📌 Version

Current version: `v1.1`  
Check the [Releases](https://github.com/MKDPrime/PhantomFox/releases) page for changelog and updates.

---

## 📜 License

Licensed under the **GNU GPLv3**.  
See [`LICENSE`](./LICENSE) for more information.

