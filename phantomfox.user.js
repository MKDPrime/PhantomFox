// =====================================================================
//  PhantomFox 2.0 - Privacy & Performance Configuration for Firefox
// =====================================================================
//  A minimalist but powerful alternative to Arkenfox and Betterfox
//  Focus: privacy, performance, and simplicity
//  Works on Linux, macOS, and Windows
// =====================================================================

// ---------------------------------------------------------------------
//  STARTUP
// ---------------------------------------------------------------------
user_pref("browser.startup.page", 0);                  // Open blank page
user_pref("browser.startup.homepage", "about:blank");  // Minimal start
user_pref("browser.newtabpage.enabled", false);        // Disable Firefox new tab suggestions

// ---------------------------------------------------------------------
//  FIREFOX SYNC (Disabled for Privacy)
// ---------------------------------------------------------------------
user_pref("identity.fxaccounts.enabled", false);
user_pref("services.sync.enabled", false);

// ---------------------------------------------------------------------
//  TELEMETRY & DATA COLLECTION
// ---------------------------------------------------------------------
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// ---------------------------------------------------------------------
//  CRASH REPORTING
// ---------------------------------------------------------------------
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// ---------------------------------------------------------------------
//  SECURITY (Safe Browsing)
// ---------------------------------------------------------------------
user_pref("browser.safebrowsing.malware.enabled", true);   // Malware protection
user_pref("browser.safebrowsing.phishing.enabled", true);  // Phishing protection
user_pref("browser.safebrowsing.downloads.enabled", true); // Safe file downloads

// ---------------------------------------------------------------------
//  PRIVACY (Tracking Protection)
// ---------------------------------------------------------------------
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.userContext.enabled", true);     // Enable Containers
user_pref("privacy.userContext.ui.enabled", true);

// ---------------------------------------------------------------------
//  NETWORK
// ---------------------------------------------------------------------
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.trr.mode", 3);                   // Force DNS-over-HTTPS
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");

// ---------------------------------------------------------------------
//  WEBRTC LEAKS
// ---------------------------------------------------------------------
user_pref("media.peerconnection.enabled", false);
user_pref("media.navigator.enabled", false);

// ---------------------------------------------------------------------
//  UI & EXPERIENCE
// ---------------------------------------------------------------------
user_pref("browser.pocket.enabled", false);          // Disable Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.update.enabled", false);       // Disable auto-update for extensions
user_pref("media.autoplay.default", 5);              // Block autoplay
user_pref("dom.disable_window_move_resize", true);   // Prevent scripts from resizing windows

// ---------------------------------------------------------------------
//  PERFORMANCE
// ---------------------------------------------------------------------
user_pref("gfx.webrender.all", true);                // Force WebRender
user_pref("layers.acceleration.force-enabled", true);// Hardware acceleration
user_pref("network.http.max-connections", 1800);     // Optimize connections
user_pref("network.http.max-persistent-connections-per-server", 10);

// ---------------------------------------------------------------------
//  MISC
// ---------------------------------------------------------------------
user_pref("browser.search.suggest.enabled", false);  // Disable search suggestions
user_pref("browser.formfill.enable", false);         // Disable form autofill
user_pref("signon.rememberSignons", false);          // Disable password saving
user_pref("dom.battery.enabled", false);             // Hide battery status API
user_pref("geo.enabled", false);                     // Disable geolocation
user_pref("browser.shell.checkDefaultBrowser", false);// Disable "default browser" check