import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { images } from "../../contants/images";
import { localStorageKeys } from "../../contants/localStorageKeys";
import { sidebarNav } from "../../contants/sidebarNav";
import { getData } from "../../helper/localStorage";
import "./style.css";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const location = useLocation();
  const MODE = getData(localStorageKeys.MODE);

  useEffect(() => {
    //@ts-ignore
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex((item) => item.url === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  function CustomLink(props: any) {
    const { to, children, ...restProps } = props;
    return (
      <Box>
        <LinkRouter to={to} {...restProps}>
          {children}
        </LinkRouter>
      </Box>
    );
  }

  return (
    <Box className="sidebar">
      <Box className="sidebar-header">
        <img src={images.logo} alt="" className="sidebar-header--logo" />
        <Typography className="sidebar-header--title">Tad Clothes</Typography>
      </Box>
      <Box className="sidebar-menu">
        {sidebarNav.map((itemNav, index) => {
          return (
            <CustomLink
              to={itemNav.url}
              key={`nav-${index}`}
              className={
                activeIndex === index
                  ? "sidebar-menu--item--active"
                  : "sidebar-menu--item"
              }
              style={{
                color: MODE === "dark" ? "white" : "black",
              }}
            >
              <Typography>
                <FontAwesomeIcon
                  icon={itemNav.icon}
                  className="sidebar-menu--item--icon"
                />
              </Typography>
              <Box className="sidebar-menu--item--title">
                <Typography>{itemNav.title}</Typography>
              </Box>
            </CustomLink>
          );
        })}
        <Box className="sidebar-menu--item">
          <Box className="sidebar-menu--item--icon">
            <Typography>
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </Typography>
          </Box>
          <Box className="sidebar-menu--item--title">
            <Typography>Logout</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default SideBar;
