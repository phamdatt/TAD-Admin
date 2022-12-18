import { faBarsStaggered, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserInfo from "../UserInfo";
import "./style.css";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-header">
        <FontAwesomeIcon icon={faBarsStaggered} />
        <div className="top-bar-title">DashBoard</div>
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
