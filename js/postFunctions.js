import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    let target_url = "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/healhero";
    let tokenkey = "token";
    let tokenvalue = "30d6d6cf93758256d3c87177e67a56dfe43b9e711e47296abe57383a7707e3c6";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
}


function responseData(result) {

    // setInner("pesan", result.message);
    if (result.message == "Welcome..") {
        setCookieWithExpireHour("token", result.token, 2);
        alert("Login Successfully " + result.message)
        window.location.href = "dashboard.html";
    } else {
        alert("Login Failed " + "wrong username or password")
        console.log(result.message);
    }
}

// function setCookieWithExpireHour(cname, cvalue, exhour) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + "secure; HttpOnly; samesite=Strict";
//     // Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; SameSite=Strict
// }