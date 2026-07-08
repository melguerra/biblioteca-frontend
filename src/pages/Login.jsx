import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState(""); //aca se guarda lo que el usuario escribe en el campo usuario //
  const [password, setPassword] = useState("");

const manejarLogin = (e) => {
  e.preventDefault();

  if (usuario === "" || password === "") {
    alert("Complete todos los campos.");
    return;
  }

  alert("Más adelante este botón iniciará sesión.");
};

  return (
    <div className="home">

      <h1>Iniciar sesión</h1>

      <form onSubmit={manejarLogin}>

        <div>
          <label>Usuario</label>
          <br />
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Iniciar sesión
        </button>

      </form>

    </div>
  );
}

export default Login;