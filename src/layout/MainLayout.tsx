import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import "./style.css";

function MainLayout() {
  return (
    <>
      <SideBar />
      <div className="main">
        <div className="main__content">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default MainLayout;
