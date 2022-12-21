import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputLabel, Modal } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/system";
import { useState } from "react";
import CustomerTableComponentCustom from "./components/index";
import "./style.css";

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

export default function Orders() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ padding: "16px" }}>
      <div className="grid-customer">
        <CustomerTableComponentCustom />
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
