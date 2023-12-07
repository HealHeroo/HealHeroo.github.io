const urlParams = new URLSearchParams(window.location.search);
const pesananId = urlParams.get("pesananId");

export const urlFetch =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/pengguna?id=" +
  pesananId;