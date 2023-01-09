import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import "./style.css";
import { Box } from "@mui/material";
import { useMemo } from "react";
import { getData } from "../helper/localStorage";
import { localStorageKeys } from "../contants/localStorageKeys";

function MainLayout() {
  let MODE = getData(localStorageKeys.MODE);
  const isChecked = useMemo(() => {
    return MODE === "light";
  }, [MODE]);

  return (
    <Box>
      <SideBar />
      <Box className="main">
        <Box className="main__content" sx={{
           backgroundColor: isChecked ? "white" : "rgb(35,45,69)",
        }}>
          <TopBar />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
export default MainLayout;
