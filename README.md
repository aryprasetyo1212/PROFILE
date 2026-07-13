# Personal Portfolio - Nurmulya Dwi Atika

Portfolio React modern dengan animasi, background interaktif, konten pertanian dan teknologi digital, serta popup preview Curriculum Vitae dalam format PDF.

## Menjalankan project

```powershell
npm install
npm run dev
```

Lalu buka alamat lokal yang muncul di terminal, biasanya `http://localhost:5173`.

## Mengganti foto profil

Ganti file berikut dengan foto Anda:

```text
public/profile-photo.svg
```

Anda juga dapat memakai JPG/PNG. Simpan misalnya sebagai `public/profile-photo.jpg`, kemudian ubah nilai `photo` di:

```text
src/data/profile.js
```

menjadi:

```js
photo: '/profile-photo.jpg',
```

## Mengganti CV PDF

File CV yang tampil pada popup berada di:

```text
public/Nurmulya-Dwi-Atika-CV.pdf
```

Anda dapat mengganti file tersebut dengan CV final Anda, tetapi pertahankan nama filenya agar tombol preview dan download tetap bekerja. Jika nama file diubah, sesuaikan `cvFile` pada `src/data/profile.js`.

## Mengubah konten profil

Nama, deskripsi, kontak, skills, pengalaman, dan media sosial berada di:

```text
src/data/profile.js
```

Email dan nomor telepon masih berupa placeholder agar tidak menggunakan data pribadi yang belum diberikan. Ganti bagian tersebut dengan kontak asli Anda.

## Build production

```powershell
npm run build
```
# PROFILE
