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
    status: "", 
  };

  postOrder(target_url, datainjson, responseOrder);
};

const responseOrder = (result) => {
  var orderStatusElement = document.getElementById("orderStatus");

  if (result.status) {
    orderStatusElement.style.display = "block";
    orderStatusElement.classList.add("alert-success");
    orderStatusElement.classList.remove("alert-danger");
    orderStatusElement.innerText = "Order successfully placed.";
  } else {
    orderStatusElement.style.display = "block";
    orderStatusElement.classList.add("alert-danger");
    orderStatusElement.classList.remove("alert-success");
    orderStatusElement.innerText = "Failed to place the order. " + result.message;
  }
};

window.Order = Order;
