
/* PhantomFox: Custom Firefox user.js - Betterfox Base + Extra Privacy */
/* Last updated: 2025-07-11 */

/****************************************************************************
 * SECTION: Privacy Enhancements
****************************************************************************/

user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.firstparty.isolate", true);
user_pref("network.cookie.cookieBehavior", 1); // Block 3rd party cookies
user_pref("media.peerconnection.enabled", false); // Disable WebRTC

/****************************************************************************
 * SECTION: Betterfox Base (Performance & Security Enhancements)
 * Source: https://github.com/yokoffing/Betterfox
****************************************************************************/

user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("network.prefetch-next", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms", false);
user_pref("browser.download.autohideButton", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("browser.ssl_override_behavior", 1);
user_pref("security.tls.version.min", 3);

/****************************************************************************
 * SECTION: Usability Tweaks for YouTube and Everyday Use
****************************************************************************/

user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.cache", false);
user_pref("privacy.sanitize.sanitizeOnShutdown", false);
user_pref("media.autoplay.default", 1); // Block autoplay
user_pref("browser.sessionstore.resume_from_crash", true);
user_pref("browser.startup.page", 1); // Resume previous session

/****************************************************************************
 * END OF FILE
****************************************************************************/
