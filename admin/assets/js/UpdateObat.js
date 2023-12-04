import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutObat.js";

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
  const nama_obatValue = getValue("nama_obat"); 
  const jenis_obatValue = getValue("jenis_obat");
  const keteranganValue = getValue("keterangan");
  const hargaValue = getValue("harga");

  // Create the updated data object
  const data = {
      nama_obat: nama_obatValue,
      jenis_obat: jenis_obatValue,
      keterangan: keteranganValue,
      harga: hargaValue, 
  };
  putData(urlPUT, data, AmbilResponse);
};

const UpdateObat = document.getElementById("UpdateObat");

UpdateObat.addEventListener("click", () => {
  pushData(); // Call pushData function when the button is clicked
});