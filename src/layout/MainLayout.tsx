import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import "./style.css";
import { Box } from "@mui/material";

function MainLayout() {
  return (
    <Box>
      <SideBar />
      <Box className="main">
       
        <Box className="main__content">
          <TopBar />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
export default MainLayout;
