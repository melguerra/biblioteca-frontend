import { useState } from "react";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const manejarLogin = async (e) => {
  e.preventDefault();

  if (email === "" || password === "") {
    alert("Complete todos los campos.");
    return;
  }

try {
  const respuesta = await fetch("http://localhost:3000/api/usuarios/login", { //el fetch hace una peticion al backend para loguear al usuario, le envia el email y la contraseña que el usuario ingreso en el formulario
    method: "POST", //el post indica que estamos enviando datos
    headers: {  //le dice al servidor que los datos estan en formato json
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const datos = await respuesta.json(); //aca lee la rta que envia el backend

  if (!respuesta.ok) {
    alert(datos.mensaje);
    return;
  }

  alert(datos.mensaje);  //aca se mostrara si el backend responde con errores

} catch (error) {
  console.log(error);
  alert("Error al conectar con el servidor.");
}};

  return (
    <div className="home">

      <h1>Iniciar sesión</h1>

      <form onSubmit={manejarLogin}>

        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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