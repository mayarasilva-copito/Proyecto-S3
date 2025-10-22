import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Portada from "./components/portada";
import Quienessomos from "./components/quienessomos";
import Listademascotas from "./components/mascotas";
import Formulario from "./components/formulario";
import Tips from "./components/tips";
import Contactanos from "./components/contactanos";
import Footer from "./components/footer";
import Solicitudes from "./components/solicitudes";
import Carrito from "./components/carrito";

function Rutas() {
  const location = useLocation();
  const mascotasAdoptadas = location.state?.mascotasAdoptadas || [];

  return (
    <Routes>
      <Route path="/Portada" element={<Portada />} />
      <Route path="/Quienessomos" element={<Quienessomos />} />
      <Route path="/Listademascotas" element={<Listademascotas />} />
      <Route path="/carrito" element={<Carrito mascotasAdoptadas={mascotasAdoptadas} />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/Formulario" element={<Formulario />} />
      <Route path="/solicitudes" element={<Solicitudes />} />
      <Route path="/Contactanos" element={<Contactanos />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rutas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;