import { getValue } from "https://jscroot.github.io/element/croot.js";

function postOrder(target_url, datajson, responseFunction) {
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

const Order = () => {
  const target_url =
    "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/pesanan";

  const datainjson = {
    nama: getValue("nama"),
    alamat: getValue("alamat"),
    nomorhp: getValue("nomorhp"),
    namaobat: getValue("namaobat"),
    quantity: getValue("quantity"),
    harga: getValue("harga"),
    totalharga: getValue("totalharga"),
    status: ("status"), 
  };
  console.log(datainjson);
  postOrder(target_url, datainjson, responseData);
};

const responseData = (result) => {
    if (result.status) {
      Swal.fire({
        icon: "success",
        title: "Order Successful",
        text: result.message,
      }).then(() => {
        window.location.href = "../apotik.html";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Order Failed",
        text: result.message,
      });
    }
  };

window.Order = Order;
