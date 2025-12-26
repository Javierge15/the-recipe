import React from 'react';
import { useParams, Link } from 'react-router-dom';
import listaRecetas from './data/recetas.json';

function RecetaDetalle() {
  // Capturar ID de la receta desde la URL
  const { id } = useParams();
  // Buscar receta por ID
  const receta = listaRecetas.find(r => r.id === parseInt(id));
  // Seguridad
  if (!receta) return <div className="container"><h2>Receta no encontrada :(</h2></div>;
  // Renderizado de la receta
  return (
    <div className="container">
      
      <Link to="/" className="volver-link">← Inicio</Link>

      <h1>{receta.titulo}</h1>
      
      <img 
        src={receta.imagen_principal} 
        alt={receta.titulo} 
        className="detalle-img-principal"
      />
      
      <p style={{ fontSize: '1.2rem', margin: '20px 0', fontStyle: 'italic', color: '#7a5c49' }}>
        {receta.descripcion}
      </p>

      <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid rgba(173, 115, 78, 0.1)' }}>
        <h3>Ingredientes</h3>
        
        {receta.imagen_ingredientes && (
          <img 
            src={receta.imagen_ingredientes} 
            alt="Ingredientes" 
            className="ingredientes-foto"
          />
        )}

        <ul>
          {receta.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </div>

      <h3>Paso a Paso</h3>
      <div className="pasos-container">
        {receta.pasos.map((paso, index) => (
          <div key={index} className="paso-item">
            
            <div className="paso-texto-container">
              <p><strong>PASO {index + 1}</strong> {paso.texto}</p>
            </div>
            
            {paso.imagen && (
              <img 
                src={paso.imagen} 
                alt={`Paso ${index + 1}`} 
                className="paso-img"
              />
            )}
          </div>
        ))}
      </div>

      {receta.notas && (
        <div style={{
          marginTop: '40px',
          padding: '25px',
          backgroundColor: '#fffbe6',
          borderLeft: '6px solid #dbd294',
          borderRadius: '8px',
          color: '#451D07',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ marginTop: 0, color: '#d12323', fontSize: '1.1rem' }}>📝 OBSERVACIONES DEL CHEF</h3>
          <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{receta.notas}</p>
        </div>
      )}
      
    </div>
  );
}

export default RecetaDetalle;