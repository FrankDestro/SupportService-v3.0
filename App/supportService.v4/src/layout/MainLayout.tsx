import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import SideMenu from "../components/SideMenu/SideMenu";
import { useState } from "react";
import "./MainLayout.css";
import NavbarLocation from "../components/NavbarLocation/NavbarLocation";

function MainLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <SideMenu isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className={`content ${isCollapsed ? "collapsed" : ""}`}>
          <NavbarLocation />
          <Outlet />
        </div>
      </div>
      <Footer className={isCollapsed ? "collapsed" : ""} />
    </>
  );
}

export default MainLayout;
