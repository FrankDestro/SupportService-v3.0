import { useEffect, useRef, useState } from "react";
import Bell from "../../assets/bell.png";
import Help from "../../assets/help.png";
import Logo from "../../assets/logo.svg";
import Logout from "../../assets/logout.png";



import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // Estado para o submenu
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null); // Ref para o submenu

  // Abre ou fecha o menu de notificações
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Abre ou fecha o submenu
  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  // Fecha o menu ou submenu ao clicar fora
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
    if (
      submenuRef.current &&
      !submenuRef.current.contains(event.target as Node)
    ) {
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
        <span className="logo-text">Support Service</span>
      </div>
      <div className="header-center"></div>
      <div className="header-user-icon">
        <button onClick={toggleSubmenu} className="button-options">
          + Opções Rápidas
        </button>

        <div className="header-user-icon">
          <div className="notification-badge">3</div>
          <img src={Bell} alt="bell" onClick={toggleMenu} />
          <img src={Logout} alt="help" />
          <img src={Help} alt="help" />
        </div>

        <div
          className={`notification-menu ${isMenuOpen ? "visible" : ""}`}
          ref={menuRef}
        >
          <p>Notificação 1</p>
          <p>Notificação 2</p>
          <p>Notificação 3</p>
        </div>

        <div
          className={`submenu ${isSubmenuOpen ? "visible" : ""}`}
          ref={submenuRef}
        >
          <p>Submenu Item 1</p>
          <p>Submenu Item 2</p>
          <p>Submenu Item 3</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
