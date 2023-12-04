// Ambil ID obat dari parameter URL atau sumber data lainnya
const obatId = getObatIdFromSource(); // Anda perlu mengganti ini sesuai dengan logika aplikasi Anda

// Gunakan ID obat untuk mendapatkan data obat dari server
fetch(`url/api/obat/${obatId}`)
  .then(response => response.json())
  .then(data => {
    // Set nilai input field sesuai dengan data obat yang diambil
    document.getElementById('nama_obat').value = data.nama_obat;
    document.getElementById('jenis_obat').value = data.jenis_obat;
    document.getElementById('keterangan').value = data.keterangan;
    document.getElementById('harga').value = data.harga;
  })
  .catch(error => console.error('Error fetching obat data:', error));

  document.addEventListener('DOMContentLoaded', function () {
    // Letakkan logika di sini
  });
  