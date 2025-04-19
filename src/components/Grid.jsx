// components/Grid.jsx
import React from "react";

// Este es el componente Grid que recibe un array de autos como propiedad
const Grid = ({ autos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {autos.map((auto) => (
        <div key={auto.id} className="border p-4 rounded">
          <img src={auto.imagen} alt={auto.marca} className="w-full h-40 object-cover mb-4" />
          <h3>{auto.marca} {auto.modelo}</h3>
          <p>{auto.tipo}</p>
          <p><strong>Precio:</strong> {auto.precio}</p>
          <p><strong>Año:</strong> {auto.año}</p>
          <p>{auto.destacados ? "Destacado" : "No destacado"}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;