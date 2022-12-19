import { DataGrid, GridApi, GridCellValue, GridColDef } from "@mui/x-data-grid";
import { Button, InputLabel, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPlus,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";

const rows: any = [
  { id: 1, productName: "Jon", price: 35 },
  { id: 2, productName: "Cersei", price: 42 },
  { id: 3, productName: "Jaime", price: 45 },
  { id: 4, productName: "Arya", price: 16 },
  { id: 5, productName: "Daenerys", price: null },
  { id: 6, productName: null, price: 150 },
  { id: 7, productName: "Ferrara", price: 44 },
  { id: 8, productName: "Rossini", price: 36 },
  { id: 9, productName: "Harvey", price: 65 },
  { id: 10, productName: "Jon", price: 35 },
  { id: 11, productName: "Cersei", price: 42 },
  { id: 12, productName: "Jaime", price: 45 },
  { id: 13, productName: "Arya", price: 16 },
  { id: 14, productName: "Daenerys", price: null },
  { id: 15, productName: null, price: 150 },
  { id: 16, productName: "Ferrara", price: 44 },
  { id: 17, productName: "Rossini", price: 36 },
  { id: 18, productName: "Harvey", price: 65 },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  border: "1px solid #eee",
  borderRadius: 2,
};
export default function Products() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 20 },
    {
      field: "images",
      headerName: "Images",
    },
    { field: "productName", headerName: "Product Name", width: 130 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 200,
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 200,
      hideable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
        };

        return (
          <Box style={{ display: "flex" }}>
            <Button onClick={handleOpen} variant="text">
              <FontAwesomeIcon icon={faPen} color="black" />
            </Button>
            <Button onClick={onClick} variant="text">
              <FontAwesomeIcon icon={faTrashAlt} color="black" />
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <div style={{ padding: "16px", marginTop: "16px" }}>
      <div className="product-actions">
        <Button
          variant="contained"
          style={{
            marginLeft: "auto",
            marginBottom: 16,
            borderRadius: 8,
            fontSize: "12px",
            padding: "8px 16px",
          }}
          onClick={handleOpen}
          size="small"
          startIcon={<FontAwesomeIcon icon={faPlus} size="xs" />}
        >
          Add product
        </Button>
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[2]}
          checkboxSelection
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            borderBottom={0.5}
            borderColor="#164e63"
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            Thêm sản phẩm
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box p={2}>
            <InputLabel style={{ marginBottom: 8 }}>Tên sản phẩm</InputLabel>
            <OutlinedInput
              style={{ width: "100%", marginBottom: 8 }}
              placeholder="Vui lòng nhập tên sản phẩm"
              size="small"
            />
            <InputLabel style={{ marginBottom: 8 }}>
              Hình ảnh sản phẩm
            </InputLabel>
            <OutlinedInput
              style={{ width: "100%", marginBottom: 8 }}
              placeholder="Vui lòng chọn hình ảnh sản phẩm"
              size="small"
            />
            <InputLabel style={{ marginBottom: 8 }}>Giá sản phẩm</InputLabel>
            <OutlinedInput
              style={{ width: "100%", marginBottom: 8 }}
              placeholder="Vui lòng nhập giá sản phẩm"
              size="small"
            />
            <InputLabel style={{ marginBottom: 8 }}>Trạng thái</InputLabel>
            <OutlinedInput
              style={{ width: "100%", marginBottom: 8 }}
              placeholder="Vui lòng nhập giá sản phẩm"
              size="small"
            />
            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button
                variant="outlined"
                style={{
                  width: "100px",
                }}
                onClick={handleClose}
                size="small"
              >
                Huỷ bỏ
              </Button>
              <Button
                style={{
                  width: "100px",
                  marginLeft: "12px",
                }}
                variant="contained"
                onClick={handleOpen}
                size="small"
              >
                Xác nhận
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
