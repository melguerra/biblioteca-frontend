import { useEffect, useState } from "react";

function Dashboard() {

  const [libros, setLibros] = useState([]);  //guardar los libros
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idEditar, setIdEditar] = useState(null);

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

   const guardarLibro = async () => {
   if (titulo.trim() === "" || autor.trim() === "") { //el trim elimina los espacios en blanco al inicio y al final de la cadena
  alert("Complete todos los campos.");
  return;
}
  try {
    const token = localStorage.getItem("token");

    const url = idEditar
  ? `http://localhost:3000/api/libros/${idEditar}`
  : "http://localhost:3000/api/libros";

const metodo = idEditar ? "PUT" : "POST";

const respuesta = await fetch(url, {
  method: metodo,
  headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
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
    setIdEditar(null);

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
    const token = localStorage.getItem("token");

    const respuesta = await fetch(`http://localhost:3000/api/libros/${id}`, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${token}`,
  },
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

const editarLibro = (libro) => {
  setTitulo(libro.titulo);
  setAutor(libro.autor);
  setIdEditar(libro._id);
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

 <button onClick={guardarLibro}>
  {idEditar ? "Actualizar libro" : "Agregar libro"}
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

               <button onClick={() => editarLibro(libro)}>
                  Editar
                </button>

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