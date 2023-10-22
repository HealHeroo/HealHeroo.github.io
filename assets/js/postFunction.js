import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    let target_url = "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/healhero";
    let tokenkey = "token";
    let tokenvalue = "a3fb906e992798dc25b99be837fc2a45c65724268d3a119f92f1d97f9455e78c";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
}


function responseData(result) {
    
    // setInner("pesan", result.message);
    if(result.message == "ANNYEONG..Welcome") {
        setCookieWithExpireHour("token", result.token, 2);
        alert("Login Successfully" + result.message)
        window.location.href = "dashboard.html";
    } else {
        alert("Login Failed" + "Username or Password Wrong")
        console.log(result.message);
    }
    
    // setCookieWithExpireHour("token", result.token, 2);
    // alert("Selamat Datang")
    // window.location.href = "dashboard.html";
}