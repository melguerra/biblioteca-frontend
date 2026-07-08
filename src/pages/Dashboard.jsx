function Dashboard() {
  return (
    <div className="home">

      <h1>Panel de Administración</h1>

      <p>
        Desde esta pantalla se administrarán los libros.
      </p>

      <button>
        Agregar libro
      </button>

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

          <tr>
            <td>Harry Potter</td>
            <td>J. K. Rowling</td>
            <td>

              <button>Editar</button>

              <button>Eliminar</button>

            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Dashboard;