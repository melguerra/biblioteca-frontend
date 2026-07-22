import { Link, useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();

const cerrarSesion = () => {
  localStorage.removeItem("token"); //aca borra el token
  localStorage.removeItem("usuario"); //borra los datos del usuario

  navigate("/");  //manda automaticamente al usuario al home
};
  return (
    <nav className="navbar">
      <h2>📚 Biblioteca</h2>

      <div className="nav-links">
  <Link to="/">Inicio</Link>
  <Link to="/login">Login</Link>
  <Link to="/registro">Registrarse</Link>

  <button onClick={cerrarSesion}>
    Cerrar sesión
  </button>
</div>
    </nav>
  );
}

export default Navbar;