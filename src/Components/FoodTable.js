import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import fooddata from "./OFF_subset17.json";
import history from "../history";
import FoodDescription from "./foodDescription";

// Data grid table should contain an unique key

// Here I am taking collumn
const columns = [
  {
    field: "product_name",
    headerName: "Product name",
    editable: true,
    width: 300,
  },
  { field: "url", headerName: "url", editable: true, width: 500 },
  {
    field: "packaging",
    headerName: "Container",
    width: 150,
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

export default function DataGridDemo() {
  const [data, setData] = React.useState([]);

  const handleRowSelection = (model) => {
    // It will show the selected row value through an alert message and calling the foodDescription page using history.push of the navigation
    var value =
      model[Object.keys(model)][Object.keys(model[Object.keys(model)])[0]]
        .value;
    console.log("Va", value);
    history.push("/foodDesc");
    window.location.reload(true);
    alert(value);
    setData(value);
  };

  // Rows
  const rows = fooddata?.map((user) => {
    return {
      id: user?.code,
      product_name: user?.product_name,
      url: user?.url,
      packaging: user?.packaging,
      serving_size: user?.serving_size,
      energy_100g: user?.energy_100g,
      energy_from_fat_100g: user?.energy_from_fat_100g,
    };
  });

  return (
    <div style={{ height: 500, width: "100%" }} className="container-fluid">
      {/* <FoodDescription model={data} /> */}
      {console.log("**", data)}
      {rows.length > 0 ? (
        <DataGrid
          style={{ width: "100%" }}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          headerHeight={50}
          rowHeight={40}
          scrollbarSize={2}
          columnHeadersInner--scrollable
          // Edit collumn of Product_name & url
          onEditRowsModelChange={(model) => {
            handleRowSelection(model);
          }}
        />
      ) : (
        <div className="text-center h2">No Data Found</div>
      )}
    </div>
  );
}
