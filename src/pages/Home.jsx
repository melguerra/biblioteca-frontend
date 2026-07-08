import { Link } from "react-router-dom"; //permite navegar entre páginas sin recargar la página completa//

function Home() {
  const libros = [  //es una lista de libros//
    "Harry Potter",
    "Clean Code",
    "El Principito"
  ];

  return (
    <div className="home">
      <h1>📚 Biblioteca Personal</h1>

      <p>
        Bienvenido a mi proyecto final de
        Metodología de Desarrollo Web.
      </p>

      <div>

        <Link to="/login"> 
          <button>Iniciar sesión</button>
        </Link>

        <Link to="/registro">
          <button>Registrarse</button>
        </Link>

      </div>

      <hr />

      <h2>Libros disponibles</h2>

      <ul>

        {libros.map((libro, index) => (  //aca recorre la lista de libros y muestra cada libro //
          <li key={index}>
            📖 {libro}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default Home;