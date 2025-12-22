import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import listaRecetas from './data/recetas.json';
import RecetaDetalle from './RecetaDetalle'; // Importamos el archivo nuevo

// --- COMPONENTE DE INICIO (Tu código original retocado) ---
function Inicio() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Recetas de J</h1>
      <p>Recetas de siempre, para siempre</p>
      <hr />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {listaRecetas.map((receta) => (
          <div key={receta.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
            <img 
              src={receta.imagen_principal} 
              alt={receta.titulo} 
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
            />
            <h2>{receta.titulo}</h2>
            <p>{receta.descripcion}</p>
            
            {/* CAMBIO IMPORTANTE: */}
            {/* En vez de <button>, usamos <Link> para navegar */}
            <Link to={`/receta/${receta.id}`}>
              <button style={{ background: '#ff6600', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
                Ver receta
              </button>
            </Link>
          
          </div>
        ))}
      </div>
    </div>
  );
}

// --- APP PRINCIPAL (El guardia de tráfico) ---
function App() {
  return (
    // Aquí usamos HashRouter
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/receta/:id" element={<RecetaDetalle />} />
      </Routes>
    </HashRouter>
  );
}

export default App;