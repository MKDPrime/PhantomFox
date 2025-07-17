// PhantomFox: Base Configuration
// Last updated: v1.1.1

// 🔒 Privacy Essentials
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("network.cookie.cookieBehavior", 1); // Only from visited
user_pref("browser.send_pings", false);
user_pref("beacon.enabled", false);

// 🚀 Performance Tweaks
user_pref("browser.sessionstore.interval", 30000); // Less frequent session saves
user_pref("image.cache.size", 5242880); // 5MB image cache limit
user_pref("layout.css.devPixelsPerPx", "1.0"); // No UI scaling

// 🔧 Safe Defaults
user_pref("dom.security.https_only_mode", true);
user_pref("browser.formfill.enable", false);
user_pref("media.peerconnection.enabled", false); // Disable WebRTC
