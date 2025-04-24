// pages/Home.jsx
import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Filtros from "../components/Filtros";


const Home = () => {
  const [autos, setAutos] = useState([]);
  const [filtroMarca, setFiltroMarca] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroAnio, setFiltroAnio] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/autos")
      .then((res) => res.json())
      .then((data) => setAutos(data))
      .catch((err) => console.error("Error:", err));
  }, []);



  const marcas = [...new Set(autos.map((auto) => auto.marca))];
  const tipos = [...new Set(autos.map((auto) => auto.tipo))];
  const anios = [...new Set(autos.map((auto) => auto.año))].sort((a, b) => b - a);

  const autosFiltrados = autos.filter((auto) => {
    const cumpleMarca = filtroMarca ? auto.marca === filtroMarca : true;
    const cumpleTipo = filtroTipo ? auto.tipo === filtroTipo : true;
    const cumpleAnio = filtroAnio ? auto.año.toString() === filtroAnio : true;
    const cumplePrecioMin = precioMin ? auto.precio >= parseFloat(precioMin) : true;
    const cumplePrecioMax = precioMax ? auto.precio <= parseFloat(precioMax) : true;
    return cumpleMarca && cumpleTipo && cumpleAnio && cumplePrecioMin && cumplePrecioMax;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
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
        setFiltroTipo={setFiltroTipo}
        setFiltroAnio={setFiltroAnio}
        setPrecioMin={setPrecioMin}
        setPrecioMax={setPrecioMax}
      />

      <main className="flex-1 p-6 max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Catálogo de Automóviles</h1>
        <Grid autos={autosFiltrados} />
      </main>
    </div>
  );
};

export default Home;