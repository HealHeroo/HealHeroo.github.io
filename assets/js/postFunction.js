import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    let target_url = "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/healhero";
    let tokenkey = "token";
    let tokenvalue = "8831334360c5dd8d50d0947a6fafa1b9e710b46c85ff1d33942b752f559ae3fa";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
}


function responseData(result) {
    
    // setInner("pesan", result.message);
    
    setCookieWithExpireHour("token", result.token, 2);
    alert("Selamat Datang")
    window.location.href = "dashboard.html";
}