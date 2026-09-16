import { NavLink, Link } from "react-router";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">👥</span>
          <span className="brand-text">Gestión de Usuarios</span>
        </Link>
        <nav className="navbar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Usuarios
          </NavLink>
          <NavLink
            to="/nuevo"
            className={({ isActive }) =>
              `nav-link btn-nav ${isActive ? "active" : ""}`
            }
          >
            + Nuevo Usuario
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
