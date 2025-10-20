// ...existing code...
import React from "react";
import datos from "../data/mascotas.json";
import "./mascotas.css";

function Listademascotas() {
  const todas = datos.Listademascotas || [];

  const lower = (s) => (s || "").toLowerCase();
  const perritos = todas.filter((m) => ["perrito", "perrita"].includes(lower(m.tipo)));
  const gatitos = todas.filter((m) => ["gatito", "gatita"].includes(lower(m.tipo)));

  function renderCard(m) {
    const src = m.imagen || m.image || m.foto || "";
    return (
      <div className="ms-card" key={m.id ?? m.nombre}>
        {src ? <img className="ms-img" src={src} alt={m.nombre} /> : <div className="ms-img ms-noimg">Sin foto</div>}
        <div className="ms-band">{m.nombre}</div>
        <div className="ms-info"><strong>Edad:</strong> <span>{m.edad ?? "—"}</span></div>
        <div className="ms-info"><strong>Género:</strong> <span>{m.genero ?? "—"}</span></div>
        <div className="ms-detail">
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Detalle</div>
          <div>{m.descripcion ?? "Sin descripción."}</div>
        </div>
        <button
            className="boton-adoptar"
            onClick={() => irAlCarrito(mascota)}
          >
            🐾 Adoptar
          </button>
      </div>
      
      
    );
  }

  function irAGatitos() {
    const el = document.getElementById("gatitos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="ms-page">
      <h1 className="ms-title">Mascotas</h1>
      <p className="ms-sub">Perros arriba · Gatos más abajo</p>

      <h3 className="ms-section-title">Perros ({perritos.length})</h3>
      <div className="ms-grid4">
        {perritos.length ? perritos.map(renderCard) : <div>No hay perros.</div>}
      </div>
    </div>
  );
}

export default Listademascotas;
