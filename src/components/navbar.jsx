import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <nav className="nav-header">
        <div className="nav-inner">
          {/* 🔹 Logo */}
          <div className="logito">
            <div className="logo"></div>
            <h1 className="titulo">Happy Tails</h1>
          </div>

          {/* 🔹 Menú hamburguesa (solo en celular) */}
          <div
            className={`menu-icon ${menuAbierto ? "activo" : ""}`}
            onClick={toggleMenu}
          >
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
          </div>

          {/* 🔹 Enlaces de navegación */}
          <ul className={`nav-links ${menuAbierto ? "activo" : ""}`}>
            <li>
              <Link to="/Portada" onClick={() => setMenuAbierto(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Quienessomos" onClick={() => setMenuAbierto(false)}>
                ¿Quiénes Somos?
              </Link>
            </li>
            <li>
              <Link to="/Listademascotas" onClick={() => setMenuAbierto(false)}>
                Mascotas
              </Link>
            </li>
            <li>
              <Link to="/Formulario" onClick={() => setMenuAbierto(false)}>
                Formulario
              </Link>
            </li>
            <li>
              <Link to="/Tips" onClick={() => setMenuAbierto(false)}>
                Cuidados
              </Link>
            </li>
            <li>
              <Link to="/Contactanos" onClick={() => setMenuAbierto(false)}>
                Contactos
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* 🔹 Panel del carrito */}
      <div className={`carrito-panel ${carritoAbierto ? "activo" : ""}`}>
        <h2>Mi Carrito 🐾</h2>
        <p>Aquí aparecerán las mascotas que elijas para adoptar.</p>
        <button className="cerrar-btn" onClick={toggleCarrito}>
          Cerrar
        </button>
      </div>
    </>
  );
}

export default Navbar;
