# PhantomFox

PhantomFox, Firefox ve türevleri arasında **gizlilik**, **performans** ve **tarayıcılar arası uyumluluk** dengesini sağlamak üzere tasarlanmış modüler bir `user.js` yapılandırmasıdır.

---

## 🧱 Modüler Yapı

PhantomFox, daha geniş uyumluluk ve esneklik için artık **iki modüler user.js dosyasına** bölünmüştür:

### 🔹 `phantomfox-base.user.js`

**Temel yapılandırma** dosyası. Gizlilik, güvenlik ve performans ince ayarlarını içerir ve şunlarla uyumludur:

- Firefox
- LibreWolf
- Waterfox
- Mull
- Herhangi bir Firefox tabanlı tarayıcı

**Tüm kullanıcılar için önerilir.**

---

### 🔸 `phantomfox-extended.user.js`
İleri düzey kullanıcılar için isteğe bağlı geliştirmeler. İçerir:

- Ekstra telemetri engelleme
- Sıkı ağ ve DNS ayarları
- Deneysel izolasyon ayarları

**Güçlendirilmiş kurulumlar için idealdir (örneğin LibreWolf, Waterfox).**
⚠️ Site uyumluluğunu biraz azaltabilir.

---

## 🔧 Nasıl Kullanılır

1. `phantomfox-base.user.js` dosyasını indirin
2. Firefox profil dizininize yerleştirin (`user.js` olarak)
3. *(İsteğe bağlı)* `phantomfox-extended.user.js` dosyasını indirin ve temel yapılandırmanın ardından ekleyin
4. Firefox'u yeniden başlatın

> Profil klasörünüzü burada bulabilirsiniz:

> `about:support → Profil Klasörü → Klasörü Aç`

---

## 📌 Sürüm

Mevcut sürüm: `v1.1.0`
Değişiklik günlüğü ve güncellemeler için [Sürümler](https://github.com/MKDPrime/PhantomFox/releases) sayfasını kontrol edin.

---

## 📜 Lisans

**GNU GPLv3** altında lisanslanmıştır.
Daha fazla bilgi için [`LICENSE`](./LICENSE) sayfasına bakın.