import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetObat =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";

export const tableObat = `
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
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#KETERANGAN#</span
  >
</div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#HARGA#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
    <button class="btn btn-outline-primary btn-sm" onclick="editObat('#IDOBAT#')">Edit</button>
    <button class="btn btn-outline-danger btn-sm" onclick="deleteObat('#IDOBAT#')">Delete</button>
  </td>
</td>
</tr>
`;


export function responseData(results) {
    console.log(results);
     results.forEach(isiRow);
    hide("skeletonLoader");
}


export function isiRow(value) {
  const content = tableObat
    .replace("#NAMAOBAT#", value.nama_obat)
    .replace("#JENISOBAT#", value.jenis_obat)
    .replace("#KETERANGAN#", value.keterangan)
    .replace("#HARGA#", value.harga);
  addInner("tableDaftarObat", content);
}

