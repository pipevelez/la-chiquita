import React from 'react';
import Slider from 'react-slick';

const TortasCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '15px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  };

  const tortas = [
    {
      image: "/tortas/torta_cafe.JPG"
    },
    {
      image: "/tortas/torta1.JPG"
    },
    {
      image: "/tortas/torta2.JPG"
    },
    {
      image: "/tortas/torta3.jpg"
    },
    {
      image: "/tortas/torta4.png"
    }
  ];

  return (
    <div className="tortas-section">
      <h2 className="text-center mb-4" style={{ color: "#321808" }}>TORTAS</h2>
      
      {/* Título general para todas las tortas */}
      <div className="text-center mb-4">
        <h3 className="tortas-general-title" style={{ color: "#654321", fontStyle: "italic" }}>
          GRAN VARIEDAD DE TORTAS DE TRES LECHES
        </h3>
      </div>
      
      <div className="tortas-carousel-container">
        <Slider {...settings}>
          {tortas.map((torta, index) => (
            <div key={index} className="torta-slide">
              <div className="torta-card">
                <div className="image-container">
                  <img 
                    src={torta.image} 
                    alt="Torta de tres leches"
                    className="torta-image"
                    onError={(e) => {
                      e.target.src = "/placeholder-torta.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TortasCarousel;