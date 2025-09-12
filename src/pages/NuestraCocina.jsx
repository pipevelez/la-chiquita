import React from 'react';

function NuestraCocina() {
  const videos = [
    { 
      id: "X1iPAOjCjYU", 
      title: "Nuestros postres",
      url: "https://youtube.com/shorts/X1iPAOjCjYU?si=9bSMqoAGCRxPd1_c"
    },
    { 
      id: "Hu2SZcfSusM", 
      title: "Torta de tres leches",
      url: "https://youtube.com/shorts/Hu2SZcfSusM?si=NGIyu_mc7rUMREzG"
    },
    { 
      id: "gYGgdmT5d6Y", 
      title: "Buñuelos rellenos de queso",
      url: "https://youtube.com/shorts/gYGgdmT5d6Y?si=IV9yVwAKw0BT2bex"
    },
    { 
      id: "AuENuCgR7zI", 
      title: "Torta de queso",
      url: "https://youtube.com/shorts/AuENuCgR7zI?si=FRX_H1i37RD4UHQm"
    },
    { 
      id: "BSHEU1yBhB8", 
      title: "Chicharrón de Guayaba",
      url: "https://youtube.com/shorts/BSHEU1yBhB8?si=tVA630onbs5GfmTh"
    }
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
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              {/* Contenedor responsivo con relación de aspecto 9:16 en móviles y 16:9 en desktop */}
              <div className="mobile-video-container">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Video de La Chiquita: ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="youtube-video-iframe"
                ></iframe>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{video.title}</h5>
                <div className="text-center mt-3">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Ver en YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Estilos CSS para el formato vertical en móviles */}
      <style>
        {`
          .mobile-video-container {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          
          .youtube-video-iframe {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 8px 8px 0 0;
          }
          
          /* Para dispositivos móviles (hasta 768px) */
          @media (max-width: 768px) {
            .mobile-video-container {
              height: 0;
              padding-bottom: 177.78%; /* Relación 9:16 (9/16*100) */
            }
            
            .youtube-video-iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
          
          /* Para tablets y desktop (más de 768px) */
          @media (min-width: 769px) {
            .mobile-video-container {
              height: 0;
              padding-bottom: 56.25%; /* Relación 16:9 (9/16*100) */
            }
            
            .youtube-video-iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default NuestraCocina;