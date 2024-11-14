import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faHome,
  faTasks,
  faTicket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./NavbarLocation.css";

const NavbarLocation = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return { title: "Home | Panel", icon: faHome };
      case "/ticket":
        return { title: "Ticket", icon: faTicket };
      case "/user":
        return { title: "User", icon: faUser };
      case "/abas":
        return { title: "AbasTicket", icon: faDatabase };
      case "/ticketdetails":
        return { title: "Detalhes do ticket", icon: faTasks };
      default:
        return { title: "", icon: null };
    }
  };

  const { title, icon } = getTitle();

  return (
    <div className="container-navbar-location">
      <div className="container-content-navbar-location">
        {icon && <FontAwesomeIcon icon={icon} className="navbar-icon" />}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default NavbarLocation;
