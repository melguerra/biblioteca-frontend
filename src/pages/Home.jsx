import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  const [libros, setLibros] = useState([]);

  useEffect(() => {

    obtenerLibros();

  }, []);

  const obtenerLibros = async () => {

    try {

      const respuesta = await fetch("http://localhost:3000/api/libros");

      const datos = await respuesta.json();

      setLibros(datos);

    } catch (error) {

      console.log(error);

    }

  };

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

        {libros.map((libro) => (

          <li key={libro.id}>

            📖 {libro.titulo} - {libro.autor}

          </li>

        ))}

      </ul>

    </div>
  );
}

export default Home;