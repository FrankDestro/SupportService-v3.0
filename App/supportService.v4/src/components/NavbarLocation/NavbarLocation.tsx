import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';

import './NavbarLocation.css';

const NavbarLocation = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return { title: 'Home | Panel', icon: faHome };
      case '/ticket':
        return { title: 'Ticket', icon: faTicket };
      case '/user':
        return { title: 'User', icon: faUser };
      default:
        return { title: '', icon: null };
    }
  };

  const { title, icon } = getTitle();

  return (
    <div className="container-navbar-location">
      {icon && <FontAwesomeIcon icon={icon} className="navbar-icon" />}
      <h3>{title}</h3>
      {/* Você pode adicionar mais elementos no cabeçalho aqui, se necessário */}
    </div>
  );
};

export default NavbarLocation;
