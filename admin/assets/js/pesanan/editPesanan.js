export const isiData = (results) => {
    const inputMapping = [
      { id: "nama", path: "pesanan.nama" },
      { id: "alamat", path: "pesanan.alamat" },
      { id: "nomorhp", path: "pesanan.nomorhp" },
      { id: "namaobat", path: "pesanan.namaobat" },
      { id: "quantity", path: "pesanan.quantity" },
      { id: "harga", path: "pesanan." },
      { id: "status", path: "pesanan.totalharga" },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
  };
  
  const getNestedValue = (obj, path, index, property) => {
    const value = path
      .split(".")
      .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  
    if (
      Array.isArray(value) &&
      value.length > index &&
      value[index].hasOwnProperty(property)
    ) {
      return value[index][property];
    }
  
    return value;
  };
  