import React from "react";
import datos from "../data/mascotas.json";
import "./mascotas.css";

function Listademascotas() {
  // Obtenemos el arreglo de mascotas del JSON
  const todas = datos.Listademascotas || [];

  // Filtrar perros y gatos (sin importar si son grandes o pequeños)
  const perritos = todas.filter((m) =>
    m.mascota.toLowerCase().includes("perro")
  );
  const gatitos = todas.filter((m) => m.mascota.toLowerCase().includes("gato"));

  // Cuando se hace clic en "Adoptar"
  function irAlCarrito(mascota) {
    alert(`🐾 Has agregado a ${mascota.nombre} al carrito de adopción.`);
  }

  // Renderizar cada tarjeta
  function renderCard(m) {
    return (
      <div className="ms-card" key={m.id}>
        {/* Imagen */}
        {m.imagen ? (
          <img className="ms-img" src={m.imagen} alt={m.nombre} />
        ) : (
          <div className="ms-img ms-noimg">Sin foto</div>
        )}

        {/* Nombre */}
        <div className="ms-band">{m.nombre}</div>

        {/* Información */}
        <div className="ms-info">
          <strong>Edad:</strong> <span>{m.edad}</span>
        </div>
        <div className="ms-info">
          <strong>Género:</strong> <span>{m.genero}</span>
        </div>
        <div className="ms-info">
          <strong>Tipo:</strong> <span>{m.mascota}</span>
        </div>

        {/* Detalle */}
        <div className="ms-detail">
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Detalle</div>
          <div>{m.descripcion ?? "Sin descripción."}</div>
        </div>

        {/* Botón */}
        <button className="boton-adoptar" onClick={() => irAlCarrito(m)}>
          🐾 Adoptar
        </button>
      </div>
    );
  }

  return (
    <div className="ms-page">
      <h1 className="ms-title">🐾 Mascotas 🐾</h1>
      {/* Sección Perros */}

      <div className="ms-grid4">
        {perritos.length ? perritos.map(renderCard) : <div>No hay perros.</div>}
      </div>

      {/* Sección Gatos */}

      <div className="ms-grid4">
        {gatitos.length ? gatitos.map(renderCard) : <div>No hay gatos.</div>}
      </div>
    </div>
  );
}

export default Listademascotas;
