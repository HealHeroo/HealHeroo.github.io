import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "../pesanan/urlPutPesanan.js";

console.log("hadeer");

const putData = (target_url, datajson, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const raw = JSON.stringify(datajson);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

const pushData = () => {
  const nama = getValue("nama"); 
  const alamat = getValue("alamat");
  const nomorhp = getValue("nomorhp");
  const namaobat = getValue("namaobat");
  const quantity = getValue("quantity");
  const harga = getValue("harga");
  const totalharga = getValue("totalharga");
  const status = getValue("status");

  // Create the updated data object
  const data = {
     
      nama: nama,
      alamat: alamat,
      nomorhp: nomorhp,
      namaobat: namaobat,
      quantity: quantity,
      harga: harga,
      totalharga: totalharga,
      status: status,
    
  };

  putData(urlPUT, data, AmbilResponse);
};

const updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", () => {
  console.log("button aktif");
  pushData(); // Call pushData function when the button is clicked
});