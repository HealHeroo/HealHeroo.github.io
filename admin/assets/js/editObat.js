// Misalnya, data obat yang diterima seperti berikut:
const dataObat = {
  nama_obat: "Nama Obat",
  jenis_obat: "Jenis Obat",
  keterangan: "Keterangan Obat",
  harga: "100000",
};

// Fungsi untuk mengisi formulir dengan data obat
function isiFormulir(dataObat) {
  document.getElementById("nama_obat").value = dataObat.nama_obat;
  document.getElementById("jenis_obat").value = dataObat.jenis_obat;
  document.getElementById("keterangan").value = dataObat.keterangan;
  document.getElementById("harga").value = dataObat.harga;
}

// Panggil fungsi isiFormulir dengan data obat yang telah diambil
isiFormulir(dataObat);
