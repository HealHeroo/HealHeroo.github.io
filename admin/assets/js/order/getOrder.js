import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetOrder =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/order_healhero";

export const tableOrder = `
<tr>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#PENGGUNA#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#DRIVER#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#OBAT#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMAOBAT#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#QUANTITY#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#TOTALCOST#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#STATUS#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
    <button class="btn btn-outline-danger btn-sm" onclick="deleteOrder('#IDHAPUS#')">Delete</button>
  </td>
</td>
<td class="px-6 py-3 whitespace-nowrap">
    <button class="btn btn-outline-primary btn-sm" onclick="editOrder('#IDEDIT#')">EDIT</button>
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
  const content = tableOrder
    .replace("#PENGGUNA#", value._id)
    .replace("#DRIVER#", value._id)
    .replace("#OBAT#", value._id)
    .replace("#NAMAOBAT#", value.namaobat)
    .replace("#QUANTITY#", value.quantity)
    .replace("#TOTALCOST#", value.total_cost)
    .replace("#STATUS#", value.status)
    .replace("#IDHAPUS#", value._id)
    .replace("#IDEDIT#", value._id);
  addInner("tableDaftarOrder", content);
}

