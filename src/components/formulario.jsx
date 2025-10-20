import "./formulario.css";

function Formulario() {
  return (
    <>
      <div className="formulario-contenedor">
        <h1>🐾 Formulario de Adopción</h1>
        <p>Completa este formulario para brindarle un hogar a un peludito 🐶🐱</p>

        <form className="formulario-adopcion" action="#" method="post">
          {/* 🔹 Columna izquierda */}
          <div className="columna">
            <div className="campo">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
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
                placeholder="Ej. 1234567890"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="direccion">Dirección</label>
              <textarea
                id="direccion"
                name="direccion"
                placeholder="Tu dirección completa"
                required
              ></textarea>
            </div>
          </div>

          {/* 🔹 Columna derecha */}
          <div className="columna">
            <div className="campo">
              <label htmlFor="tipo_mascota">¿Qué deseas adoptar?</label>
              <select id="tipo_mascota" name="tipo_mascota" required>
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
                  <input type="radio" name="compromiso" value="si" required /> Sí
                </label>
                <label>
                  <input type="radio" name="compromiso" value="no" /> No
                </label>
              </div>
            </div>

            <div className="campo">
              <button type="submit">Enviar Solicitud ❤️</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Formulario;
