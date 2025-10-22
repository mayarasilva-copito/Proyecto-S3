import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import datos from "../data/mascotas.json";
import "./mascotas.css";

function Listademascotas() {
  const navigate = useNavigate();
  const todas = datos.Listademascotas || [];
  const perritos = todas.filter((m) => m.mascota.toLowerCase().includes("perro"));
  const gatitos = todas.filter((m) => m.mascota.toLowerCase().includes("gato"));

  // Adoptar una mascota y guardar en localStorage
  function adoptar(mascota) {
    let adoptadas = JSON.parse(localStorage.getItem("adoptadas")) || [];

    if (adoptadas.some((m) => m.id === mascota.id)) {
      alert(`❌ ${mascota.nombre} ya ha sido adoptada.`);
      return;
    }

    adoptadas.push(mascota);
    localStorage.setItem("adoptadas", JSON.stringify(adoptadas));
    alert(`🎉 ¡Has agregado a ${mascota.nombre} al carrito!`);
    navigate("/carrito");
  }

  function renderCard(m) {
    return (
      <div className="ms-card" key={m.id}>
        {m.imagen ? (
          <img className="ms-img" src={m.imagen} alt={m.nombre} />
        ) : (
          <div className="ms-img ms-noimg">Sin foto</div>
        )}

        <div className="ms-band">{m.nombre}</div>
        <div className="ms-info"><strong>Edad:</strong> {m.edad}</div>
        <div className="ms-info"><strong>Género:</strong> {m.genero}</div>
        <div className="ms-info"><strong>Tipo:</strong> {m.mascota}</div>
        <div className="ms-detail">{m.descripcion ?? "Sin descripción."}</div>

        <button className="boton-adoptar" onClick={() => adoptar(m)}>
          🐾 Adoptar
        </button>
      </div>
    );
  }

  return (
    <div className="ms-page">
      <h1 className="ms-title">🐾 Mascotas 🐾</h1>
      <div className="ms-grid4">{perritos.map(renderCard)}</div>
      <div className="ms-grid4">{gatitos.map(renderCard)}</div>
    </div>
  );
}

export default Listademascotas;