import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Switch } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import "./style.css";

interface Column {
  id:
    | "name"
    | "images"
    | "precent"
    | "priceCurrent"
    | "priceOld"
    | "status"
    | "actions"
    | "categories";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Tên sản phẩm", minWidth: 200, align: "center" },
  {
    id: "categories",
    label: "Danh mục",
    minWidth: 40,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  { id: "images", label: "Hình ảnh sản phẩm", minWidth: 100, align: "center" },
  {
    id: "precent",
    label: "Giảm giá",
    minWidth: 40,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "priceCurrent",
    label: "Giá hiện tại",
    minWidth: 40,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "priceOld",
    label: "Giá cũ",
    minWidth: 40,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Trạng thái",
    minWidth: 40,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "actions",
    label: "Chỉnh sửa và xoá",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  images: string;
  precent: number;
  priceCurrent: number;
  priceOld: number;
  status: boolean;
  actions: string;
  categories: string;
}

function createData(
  name: string,
  images: string,
  precent: number,
  priceCurrent: number,
  priceOld: number,
  status: boolean,
  actions: string,
  categories: string
): Data {
  return {
    name,
    images,
    precent,
    priceCurrent,
    priceOld,
    status,
    actions,
    categories,
  };
}

const rows = [
  createData(
    "CLASSIC SWEATSHIRT",
    "https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/122022/1670914672005.jpeg",
    30,
    1324171354,
    3287263,
    true,
    "",
    "Jacket"
  ),
  createData(
    "CLASSIC SWEATSHIRT",
    "https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/122022/1670914672005.jpeg",
    30,
    1324171354,
    3287263,
    false,
    "",
    "Jacket"
  ),
  createData(
    "CLASSIC SWEATSHIRT",
    "https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/122022/1670914672005.jpeg",
    30,
    1324171354,
    3287263,
    false,
    "",
    "Jacket"
  ),
  createData(
    "CLASSIC SWEATSHIRT",
    "https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/122022/1670914672005.jpeg",
    30,
    1324171354,
    3287263,
    true,
    "",
    "Jacket"
  ),
  createData(
    "CLASSIC SWEATSHIRT",
    "https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/122022/1670914672005.jpeg",
    30,
    1324171354,
    3287263,
    true,
    "",
    "Jacket"
  ),
  createData(
    "CLASSIC SWEATSHIRT",
    "https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/122022/1670914672005.jpeg",
    30,
    1324171354,
    3287263,
    true,
    "",
    "Jacket"
  ),
  createData(
    "CLASSIC SWEATSHIRT",
    "https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/122022/1670914672005.jpeg",
    30,
    1324171354,
    3287263,
    true,
    "",
    "Jacket"
  ),
];

export default function TableComponentCustom() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", height: "100%" }}>
      <TableContainer
        sx={{
          maxHeight: "90%",
          "&::-webkit-scrollbar": {
            width: `10px`,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#ffffff0d",
            borderRadius: 2,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ffffff0d",
            borderRadius: 2,
          },
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <>
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : column.id === "images" ? (
                            <img
                              src={row.images}
                              alt=""
                              style={{
                                width: 100,
                                height: 100,
                                objectFit: "cover",
                                borderRadius: 8,
                              }}
                            />
                          ) : column.id === "status" ? (
                            <Box>
                              <Switch />
                            </Box>
                          ) : column.id === "actions" ? (
                            <Box
                              display="flex"
                              flexDirection="row"
                              justifyContent="center"
                            >
                              <Button variant="text">
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </Button>
                              <Button>
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </Box>
                          ) : (
                            value
                          )}
                        </TableCell>
                      </>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
