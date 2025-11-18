import { useState } from "react";
import "./formulario.css";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";


function Formulario() {
  // 🧠 Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    tipo_mascota: "",
    experiencia: "",
    tiempo_libre: "",
    compromiso: "",
  });

  // ✅ Estado para controlar el popup de éxito
  const [mostrarPopup, setMostrarPopup] = useState(false);

  // 🔹 Cuando cambia un campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔹 Cuando se envía el formulario
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Guardar el formulario en Firebase
    await addDoc(collection(db, "formularios_adopcion"), formData);

    console.log("Formulario guardado en Firebase");

    // Mostrar popup
    setMostrarPopup(true);

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      tipo_mascota: "",
      experiencia: "",
      tiempo_libre: "",
      compromiso: "",
    });

    // Ocultar popup
    setTimeout(() => setMostrarPopup(false), 4000);

  } catch (error) {
    console.error("Error al enviar formulario:", error);
    alert("Hubo un error al enviar tu solicitud");
  }
};


  return (
    <>
      <div className="formulario-contenedor">
        <h1>🐾 Formulario de Adopción</h1>
        <p>
          Completa este formulario para brindarle un hogar a un peludito 🐶🐱
        </p>

        <form className="formulario-adopcion" onSubmit={handleSubmit}>
          {/* 🔹 Columna izquierda */}
          <div className="columna">
            <div className="campo">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@email.com"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej. 1234567890"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="direccion">Dirección</label>
              <textarea
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Tu dirección completa"
                required
              ></textarea>
            </div>
          </div>

          {/* 🔹 Columna derecha */}
          <div className="columna">
            <div className="campo">
              <label htmlFor="tipo_mascota">¿Qué deseas adoptar?</label>
              <select
                id="tipo_mascota"
                name="tipo_mascota"
                value={formData.tipo_mascota}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="perro">🐶 Perrito</option>
                <option value="gato">🐱 Gatito</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="experiencia">
                ¿Tienes experiencia cuidando mascotas?
              </label>
              <textarea
                id="experiencia"
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                placeholder="Cuéntanos si has tenido mascotas antes..."
              ></textarea>
            </div>

            <div className="campo">
              <label htmlFor="tiempo_libre">
                ¿Cuántas horas al día estás en casa?
              </label>
              <input
                type="number"
                id="tiempo_libre"
                name="tiempo_libre"
                value={formData.tiempo_libre}
                onChange={handleChange}
                placeholder="Ej. 8"
                required
              />
            </div>

            <div className="campo">
              <label>
                ¿Te comprometes a cuidar de esta mascota toda su vida?
              </label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="compromiso"
                    value="si"
                    checked={formData.compromiso === "si"}
                    onChange={handleChange}
                    required
                  />{" "}
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    name="compromiso"
                    value="no"
                    checked={formData.compromiso === "no"}
                    onChange={handleChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="campo">
              <button type="submit">Enviar Solicitud ❤️</button>
            </div>
          </div>
        </form>
      </div>

      {/* 🌟 Ventana emergente (popup) */}
      {mostrarPopup && (
        <div className="popup-fondo">
          <div className="popup-exito">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Éxito"
              className="icono-exito"
            />
            <h3>¡Formulario completado exitosamente! 🎉</h3>
            <p>Gracias por tu compromiso con la adopción. 💖</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Formulario;
