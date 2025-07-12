# 📦 PhantomFox - Firefox `user.js` Kurulum Rehberi (Tüm Platformlar)

Bu belge, **PhantomFox** `user.js` yapılandırmasının (Betterfox tabanlı, arkenfox ilhamlı, Discord uyumlu) Windows, macOS ve Linux sistemlerine nasıl kurulacağını adım adım açıklar.

---

## 🧠 `user.js` Nedir?

Firefox başlatıldığında, profil klasöründe `user.js` adında bir dosya varsa bu dosyadaki tüm ayarları otomatik olarak uygular. Bu, Firefox üzerinde tam kontrol sahibi olmanı sağlar — özellikle gizlilik, güvenlik ve performans açısından.

---

## 🖥️ Kurulum Adımları

### 🔹 1. Firefox Profil Klasörünü Bul

1. Firefox'u aç
2. Adres çubuğuna `about:profiles` yaz ve Enter'a bas
3. Aktif profilin "Kök Dizin" (Root Directory) kısmındaki “Klasörü Aç” butonuna tıkla
4. Açılan klasör senin Firefox profil klasöründür

---

### 🔹 2. `user.js` Dosyasını Yerleştir

1. `user.js` dosyasını GitHub üzerinden indir
2. İndirilen dosyayı yukarıda açtığın Firefox profil klasörüne yapıştır

---

### 🔹 3. Firefox’u Yeniden Başlat

- Firefox’u tamamen kapat (arka planda çalışmadığından emin ol)
- Yeniden başlat → PhantomFox ayarları otomatik olarak uygulanır ✅

---

## 📁 İşletim Sistemine Göre Profil Klasörleri

| İşletim Sistemi | Profil Klasörü |
|------------------|-----------------------------|
| **Windows** | `C:\Users\KULLANICI_ADI\AppData\Roaming\Mozilla\Firefox\Profiles\abc123.default` |
| **macOS** | `~/Library/Application Support/Firefox/Profiles/abc123.default` |
| **Linux** | `~/.mozilla/firefox/abc123.default` |

> Not: Profil klasör ismi rastgele olabilir (örnek: `xyz123.default-release`)

---

## 🔒 Kurulumdan Sonra Neler Olur?

- Firefox daha gizli çalışır, izlenme azalır
- Discord gibi platformlar sorunsuz çalışır
- YouTube ve sosyal medya desteklenir
- Telemetri (Mozilla veri toplama) devre dışı bırakılır

---

## ❌ Mobilde Desteklenmez

- `user.js` sadece **masaüstü Firefox** için çalışır
- iOS ve Android sürümleri bu dosyayı desteklemez
- Mobilde gizlilik için [Firefox Focus](https://www.mozilla.org/tr/firefox/focus/) önerilir

---

## 🔧 Tavsiye Edilen Eklentiler

- [uBlock Origin](https://addons.mozilla.org/tr/firefox/addon/ublock-origin/)
- [ClearURLs](https://addons.mozilla.org/tr/firefox/addon/clearurls/)
- [Firefox Multi-Account Containers](https://addons.mozilla.org/tr/firefox/addon/multi-account-containers/)

---

## 🔗 Kaynaklar

- Betterfox: https://github.com/yokoffing/Betterfox
- arkenfox user.js: https://github.com/arkenfox/user.js
- Mozilla Profil Desteği: https://support.mozilla.org/tr/kb/profil-yoneticisiyle-firefox-profillerini-yonetin

---

PhantomFox ile artık hem hızlı hem de gizli bir Firefox deneyimi seni bekliyor! 🦊
