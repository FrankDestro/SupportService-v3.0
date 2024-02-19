import { Nav, Navbar } from "react-bootstrap";
import Perfil from "../perfil";
import "./styles.css";

function NavbarMenu() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <div className="container-fluid">
          {/* <img src={LogoMain} alt="logoMain"></img> */}
          <Navbar.Brand href="#">
            <span
              style={{
                color: "var(--ss-color-font-Quaternáry)",
                fontWeight: "bold",
                marginLeft : '30px',
              }}
            >
              Support
            </span>
            <span
              style={{
                color: "var(--ss-color-font-Quinto)",
                marginLeft: "5px",
              }}
            >
              Service
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Perfil />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarMenu;