import { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const manejarRegistro = (e) => {
    e.preventDefault();

    if (nombre === "" || usuario === "" || password === "") {
      alert("Complete todos los campos.");
      return;
    }

    alert("Más adelante el usuario se registrará.");
  };

  return (
    <div className="home">
      <h1>Registro de usuario</h1>

      <form onSubmit={manejarRegistro}>
        <div>
          <label>Nombre completo</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Registro;