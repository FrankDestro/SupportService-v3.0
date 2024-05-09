import { faArrowDown, faArrowLeftLong, faArrowUp, faBarChart, faCalendar, faHome, faPhone, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Support from "../../assets/iconsupport.gif";
import "./styles.css";

const Sidebar: React.FC = () => {

  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
    setIsActive(false);
  };

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={Support} alt="" />
          </span>
          <div
            className="text logo-text"
            style={{ marginBottom: isSidebarClosed ? "-50px" : "0" }}
          >
            <span className="name">Support Service </span>
            <span className="profession">Apps</span>
          </div>
        </div>
        <div className="bx toggle container-arrow-close-menu"  onClick={toggleSidebar}> <FontAwesomeIcon icon={faArrowLeftLong} fontSize={14}/></div>
      </header>

      <div className={`menu-bar ${isSidebarClosed ? "closed" : ""}`}>
        <div className="menu">
          <ul className="menu-links">
            <div className="sidenav">
              <li className="nav-link">
                <a href="/">
                  <div className="bx icon"><FontAwesomeIcon icon={faHome} /></div>
                  <span className="text nav-text">Home</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#" className="">
                  <div className="bx icon"><FontAwesomeIcon icon={faPhone} /> </div>
                  <span
                    className={`dropdown-btn ${isActive ? "active" : ""
                      } text nav-text`}
                    onClick={handleDropdownClick}
                  >
                    Call
                    {isActive ? (
                      <div className="bx icon"><FontAwesomeIcon icon={faArrowUp} fontSize={14} /> </div>
                    ) : (
                      <div className="bx icon"> <FontAwesomeIcon icon={faArrowDown}  fontSize={14} /></div>
                    )}
                  </span>
                </a>
              </li>
              <div className={`dropdown-container ${isActive ? "active" : ""}`}>
                <a href="#">Add Clients</a>
                <a href="#">Report</a>
                <a href="#">Contract</a>
              </div>
            </div>

            <li className="nav-link">
              <a href="/tickets">
                <div className="bx icon"><FontAwesomeIcon icon={faTicket} /></div>
                <span className="text nav-text">Tickets</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/users">
                <div className="bx icon"><FontAwesomeIcon icon={faUser} /></div>
                <span className="text nav-text">Users</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/dashboard">
                <div className="bx icon"><FontAwesomeIcon icon={faBarChart} /></div>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <div className="bx icon"><FontAwesomeIcon icon={faCalendar} /></div>
                <span className="text nav-text">Calendar</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li>
            <a href="#">
              <i className="bx bx-cog icon"></i>
              <span className="text nav-text">Settings</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
