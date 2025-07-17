// PhantomWolf: Extended Configuration (LibreWolf, Waterfox)
// Last updated: v1.1.0

// 📉 Disable Telemetry and Experiments
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// 🌐 DNS and Network Tweaks
user_pref("network.trr.mode", 5); // Disable DoH for compatibility
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);

// 🔒 Site Isolation (Strict)
user_pref("fission.autostart", true);
user_pref("browser.tabs.remote.useCrossOriginEmbedderPolicy", true);
