import React from 'react';

function NuestraCocina() {
  const videos = [
    { id: "VIDEO_ID_1", title: "Preparación de Empanadas" },
    { id: "VIDEO_ID_2", title: "Elaboración de Pan Casero" },
    { id: "VIDEO_ID_3", title: "Nuestro Proceso de Horneado" },
    { id: "VIDEO_ID_4", title: "Receta Secreta de Salsas" }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Nuestra Cocina</h1>
      <p className="lead text-center mb-5">
        Descubre el corazón de La Chiquita: nuestra cocina. Aquí compartimos 
        nuestros procesos artesanales y el amor que ponemos en cada producto.
      </p>
      
      <div className="row g-4">
        {videos.map((video, index) => (
          <div key={index} className="col-md-6">
            <div className="card h-100 border-0 shadow">
              <div className="ratio ratio-16x9">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Video de La Chiquita: ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NuestraCocina;