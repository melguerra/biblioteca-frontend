import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

  const token = localStorage.getItem("token"); //aca pregunta si exite un token ya guardado en el navagador

  if (!token) {
    return <Navigate to="/login" />; //si no existe el token entonces lo manda automaticamente al Login.
  }

  return children;    //Deja pasar al usuario.
}

export default PrivateRoute;