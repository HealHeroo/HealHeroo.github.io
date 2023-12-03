import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetObat =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";

  export const tableObat = `
  <tr>
    <div class="card">
        <img src="path/to/medicine/image.jpg" class="card-img-top" alt="Medicine Image">
        <div class="card-body">
          <h5 class="card-title">${medicine.nama_obat}</h5>
          <p class="card-text">${medicine.jenis_obat}</p>
          <p class="card-text">${medicine.keterangan}</p>
          <p class="card-text">Harga: ${medicine.harga}</p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
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
  
  function beliObat(namaObat) {
    // Implement your logic for purchasing the medicine here
    alert(`Anda telah membeli obat: ${namaObat}`);
  }
  
