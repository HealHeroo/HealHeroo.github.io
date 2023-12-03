import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetObat =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";

export const checkout = `
<tr>
<p><strong>Item:</strong> ${nama_obat}</p>
    <p><strong>Harga:</strong> ${harga}</p>

  <a
      href="checkout?obatId=#IDBELI#"
      class="inline-flex items-center px-2 cursor-pointer text-sm text-green-600 decoration-2 hover:underline font-medium">
      Beli
  </a>

  

</tr>
`;


export function responseData(results) {
    console.log(results);
     results.forEach(isiRow);
    hide("skeletonLoader");
}


export function isiRow(obat) {
  const content = tableObat
    .replace("#NAMAOBAT#", obat.nama_obat)
    .replace("#HARGA#", obat.harga)
  addInner("tableCheckout", content);
}

