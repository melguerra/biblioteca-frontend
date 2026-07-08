import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;