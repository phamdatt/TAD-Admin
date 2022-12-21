import { faBarsStaggered, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserInfo from "../UserInfo";
import "./style.css";
import { Box } from "@mui/material";

function TopBar() {
  const location = useLocation();
  const [nameTopBar, setNameTopBar] = useState<string>("");

  useEffect(() => {
    //@ts-ignore
    const curPath = window.location.pathname.split("/")[1];
    if (!curPath) {
      setNameTopBar("Home");
    } else {
      let name = curPath.charAt(0).toUpperCase() + curPath.substring(1);
      setNameTopBar(name);
    }
  }, [location]);

  return (
    <Box className="top-bar">
      <Box className="top-bar-header">
        <Box className="top-bar-title">{nameTopBar}</Box>
        <Box className="user-info">
          <Box className="icon-bell">
            <FontAwesomeIcon icon={faBell} />
          </Box>
          <UserInfo />
        </Box>
      </Box>
    </Box>
  );
}
export default TopBar;
