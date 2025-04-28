import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams

const AutoDetalle = () => {
  const { id } = useParams(); // Obtener el parámetro id de la URL
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    console.log("Buscando auto con id:", id); // <-- AGREGALO
    fetch(`http://localhost:5000/autos/${id}`)
      .then((res) => {
        console.log("Respuesta del servidor:", res); // <-- AGREGALO
        return res.json();
      })
      .then((data) => {
        console.log("Datos del auto:", data); // <-- AGREGALO
        setAuto(data);
      })
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!auto) {
    
    return <p>Cargando detalles del auto...</p>;
  }

  return (
    <div className="w-full h-full px-4 lg:px-0 mt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Titulo alineado a la izquierda */}
        <h2 className="text-3xl font-bold text-left mb-6">{auto.marca} {auto.modelo}</h2>
        
        {/* Contenedor con tres columnas (imagen + 2 columnas de información) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna de la imagen */}
          <div className="col-span-1 ">
            <img
              src={auto.imagen}
              alt={auto.modelo}
             className="w-full h-auto aspect-video object-cover rounded-lg"
            />
          </div>
  
          {/* Columnas de la información */}
          <div className="col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p><strong>Tipo:</strong> {auto.tipo}</p>
                <p><strong>Año:</strong> {auto.año}</p>
                <p><strong>Precio:</strong> ${auto.precio.toLocaleString()}</p>
                <p><strong>Color:</strong> {auto.color}</p>
                <p><strong>Combustible:</strong> {auto.combustible}</p>
                <p><strong>Motor:</strong> {auto.motor}</p>
              </div>
  
              <div className="space-y-4">
                <p><strong>Puertas:</strong> {auto.puertas}</p>
                <p><strong>Tracción:</strong> {auto.traccion}</p>
                <p><strong>Cambios:</strong> {auto.cambios}</p>
                <p><strong>Fecha de Ingreso:</strong> {auto.fechaIngreso}</p>
                <p><strong>Destacado:</strong> {auto.destacado ? "Sí" : "No"}</p>
                <p><strong>Baja:</strong> {auto.baja ? "Sí" : "No"}</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Botones de acción */}
        <div className="mt-6 flex flex-col items-center gap-4">
          {/* Botón Contactar al Concesionario (Botón Principal) */}
          <a
            href="mailto:contacto@concesionario.com"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors max-w-xs"
          >
            Solicitar mas información
          </a>
  
          {/* Botón Volver al Catálogo (Botón Secundario) */}
          <a
            href="/"
            className="bg-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-400 transition-colors max-w-xs"
          >
            Volver al Catálogo
          </a>
        </div>
      </div>
    </div>
  );
};

export default AutoDetalle;

