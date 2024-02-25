import React, { useState } from "react";
import "./styles.css"; // Importe seu arquivo CSS

import Support from "../../assets/iconsupport.gif";

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
        <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
      </header>

      <div className={`menu-bar ${isSidebarClosed ? "closed" : ""}`}>
        <div className="menu">
          <ul className="menu-links">
            <div className="sidenav">
              <li className="nav-link">
                <a href="/">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#" className="">
                  <i className="bx bx-calendar icon"></i>
                  <span
                    className={`dropdown-btn ${
                      isActive ? "active" : ""
                    } text nav-text`}
                    onClick={handleDropdownClick}
                  >
                    Call
                    <i
                      className={`bx ${
                        isActive ? "bx-chevron-up" : "bx-chevron-down"
                      } arrow-icon`}
                    ></i>
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
                <i className="bx bx-notepad icon"></i>

                <span className="text nav-text">Tickets</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/users">
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">Users</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Reports</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-calendar icon"></i>
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
