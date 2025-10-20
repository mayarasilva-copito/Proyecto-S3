import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // 🛒 icono
import "./navbar.css";

function Navbar() {
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

  return (
    <>
      <nav className="nav-header">
        <div className="nav-inner">
          <div className="logito">
            <div className="logo"></div>
            <h1 className="titulo">Happy Tails</h1>
          </div>

          <ul className="nav-links">
            <li><Link to="/Portada">Home</Link></li>
            <li><Link to="/Quienessomos">¿Quiénes Somos?</Link></li>
            <li><Link to="/Listademascotas">Mascotas</Link></li>
            <li><Link to="/Formulario">Formulario</Link></li>
            <li><Link to="/Tips">Cuidados</Link></li>
            <li><Link to="/Contactanos">Contactos</Link></li>
            <li>
              <button className="btn-carrito" onClick={toggleCarrito}>
                <FaShoppingCart size={22} />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Panel del carrito */}
      <div className={`carrito-panel ${carritoAbierto ? "activo" : ""}`}>
        <h2>Mi Carrito 🐾</h2>
        <p>Aquí aparecerán las mascotas que elijas para adoptar.</p>
        <button className="cerrar-btn" onClick={toggleCarrito}>Cerrar</button>
      </div>
    </>
  );
}

export default Navbar;