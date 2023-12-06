import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetPengguna =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/pengguna";

export const tablePengguna = `
<tr>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMALENGKAP#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#TANGGALLAHIR#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#JENISKELAMIN#</span
  >
</div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NOMORHP#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#ALAMAT#</span
    >
  </div>
</td>

<td class="px-6 py-3 whitespace-nowrap">
<a
      href="updatepengguna?penggunaId=#IDEDIT#"
      class="inline-flex items-center px-2 cursor-pointer text-sm text-green-600 decoration-2 hover:underline font-medium"
    >
      Edit
 </a>
    <button class="btn btn-outline-danger btn-sm" onclick="deletePengguna('#IDHAPUS#')">Delete</button>
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
  const content = tablePengguna
    .replace("#NAMALENGKAP#", value.namalengkap)
    .replace("#TANGGALLAHIR#", value.tanggallahir)
    .replace("#JENISKELAMIN#", value.jeniskelamin)
    .replace("#NOMORHP#", value.nomorhp)
    .replace("#ALAMAT#", value.alamat)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id);
  addInner("tableDaftarPengguna", content);
}
