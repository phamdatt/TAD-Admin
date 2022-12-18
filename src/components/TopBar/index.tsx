import { faBarsStaggered, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import UserInfo from "../UserInfo";
import "./style.css";

function TopBar() {
  const location = useLocation();
  const [nameTopBar,setNameTopBar] = useState<string>('');
  
  useEffect(() => {
    //@ts-ignore
    const curPath = window.location.pathname.split("/")[1];
    let name = curPath.charAt(0).toUpperCase() + curPath.substring(1);
    setNameTopBar(name);
  }, [location]);
  
  return (
    <div className="top-bar">
      <div className="top-bar-header">
        <FontAwesomeIcon icon={faBarsStaggered} />
        <div className="top-bar-title">{nameTopBar}</div>
        <div className="user-info">
          <div className="icon-bell">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
export default TopBar;
