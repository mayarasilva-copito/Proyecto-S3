import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav-header">
        <div className="nav-inner">
          <div className="logito">
            <div className="logo ">Logo</div>
          </div>
          <ul className="">
            <li className="">
              <Link to="/Portada">Home</Link>
            </li>
            <li className="">
              <Link to="/Quienessomos">¿Quienes Somos?</Link>
            </li>
            <li className="">
              <Link to="/Listademascotas">Mascotas</Link>
            </li>
            <li className="">
              <Link to="/Formulario">Formulario</Link>
            </li>
            <li className="">
              <Link to="/Cuidados">Cuidados holiii</Link>
            </li>
            <li className="">
              <Link to="/Contactanos">Contactos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
