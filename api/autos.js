// api/autos.js

import fs from 'fs'; 
import path from 'path';

export default function handler(req, res) {
  // Armamos la ruta completa al archivo autos.json dentro de src/data
  const filePath = path.join(process.cwd(), 'src', 'data', 'autos.json');

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    res.status(200).json(data); // Enviamos el JSON como respuesta
  } catch (error) {
    console.error("Error al leer autos.json:", error);
    res.status(500).json({ error: 'Error al cargar los datos de autos' });
  }
}
