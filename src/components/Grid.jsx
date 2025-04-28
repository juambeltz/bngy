import React from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router para navegación

// Componente Grid que recibe un array de autos como propiedad
const Grid = ({ autos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {autos.length > 0 ? (
        autos.map((auto) => (
          <Link key={auto.id} to={`/auto/${auto.id}`} className="block">
            {/* Cada tarjeta de auto ahora está envuelta en un Link */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md hover:translate-y-1 transition-all">
              <img
                src={auto.imagen}
                alt={auto.marca}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3>{auto.marca} {auto.modelo}</h3>
              <p>{auto.tipo}</p>
              <p><strong>Precio:</strong> {auto.precio}</p>
              <p><strong>Año:</strong> {auto.año}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No se encontraron autos que coincidan con los filtros.</p>
      )}
    </div>
  );
};

export default Grid;