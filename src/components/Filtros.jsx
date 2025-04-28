// components/Filtros.jsx
import React from "react";

const Filtros = ({
  marcas,
  tipos,
  anios,
  filtroMarca,
  filtroTipo,
  filtroAnio,
  precioMin,
  precioMax,
  setFiltroMarca,
  setFiltroTipo,
  setFiltroAnio,
  setPrecioMin,
  setPrecioMax,
}) => {
  
  const limpiarFiltros = () => {
    setFiltroMarca("");
    setFiltroTipo("");
    setFiltroAnio("");
    setPrecioMin("");
    setPrecioMax("");
  };

  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-6 bg-gray-100">
      <h2 className="text-lg font-semibold mb-4">Filtros</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Marca</label>
        <select
          value={filtroMarca}
          onChange={(e) => setFiltroMarca(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Todas</option>
          {marcas.map((marca) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Tipo</label>
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Todos</option>
          {tipos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Año</label>
        <select
          value={filtroAnio}
          onChange={(e) => setFiltroAnio(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Todos</option>
          {anios.map((anio) => (
            <option key={anio} value={anio}>
              {anio}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Precio desde</label>
        <input
          type="number"
          value={precioMin}
          onChange={(e) => setPrecioMin(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Ej: 5000"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Precio hasta</label>
        <input
          type="number"
          value={precioMax}
          onChange={(e) => setPrecioMax(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Ej: 20000"
        />
      </div>

      <button
          onClick={limpiarFiltros}
          className="w-full text-white font-semibold py-2 px-4 rounded"
        >
          Limpiar filtros
        </button>

    </aside>
  );
};

export default Filtros;
