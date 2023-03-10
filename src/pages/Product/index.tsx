import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputLabel, Modal } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/system";
import { useState } from "react";
import TableComponentCustom from "./components/TableCustom";
import "./style.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "rgb(40 51 78)",
  border: "1px solid #rgb(40 51 78)",
  borderRadius: 2,
  color: "#CAD4E0",
};

export default function Products() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Box className="product-actions">
        <Button
          variant="contained"
          style={{
            marginLeft: "auto",
            borderRadius: 8,
            fontSize: "12px",
          }}
          onClick={handleOpen}
          size="small"
          startIcon={<FontAwesomeIcon icon={faPlus} size="xs" />}
        >
          Add product
        </Button>
      </Box>
      <Box className="grid">
        <TableComponentCustom />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            borderBottom={0.5}
            borderColor="#CAD4E0"
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
    </Box>
  );
}
