import React from 'react';
import { useParams, Link } from 'react-router-dom';
import listaRecetas from './data/recetas.json';

function RecetaDetalle() {
  // Obtenemor el ID de la receta desde la barra de direcciones (URL)
  const { id } = useParams();
  
  // Buscar en el JSON la receta que tenga ese ID
  const receta = listaRecetas.find(r => r.id === parseInt(id));

  // Si alguien pone un ID que no existe, mostrar error
  if (!receta) {
    return <h2>Receta no encontrada :(</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Boton de regreso */}
      <Link to="/" style={{ textDecoration: 'none', color: '#ff6600', fontWeight: 'bold' }}>
        ← Volver al inicio
      </Link>

      <h1>{receta.titulo}</h1>
      <img src={receta.imagen_principal} alt={receta.titulo} style={{ width: '100%', borderRadius: '10px' }} />
      <p style={{ fontSize: '18px', fontStyle: 'italic' }}>{receta.descripcion}</p>

      <hr />

      {/* Seccion de ingredientes */}
      <h3>Ingredientes</h3>
      <ul>
        {receta.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>

      {/* Seccion de pasos */}
      <h3>Paso a Paso</h3>
      <div className="pasos">
        {receta.pasos.map((paso, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <p><strong>Paso {index + 1}:</strong> {paso.texto}</p>
            
            {/* Mostrar la imagen si existe en el JSON */}
            {paso.imagen && (
              <img 
                src={paso.imagen} 
                alt={`Paso ${index + 1}`} 
                style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', marginTop: '10px' }} 
              />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default RecetaDetalle;