import {
  faArrowLeft,
  faBell,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import UserInfo from "../UserInfo";
import "./style.css";
import { useState } from "react";
import { grey, red } from "@mui/material/colors";

function TopBar() {
  const [visible, setVisible] = useState<boolean>(false);
  const handleShowUserInfo = () => {
    setVisible(!visible);
  };
  return (
    <Box className="top-bar">
      <Box className="top-bar-header">
        <Box className="user-info">
          <Box className="icon-bell">
            <FontAwesomeIcon icon={faBell} />
          </Box>
          <UserInfo handleShowUserInfo={handleShowUserInfo} />
        </Box>
      </Box>
      {visible ? (
        <Box className="user-info--modal">
          <Box
            sx={{
              padding: `16px 16px`,
              borderBottom: `1px solid #ffffff0d`,
            }}
          >
            <Typography className="modal-item--title" sx={{ fontSize: 12 }}>
              Phạm Tiến Đạt
            </Typography>
          </Box>
          <Box className="modal-box">
            <Box className="modal-item">
              <FontAwesomeIcon icon={faUser} className="modal-item--icon" />
              <Typography className="modal-item--title" sx={{ fontSize: 12 }}>
                Profile
              </Typography>
            </Box>
            <Box className="modal-item">
              <FontAwesomeIcon icon={faLock} className="modal-item--icon" />
              <Typography className="modal-item--title" sx={{ fontSize: 12 }}>
                Reset Account
              </Typography>
            </Box>
            <Box className="modal-item">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="modal-item--icon"
              />
              <Typography className="modal-item--title" sx={{ fontSize: 12 }}>
                Logout
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
export default TopBar;
