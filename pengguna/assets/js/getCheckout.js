import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetObat =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";

export const checkout = `
<tr>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMAOBAT#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#JENISOBAT#</span
  >
</div>
</td>

  <a
      href="checkout?obatId=#IDBELI#"
      class="inline-flex items-center px-2 cursor-pointer text-sm text-green-600 decoration-2 hover:underline font-medium">
      Beli
  </a>

  

</tr>
`;

export function isiRow(obat) {
  const content = tableObat
    .replace("#NAMAOBAT#", obat.nama_obat)
    .replace("#HARGA#", obat.harga)
  addInner("tableCheckout", content);
}

