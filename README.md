# PERSONAL CV & ACADEMIC SCORE APP

## 1. Deskripsi Proyek

Personal CV & Academic Score App merupakan aplikasi mobile yang dikembangkan menggunakan React Native dan Expo. Aplikasi ini dibuat untuk menampilkan informasi pribadi, keterampilan, portofolio proyek, serta informasi nilai akademik dalam satu aplikasi.

Aplikasi ini juga dilengkapi dengan halaman Contact yang menyediakan formulir untuk memasukkan nama, email, dan pesan.

## 2. Tujuan Aplikasi

Tujuan pengembangan aplikasi ini adalah:
- Menampilkan informasi profil pribadi secara digital.
- Menyajikan keterampilan dan pengalaman proyek.
- Menampilkan informasi nilai akademik.
- Menyediakan formulir komunikasi.
- Menerapkan pengembangan aplikasi mobile dengan struktur kode yang terorganisasi.

## 3. Fitur Aplikasi

| Halaman | Fungsi |
|---|---|
| Home | Menampilkan identitas dan foto profil. |
| About | Menampilkan informasi pribadi. |
| Skills | Menampilkan daftar keterampilan. |
| Portfolio | Menampilkan proyek yang pernah dikerjakan. |
| My Score | Menampilkan informasi nilai akademik. |
| Contact | Menyediakan formulir untuk memasukkan pesan. |

## 4. Teknologi yang Digunakan

- React Native
- Expo
- TypeScript
- Expo Router
- JSON
- Visual Studio Code

## 5. Struktur Proyek

```text
UTS-PMB2/
├── src/
│   ├── app/
│   │   ├── index.tsx
│   │   ├── explore.tsx
│   │   ├── skills.tsx
│   │   ├── portfolio.tsx
│   │   ├── my-score.tsx
│   │   ├── contact.tsx
│   │   └── _layout.tsx
│   ├── components/
│   │   ├── AcademicDashboard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── app-tabs.tsx
│   │   └── app-tabs.web.tsx
│   └── data/
│       ├── profile.json
│       ├── academic.json
│       └── portfolio.json
└── README.md
```

## 6. Pengelolaan Kode

Pengembangan aplikasi menggunakan pemisahan antara halaman, komponen, dan data.

- Folder `app` berisi halaman utama aplikasi.
- Folder `components` berisi komponen yang dapat digunakan kembali.
- Folder `data` berisi data profil, akademik, dan portofolio dalam format JSON.

Pemisahan tersebut membantu membuat kode lebih terorganisasi dan mudah dipelihara.

## 7. Pengujian Aplikasi

Pengujian dilakukan pada fitur utama aplikasi dengan hasil sebagai berikut:

| No. | Fitur yang Diuji | Hasil |
|---|---|---|
| 1 | Navigasi enam halaman | Berhasil |
| 2 | Tampilan data profil | Berhasil |
| 3 | Tampilan keterampilan | Berhasil |
| 4 | Tampilan portofolio | Berhasil |
| 5 | Tampilan nilai akademik | Berhasil |
| 6 | Validasi formulir Contact | Berhasil |
| 7 | Penanganan data portofolio kosong | Berhasil |

## 8. Cara Menjalankan Aplikasi

Pastikan Node.js dan dependensi proyek sudah terpasang.

1. Buka folder proyek melalui Visual Studio Code.
2. Buka terminal.
3. Jalankan perintah:

```bash
npm install
```

4. Jalankan aplikasi menggunakan:

```bash
npx expo start
```

5. Untuk menjalankan melalui browser, gunakan tombol `w` pada terminal Expo.
6. Untuk menjalankan melalui perangkat Android, pindai QR Code menggunakan Expo Go.

## 9. Kesimpulan

Personal CV & Academic Score App berhasil dikembangkan menggunakan React Native dan Expo. Aplikasi memiliki enam halaman utama yang menyediakan informasi profil, keterampilan, portofolio, nilai akademik, dan formulir kontak.

Pengembangan aplikasi menerapkan pemisahan komponen dan data serta pengujian terhadap fitur utama. Dokumentasi ini dibuat sebagai panduan untuk memahami struktur dan penggunaan aplikasi.
