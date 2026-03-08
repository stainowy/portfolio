import { NavLink } from 'react-router-dom';
import './nav.scss';

export default function Navigation() {
  return (
    <nav className="main-navigation">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/portfolio">Portfolio</NavLink>

      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
