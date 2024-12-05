import {
  faArrowLeft,
  faArrowRight,
  faChartPie,
  faGear,
  faHome,
  faTicket,
  faUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import profile from "../../assets/natalia.jpg";
import "./SideMenu.css";
import * as userService from "../../Service/user-service"
import { useEffect, useState } from "react";
import { UserDTO } from "../../models/RequesterDTO";

interface SideMenuProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isCollapsed, toggleSidebar }) => {

  const [userDetails, setUserDetails] = useState<UserDTO>();

  useEffect(() => {
    userService.UserProfileDetails().
      then((response) => {
        setUserDetails(response.data)
      })
  }, [])

  return (
    <div className={`sideMenu ${isCollapsed ? "collapsed" : ""}`}>
      <div className="container-bt">
        {isCollapsed ? (
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={toggleSidebar}
            className="button-collapse"
            color="white"
            fontSize={18}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={toggleSidebar}
            className="button-collapse"
            color="white"
            fontSize={18}
          />
        )}
      </div>

      <div className="container-menu">
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <h3>Home</h3>
        </Link>
        <Link to="/ticket" className="link">
          <FontAwesomeIcon icon={faTicket} className="icon" />
          <h3>Ticket</h3>
        </Link>

        <Link to="/user" className="link">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <h3>User</h3>
        </Link>

        <Link to="/dashboard" className="link">
          <FontAwesomeIcon icon={faChartPie} className="icon" />
          <h3>Dashboard</h3>
        </Link>
        <Link to="/settings/general" className="link">
          <FontAwesomeIcon icon={faGear} className="icon" />
          <h3>Settings</h3>
        </Link>
        <Link to="/test" className="link">
          <FontAwesomeIcon icon={faWarning} className="icon" />
          <h3>Test</h3>
        </Link>
      </div>

      <div className="sidebar__profile">
        <div className="avatar__wrapper">
          <img className="avatar" src={userDetails?.imgProfile} alt="Natalia Bartošová" />
          <div className="online__status"></div>
        </div>
        <div className="avatar__name hide">
          <div className="user-name">{userDetails?.firstName} {userDetails?.lastName}</div>
          <div className="email">{userDetails?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
