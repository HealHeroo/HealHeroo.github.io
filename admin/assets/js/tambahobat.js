// import { getValue } from "https://jscroot.github.io/element/croot.js";

// function postTambahObat(target_url, datajson, responseFunction) {
//   var raw = JSON.stringify(datajson);

//   var requestOptions = {
//     method: "POST",
//     body: raw,
//     redirect: "follow",
//   };

//   fetch(target_url, requestOptions)
//     .then((response) => response.text())
//     .then((result) => responseFunction(JSON.parse(result)))
//     .catch((error) => console.log("error", error));
// }

// const TambahObat = () => {
//   const target_url =
//     "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";

//   const datainjson = {
//     nama_obat: getValue("nama_obat"),
//     jenis_obat: getValue("jenis_obat"),
//     keterangan: getValue("keterangan"),
//     harga: getValue("harga"),
//   };
//   console.log(datainjson);
//   postTambahObat(target_url, datainjson, responseData);
// };

// const responseData = (result) => {
//   if (result.status) {
//     Swal.fire({
//       icon: "success",
//       title: "Tambah Obat Berhasil",
//       text: result.message,
//     }).then(() => {
//       window.location.href = "../admin/tambahobat.html";
//     });
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Tambah Obat Gagal",
//       text: result.message,
//     });
//   }
// };

// window.TambahObat = TambahObat;

import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const postTambahObat = () => {
  const target_url =
    "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    nama_obat: getValue("nama_obat"),
    jenis_obat: getValue("jenis_obat"),
    keterangan: getValue("keterangan"),
    harga: getValue("harga"),
  };
  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
  console.log(datainjson);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Insert Successful",
      text: result.message,
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Insert Failed",
      text: result.message,
    });
  }
};

window.postTambahObat = postTambahObat;