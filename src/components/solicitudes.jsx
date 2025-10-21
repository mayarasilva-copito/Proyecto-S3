import { useEffect, useState } from "react";
import "./solicitudes.css"; // (puedes crear este css si quieres decorarlo)

function Solicitudes() {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // ✅ Obtener los datos guardados en localStorage
    const datosGuardados = JSON.parse(
      localStorage.getItem("formularioAdopcion")
    );
    setDatos(datosGuardados);
  }, []);

  return (
    <div className="solicitudes-contenedor">
      <h1>📋 Solicitud de Adopción Enviada</h1>

      {datos ? (
        <div className="tarjeta-solicitud">
          <h2>🐾 Información del Adoptante</h2>
          <p>
            <strong>Nombre:</strong> {datos.nombre}
          </p>
          <p>
            <strong>Correo:</strong> {datos.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {datos.telefono}
          </p>
          <p>
            <strong>Dirección:</strong> {datos.direccion}
          </p>
          <p>
            <strong>Tipo de mascota:</strong>{" "}
            {datos.tipo_mascota === "perro" ? "🐶 Perrito" : "🐱 Gatito"}
          </p>
          <p>
            <strong>Experiencia:</strong> {datos.experiencia || "No especificó"}
          </p>
          <p>
            <strong>Horas en casa:</strong> {datos.tiempo_libre} horas
          </p>
          <p>
            <strong>Compromiso:</strong>{" "}
            {datos.compromiso === "si" ? "Sí, se compromete 💖" : "No"}
          </p>

          <button
            onClick={() => {
              localStorage.removeItem("formularioAdopcion");
              setDatos(null);
              alert("Los datos se han eliminado correctamente.");
            }}
          >
            🧹 Borrar datos
          </button>
        </div>
      ) : (
        <p className="sin-datos">
          No hay ninguna solicitud registrada todavía.
        </p>
      )}
    </div>
  );
}

export default Solicitudes;
