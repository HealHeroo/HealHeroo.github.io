import { getValue } from "https://jscroot.github.io/element/croot.js";

function PostTambahObat(target_url, datajson, responseFunction) {
  var raw = JSON.stringify(datajson);

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

const TambahObat = () => {
  const target_url =
    "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";

  const datainjson = {
    nama_obat: getValue("nama_obat"),
    jenis_obat: getValue("jenis_obat"),
    keterangan: getValue("keterangan"),
    harga: getValue("harga"),
    platmotor: getValue("platmotor"),
  };
  console.log(datainjson);
  PostTambahObat(target_url, datainjson, responseData);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Tambah Obat Berhasil",
      text: result.message,
    }).then(() => {
      window.location.href = "../admin/tambahobat.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Tambah Obat Gagal",
      text: result.message,
    });
  }
};

window.TambahObat = TambahObat;