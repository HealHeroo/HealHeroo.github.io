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
<td class="px-6 py-3 whitespace-nowrap"></td>
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

// Function to handle edit action
window.editObat = (idObat) => {
  // Logic to navigate to the edit page or perform edit action
  console.log("Edit button clicked for Obat ID:", idObat);
};

// Function to handle delete action
window.deleteObat = (idObat) => {
  // Logic to confirm deletion and perform delete action
  const confirmation = confirm("Are you sure you want to delete this Obat?");
  if (confirmation) {
    // Logic to delete the Obat, you can use fetch or any other method
    console.log("Delete button clicked for Obat ID:", idObat);
  }
};

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

