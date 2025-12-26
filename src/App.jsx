import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import listaRecetas from './data/recetas.json';
import RecetaDetalle from './RecetaDetalle';

// --- COMPONENTE DE INICIO ---
function Inicio() {
  return (
    <div className="container">
      <h1>The Recipe</h1>
      <p className="subtitulo">Recetas de siempre, para siempre</p>
      
      <div className="grid-recetas">
        {listaRecetas.map((receta) => (
          <div key={receta.id} className="card">
            
            <img 
              src={receta.imagen_principal} 
              alt={receta.titulo} 
            />
            
            <div className="card-content">
              <h2>{receta.titulo}</h2>
              <p className="card-desc">{receta.descripcion}</p>
              
              <Link to={`/receta/${receta.id}`}>
                <button>Ver receta</button>
              </Link>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
}

// --- APP PRINCIPAL ---
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/receta/:id" element={<RecetaDetalle />} />
      </Routes>
    </HashRouter>
  );
}

export default App;