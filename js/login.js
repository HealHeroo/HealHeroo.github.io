// Ambil form login
const loginForm = document.getElementById("loginForm");

// Event listener ketika form di-submit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah pengiriman form default

  // Ambil nilai dari input username dan password
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Di sini Anda dapat menggunakan PASETO untuk otentikasi
  // Contoh otentikasi sederhana
  if (username === "user" && password === "password") {
    // Contoh penggunaan PASETO
    const token = createPASETOToken(username);
    alert("Login berhasil. Token: " + token);
  } else {
    alert("Login gagal. Periksa kembali username dan password Anda.");
  }
});

// Event listener ketika tombol reset diklik
loginForm.addEventListener("reset", function () {
  // Menghapus pesan kesalahan jika ada
  alert("");
});

// Contoh pembuatan token PASETO
function createPASETOToken(username) {
  // Di sini, Anda perlu mengimplementasikan pembuatan token PASETO
  // Anda dapat menggunakan library PASETO seperti "paseto" (https://github.com/panva/paseto)
  // atau menulis kode Anda sendiri untuk membuat token PASETO.
  // Berikut contoh kasar menggunakan "paseto" (pastikan Anda telah menginstalnya dengan npm):
  // const { create, default: Paseto } = require('paseto');
  // const token = create('local', { sub: username }, yourPasetoSecretKey, { issuer: 'your-app' });
  // return token;
}
