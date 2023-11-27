import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const SignUpDriver = () => {
  const target_url =
    "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/singup_driver";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    namalengkap: getValue("namalengkap"),
    jeniskelamin: getValue("jeniskelamin"),
    nomorhp: getValue("nomorhp"),
    alamat: getValue("alamat"),
    platmotor: getValue("platmotor"),
    akun: {
      email: getValue("email"),
      password: getValue("password"),
    },
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

window.SignUpDriver = SignUpDriver;