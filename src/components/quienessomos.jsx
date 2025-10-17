import "./quienessomos.css";
function Quienessomos() {
  return (
    <>
      <div className="texto">
        <section id="historia" className="section_quienesomos">
          <h2 className="section-title">Nuestra Historia</h2>
          <div className="card-container">
            <div class="card">
              <p>
                Empezamos recogiendo a un perrito herido que encontramos en la
                calle. Ese día nació nuestro compromiso: ayudar a los más
                indefensos y darles la vida digna que merecen.
              </p>
            </div>
            <div className="card">
              <p>
                Poco después, rescatamos una camada de gatitos que había sido
                abandonada. Encontramos familias amorosas para ellos y
                entendimos que este sería nuestro camino.
              </p>
            </div>
          </div>
        </section>

        <section id="mision-vision">
          <h2 className="section-title">Misión y Visión</h2>
          <div className="card-container">
            <div className="card">
              <h3>Misión</h3>
              <p>
                Brindar refugio, cuidado y amor a perritos y gatitos en
                situación de calle, trabajando con la comunidad para ofrecerles
                un hogar seguro y lleno de cariño.
              </p>
            </div>
            <div className="card">
              <h3>Visión</h3>
              <p>
                Convertirnos en una organización líder en rescate animal,
                logrando que cada mascota tenga un hogar digno y una vida plena,
                mientras inspiramos a la sociedad a ser más consciente y
                compasiva.
              </p>
            </div>
          </div>
        </section>

        <section id="equipo">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="team-cards">
            <div className="team-card">
              <h4>Mayara</h4>
              <p>
                <strong>Marketing</strong>
              </p>
              <p>
                Desde niña recogía gatitos abandonados en su barrio. Hoy
                comparte su talento en marketing para dar visibilidad a cada
                rescate.
              </p>
            </div>
            <div className="team-card">
              <h4>Alexandra</h4>
              <p>
                <strong>Cuidadora</strong>
              </p>
              <p>
                Su primera experiencia fue alimentar a un perrito que vivía en
                la puerta de su colegio. Ese gesto marcó el inicio de su
                vocación.
              </p>
            </div>
            <div className="team-card">
              <h4>Melany</h4>
              <p>
                <strong>Entrenadora</strong>
              </p>
              <p>
                Adoptó a un perrito callejero que estaba asustado y sin
                confianza. Con paciencia, lo entrenó y ahora ayuda a muchos más.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Quienessomos;
