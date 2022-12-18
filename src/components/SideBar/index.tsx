import "./style.css";
import { images } from "../../contants/images";
import { sidebarNav } from "../../contants/sidebarNav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    //@ts-ignore
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex((item) => item.url === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={images.logo} alt="" className="sidebar-header--logo" />
        <p className="sidebar-header--title">Tad Clothes</p>
      </div>
      <div className="sidebar-menu">
        {sidebarNav.map((itemNav, index) => {
          return (
            <Link
              to={itemNav.url}
              key={`nav-${index}`}
              className={activeIndex === index ? 'sidebar-menu--item--active' : 'sidebar-menu--item'}
            >
              <div className="sidebar-menu--item--icon">
                <FontAwesomeIcon icon={itemNav.icon} />
              </div>
              <div className="sidebar-menu--item--title">{itemNav.title}</div>
            </Link>
          );
        })}
        <div className="sidebar-menu--item">
          <div className="sidebar-menu--item--icon">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </div>
          <div className="sidebar-menu--item--title">Logout</div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
