import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./carrito.css";

function Carrito() {
  const navigate = useNavigate();
  const [adoptadas, setAdoptadas] = useState([]);

  useEffect(() => {
    const almacenadas = JSON.parse(localStorage.getItem("adoptadas")) || [];
    setAdoptadas(almacenadas);
  }, []);

  function confirmarAdopcion() {
    alert("🎉 ¡Gracias por adoptar! 🐾");
    localStorage.removeItem("adoptadas");
    setAdoptadas([]);
    navigate("/Listademascotas");
  }

  return (
    <div className="carrito-page">
      <h1 className="titulo-carrito">🛒 Carrito de Adopción</h1>

      {adoptadas.length === 0 ? (
        <p className="mensaje-vacio">Aún no se ha agregado ninguna mascota 🐶🐱</p>
      ) : (
        <div className="lista-carrito">
          {adoptadas.map((m) => (
            <div className="item-carrito" key={m.id}>
              <img src={m.imagen} alt={m.nombre} className="carrito-img" />
              <div>
                <h3>{m.nombre}</h3>
                <p><strong>Edad:</strong> {m.edad}</p>
                <p><strong>Tipo:</strong> {m.mascota}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="botones-carrito">
        <button className="boton-carrito" onClick={confirmarAdopcion}>
          ✅ Confirmar adopción
        </button>
        <button className="boton-carrito" onClick={() => navigate("/Listademascotas")}>
          🔄 Volver a Mascotas
        </button>
      </div>
    </div>
  );
}

export default Carrito;