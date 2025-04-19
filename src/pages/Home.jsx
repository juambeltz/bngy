// pages/Home.jsx
import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";

const Home = () => {
  const [autos, setAutos] = useState([]);
  const [filtroMarca, setFiltroMarca] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/autos')
      .then((res) => res.json())
      .then((data) => setAutos(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const autosFiltrados = autos.filter((auto) =>
    filtroMarca ? auto.marca === filtroMarca : true
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Catálogo de autos</h1>

      <div className="mb-6">
        <label htmlFor="marca" className="mr-2">Filtrar por marca:</label>
        <select
          id="marca"
          value={filtroMarca}
          onChange={(e) => setFiltroMarca(e.target.value)}
          className="border p-1"
        >
          <option value="">Todas</option>
          <option value="Toyota">Toyota</option>
          <option value="Suzuki">Suzuki</option>
          <option value="Honda">Honda</option>
        </select>
      </div>

      <Grid autos={autosFiltrados} />
    </div>
  );
};

export default Home;




// import React, { useEffect, useState } from 'react';

// const Home = () => {
//   const [autos, setAutos] = useState([]);
  
//   useEffect(() => {
//     fetch('http://localhost:5000/autos')  // Asegúrate que la URL sea correcta
//       .then(response => response.json())
//       .then(data => {
//         setAutos(data);  // Guardamos los datos de los autos en el estado
//       })
//       .catch(error => console.error('Error al obtener los autos:', error));
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {autos.length > 0 ? (
//         autos.map((auto) => (
//           <div key={auto.id} className="p-4 border rounded">
//             <img src={auto.imagen} alt={auto.modelo} className="w-full h-auto" />
//             <h2 className="text-xl font-bold">{auto.marca} {auto.modelo}</h2>
//             <p>Precio: ${auto.precio}</p>
//           </div>
//         ))
//       ) : (
//         <p>Cargando autos...</p>
//       )}
//     </div>
//   );
// };

// export default Home;


// // pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import Grid from "../components/Grid";

// const Home = () => {
//   const [autos, setAutos] = useState([]);

//   // Fetch de autos desde el JSON Server
//   useEffect(() => {
//     fetch('http://localhost:5000/autos') // Este es el endpoint donde obtendremos los autos
//       .then((response) => response.json()) // Convertimos la respuesta a JSON
//       .then((data) => {
//         // Si queremos mostrar primero los autos destacados y ordenarlos por fecha:
//         const autosDestacadosYOrdenados = data
//           .filter((auto) => auto.destacados) // Filtra autos destacados
//           .sort((a, b) => new Date(b.fecha_ingreso) - new Date(a.fecha_ingreso)); // Ordena por fecha de ingreso (de más nuevo a más viejo)
//         setAutos(autosDestacadosYOrdenados); // Guardamos los autos en el estado
//       });
//   }, []); // El array vacío significa que esto solo se ejecutará una vez al cargar la página
//   console.log("Autos cargados:", autos);
//   return (
//     <div>
//       <h1>Bienvenidos amigos mios</h1>
//       <Grid autos={autos} /> {/* Pasamos los autos filtrados y ordenados al componente Grid */}
//     </div>
//   );
// };

// export default Home;



// const Home = () => {
//     return (
//       <div>
//         <h1>Bienvenidos amigos a Binaguy</h1>
//         <p>¡Aquí encontrarás los mejores autos!</p>
//       </div>
//     );
//   };
  
//   export default Home;