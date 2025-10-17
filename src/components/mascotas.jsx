import datos from "../data/mascotas.json";
function Listademascotas() {
  return (
    <>
      <div className="bg-purple-200 min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center text-purple-900 mb-6">
          Gatos
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datos.Listademascotas.map((Listademascotas) => (
            <div
              className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center h-100"
              key={Listademascotas.id}
            >
              <img
                src={`./${Listademascotas.imagen}`}
                alt={Listademascotas}
                className="w-full h-70 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold text-center text-purple-800 mt-2 h-20 flex items-center justify-center">
                {Listademascotas.nombre}
              </h3>
              <p className="text-gray-800">{Listademascotas.año}</p>
              <p className="text-gray-800">{Listademascotas.genero}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listademascotas;
