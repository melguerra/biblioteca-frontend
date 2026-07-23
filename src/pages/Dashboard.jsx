import { useEffect, useState } from "react";

function Dashboard() {

  const [libros, setLibros] = useState([]);  //guardar los libros
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  useEffect(() => { //cargar los libros cuando se abre el dashboard
    obtenerLibros(); //hace el GET al backend
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

  const agregarLibro = async () => {

  if (titulo === "" || autor === "") {
    alert("Complete todos los campos.");
    return;
  }

  try {

    const respuesta = await fetch("http://localhost:3000/api/libros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo,
        autor,
      }),
    });

    if (!respuesta.ok) {
      alert("Error al agregar el libro.");
      return;
    }

    setTitulo("");
    setAutor("");

    obtenerLibros();

  } catch (error) {
    console.log(error);
  }
};

const eliminarLibro = async (id) => {

  const confirmar = window.confirm("¿Está seguro que desea eliminar este libro?");

  if (!confirmar) {
    return;
  }

  try {

    const respuesta = await fetch(`http://localhost:3000/api/libros/${id}`, {
      method: "DELETE",
    });

    if (!respuesta.ok) {
      alert("Error al eliminar el libro.");
      return;
    }

    obtenerLibros();

  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="home">

      <h1>Panel de Administración</h1>

      <p>
        Desde esta pantalla se administrarán los libros.
      </p>

      <div>

 <input
  type="text"
  placeholder="Título"
  value={titulo}
  onChange={(e) => setTitulo(e.target.value)}
/>

  <input
  type="text"
  placeholder="Autor"
  value={autor}
  onChange={(e) => setAutor(e.target.value)}
/>

  <button onClick={agregarLibro}>
  Agregar libro
</button>

</div>

      <hr />

      <table>

        <thead>

          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Acciones</th>
          </tr>

        </thead>

 <tbody>
          {libros.map((libro) => (
            <tr key={libro._id}>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>
                <button>Editar</button>

                <button onClick={() => eliminarLibro(libro._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;