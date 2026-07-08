import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>📚 Biblioteca</h2>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
        <Link to="/registro">Registrarse</Link>
      </div>
    </nav>
  );
}

export default Navbar;