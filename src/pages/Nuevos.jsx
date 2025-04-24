// pages/nuevos.jsx
import React, { useState, useEffect } from "react";
import Filtros from "../components/Filtros";
import Grid from "../components/Grid";
import autosData from "../data/autos.json"; // Asegúrate que esta ruta es correcta

const Nuevos = () => {
  const [filtroMarca, setFiltroMarca] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("0km");
  const [filtroAnio, setFiltroAnio] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [autosFiltrados, setAutosFiltrados] = useState([]);

  const marcas = [...new Set(autosData.map((auto) => auto.marca))];
  const tipos = [...new Set(autosData.map((auto) => auto.tipo))];
  const anios = [...new Set(autosData.map((auto) => auto.año))];

  useEffect(() => {
    let autos = autosData.filter((auto) => auto.tipo === "0km");

    if (filtroMarca) {
      autos = autos.filter((auto) => auto.marca === filtroMarca);
    }

    if (filtroAnio) {
      autos = autos.filter((auto) => auto.año === parseInt(filtroAnio));
    }

    if (precioMin) {
      autos = autos.filter((auto) => auto.precio >= parseFloat(precioMin));
    }

    if (precioMax) {
      autos = autos.filter((auto) => auto.precio <= parseFloat(precioMax));
    }

    setAutosFiltrados(autos);
  }, [filtroMarca, filtroAnio, precioMin, precioMax]);

  return (
    <div className="flex flex-col md:flex-row">
      <Filtros
        marcas={marcas}
        tipos={tipos}
        anios={anios}
        filtroMarca={filtroMarca}
        filtroTipo={filtroTipo}
        filtroAnio={filtroAnio}
        precioMin={precioMin}
        precioMax={precioMax}
        setFiltroMarca={setFiltroMarca}
        setFiltroTipo={() => {}} // No se puede cambiar el tipo aquí
        setFiltroAnio={setFiltroAnio}
        setPrecioMin={setPrecioMin}
        setPrecioMax={setPrecioMax}
      />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Autos 0km</h1>
        <Grid autos={autosFiltrados} />
      </main>
    </div>
  );
};

export default Nuevos;


// const Nuevos = () => {
//     return (
//       <div>
//         <h1>Nuevos Binaguy</h1>
//         <p>¡Aquí encontrarás los mejores autos!</p>
//       </div>
//     );
//   };
  
//   export default Nuevos;