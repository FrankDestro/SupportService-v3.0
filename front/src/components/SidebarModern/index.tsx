import { faChartPie, faChevronDown, faHome, faTicket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import access from "../../assets/access.png";
import logo from "../../assets/logo.svg";
import profile from "../../assets/natalia.jpg";
import './styles.css';

const SidebarModern: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    document.body.classList.toggle('collapsed');
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    if (href === '#Tickets') {
      setOpenSubmenu(openSubmenu === href ? null : href);
    }
  };

  const links = [
    { href: '/home', title: 'Home', icon: faHome },
    { href: '#Tickets', title: 'Tickets', icon: faTicket },
    { href: '/users', title: 'Users', icon: faUsers },
    { href: '/dashboard', title: 'Dashboard', icon: faChartPie },
  ];

  return (
    <nav className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-top">
          <a href="#" className="logo__wrapper">
            <img src={logo} alt="Crestline Bank Logo" className="logo" />
            <span className="hide company-name">Support service</span>
          </a>
        </div>
        <button className="expand-btn" type="button" onClick={handleCollapse}>
          <img src={access} alt="Expand/Collapse" />
        </button>
      </div>
      <div className="sidebar-links-wrapper">
        <div className="sidebar-links">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} title={link.title} onClick={() => handleLinkClick(link.href)}>
                  <FontAwesomeIcon icon={link.icon} className="icon" />
                  <span className="link hide">{link.title}</span>
                  {link.title === 'Tickets' && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ fontSize: '2px' }} // Altere o valor conforme necessário
                      className={`expand-icon ${openSubmenu === link.href ? 'open' : ''}`}
                    />
                  )}
                </a>
                {link.title === 'Tickets' && (
                  <ul className={`submenu ${openSubmenu === link.href ? 'open' : 'hide'}`}>
                    <li><a href="/tickets" title="Income">Tickets</a></li>
                    <li><a href="#expenses" title="Expenses">Expenses</a></li>
                    <li><a href="#statements" title="Statements">Statements</a></li>
                    <li><a href="#payouts" title="Payouts">Payouts</a></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__profile">
        <div className="avatar__wrapper">
          <img className="avatar" src={profile} alt="Natalia Bartošová" />
          <div className="online__status"></div>
        </div>
        <div className="avatar__name hide">
          <div className="user-name">Natalia Bartošová</div>
          <div className="email">@natalia_bartosova</div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarModern;