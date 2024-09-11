import { Button } from "@mui/material";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component

import { useMemo, useState } from "react";

const data = [
  {
    productId: 1001,
    productName: "DWS GenZ Fund",
    productNAV: 500,
    calcDate: null,
    minAmount: 500,
    currency: "INR",
    productCategory: "Small Cap",
    productSubCategory: "Eq",
  },
];

const Product = () => {
  const [rowData, setRowData] = useState();

  const columns = useMemo(
    () => [
      {
        field: "productName",
        header: "Product Name",
        size: 150,
      },
      {
        field: "productCategory",
        header: "Category",
        size: 150,
      },
      {
        field: "productSubCategory",
        header: "Sub-Category",
        size: 200,
      },
      {
        field: "minAmount",
        header: "Min Amount",
        size: 150,
      },
      {
        field: "currency",
        header: "Currency",
        size: 150,
      },
    ],
    [],
  );

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const onSelectionChanged = (event) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setRowData(selectedData[0]);
  };

  const getRowStyle = (params) => {
    if (params.node.isSelected()) {
      return { backgroundColor: "#D9DFE3" };
    }
    return {};
  };

  return (
    <div
      className="h-full w-full mx-10 py-10 ag-theme-quartz"
      style={{ height: 500 }}
    >
      <AgGridReact
        defaultColDef={defaultColDef}
        rowSelection={"single"}
        rowMultiSelectWithClick={true}
        onSelectionChanged={onSelectionChanged}
        rowData={data}
        columnDefs={columns}
        getRowStyle={getRowStyle}
      />
      <div className="mt-6">
        <Button
          disabled={!rowData}
          className={`bg-primary ${!rowData && "bg-secondary"}`}
          size="small"
          variant="contained"
        >
          Invest now
        </Button>
      </div>
    </div>
  );
};

export default Product;
