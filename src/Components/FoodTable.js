import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import fooddata from "./OFF_subset17.json";

// Data grid table should contain an unique key

// Here I am taking data here only
const columns = [
  { field: "url", headerName: "url", width: 500 },
  {
    field: "packaging",
    headerName: "Container",
    width: 150,
    // editable: true,
    sortable: true,
  },
  {
    field: "serving_size",
    headerName: "Size",
    width: 150,
    sortable: true,
  },
  {
    field: "energy_100g",
    headerName: "Energy",
    type: "number",
    width: 110,
    sortable: true,
  },
  {
    field: "energy_from_fat_100g",
    headerName: "Energy from fat",
    sortable: true,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    url: "http://world-en.openfoodfacts.org/product/6001087316415/flora-regular-60-fat-spread",
    packaging: "Box,Plastic",
    serving_size: "20 g",
    energy_100g: 2230,
    energy_from_fat_100g: null,
  },
  {
    id: 2,
    url: "http://world-en.openfoodfacts.org/product/8480000773555/lino-dorado-deliplus",
    packaging: "Box,Plastic",
    serving_size: "40 g",
    energy_100g: 2233,
    energy_from_fat_100g: null,
  },
  {
    id: 3,
    url: "http://world-en.openfoodfacts.org/product/3273227483476/postre-de-soja-sojasun-melocoton-2-uds",
    packaging: "Box,Plastic",
    serving_size: "30 g",
    energy_100g: 2234,
    energy_from_fat_100g: null,
  },
];

export default function DataGridDemo() {
  //   const [data, setData] = React.useState(fooddata);

  //   const rows = [JSON.stringify(data)];

  return (
    <div style={{ height: 400, width: "100%" }} className="container-fluid">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
