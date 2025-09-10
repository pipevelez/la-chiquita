import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useState, useEffect, useRef } from "react";

const recommendedProducts = [
  {
    name: "Milhoja",
    description: "Capas crujientes de hojaldre rellenas de suave arequipe y cubiertas con un delicioso glaseado. Un clásico irresistible para los amantes del dulce.",
    image: "/dulces/Milhojas.png",
    category: "DULCES",
    categorySlug: "dulces"
  },
  {
    name: "Torta de Maracuyá",
    description: "Suave, esponjosa y con el toque perfecto de maracuyá natural. Una explosión de sabor tropical en cada bocado.",
    image: "/dulces/Torta_mar.png",
    category: "DULCES",
    categorySlug: "dulces"
  },
  {
    name: "Pizza",
    description: "Masa suave y crujiente, cubierta con salsa casera, queso derretido y jamón. ¡Un pedazo de sabor irresistible que te hará querer más!",
    image: "/especialidades/Pizza.png",
    category: "ESPECIALIDADES",
    categorySlug: "especialidades"
  },
  {
    name: "Kumis",
    description: "Fresco, cremoso y 100% artesanal. ¡El sabor de casa en cada sorbo!",
    image: "/bebidas/Kumis.png",
    category: "BEBIDAS",
    categorySlug: "bebidas"
  },
];

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState({ width: "100%", height: "auto" });

  // Optimización del video - mantener relación de aspecto
  useEffect(() => {
    const handleVideoLoad = () => {
      if (videoRef.current) {
        // Mantener la relación de aspecto natural del video
        const video = videoRef.current;
        const naturalWidth = video.videoWidth;
        const naturalHeight = video.videoHeight;
        
        if (naturalWidth > 0 && naturalHeight > 0) {
          const aspectRatio = naturalHeight / naturalWidth;
          const containerWidth = video.parentElement.offsetWidth;
          const calculatedHeight = containerWidth * aspectRatio;
          
          setVideoDimensions({
            width: "100%",
            height: `${calculatedHeight}px`
          });
        }
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', handleVideoLoad);
      videoElement.addEventListener('resize', handleVideoLoad);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', handleVideoLoad);
        videoElement.removeEventListener('resize', handleVideoLoad);
      }
    };
  }, []);

  return (
    <main className="container mt-4">
      {/* Sección de Bienvenida con fondo de Cristo Rey */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">
            Bienvenidos a La Chiquita
          </h1>
          <p className="welcome-subtitle">
            Disfruta lo mejor del pan artesanal, hecho con amor.
          </p>

          {/* 📺 Video optimizado */}
          <div 
            className="welcome-video-container" 
            style={{ 
              maxWidth: "300px",       // ← Contenedor más angosto
              width: "100%",
              aspectRatio: "9/16",     // ← RELACIÓN VERTICAL 9:16 (alto > ancho)
              margin: "0 auto",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              backgroundColor: "#000"
            }}
          >
            <video
              className="welcome-video"
              src="/videos/home.mp4"
              controls
              muted
              autoPlay
              loop
              preload="metadata"
              style={{ 
                width: "100%",
                height: "100%",
                objectFit: "cover",    // ← El video cubre el espacio vertical
                display: "block"
              }}
            />
          </div>
        </div>
      </div>

      {/* Sección de Recomendados */}
      <h2 className="recommended-title">Recomendados</h2>

      <div className="row g-3">
        {recommendedProducts.map((product, index) => (
          <div 
            className="col-6 col-md-3 product-card-container" 
            key={index}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            style={{ position: "relative" }}
          >
            <div className={`product-overlay ${hoveredProduct === index ? 'active' : ''}`}>
              <h5 className="text-center mb-3">
                {product.category}
              </h5>
              <Link 
                to={`/productos#${product.categorySlug}`}
                className="btn"
                onClick={() => {
                  sessionStorage.setItem('scrollToCategory', product.categorySlug);
                }}
              >
                Ver más
              </Link>
            </div>
            
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="text-center my-5">
        <Link to="/productos" className="btn btn-primary btn-lg">
          Ver todos los productos
        </Link>
      </div>

      {/* Sección "Conócenos" - IMAGEN CORREGIDA */}
      <div className="about-section animate-fade-in-up">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="about-title">NUESTRA HISTORIA</h2>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-md-6 order-md-1 order-2">
            <div className="about-text-content">
              <p className="about-text">
                Desde 1978, en <strong>La Chiquita</strong> hemos mantenido viva la tradición 
                de la panadería artesanal. Cada mañana amasamos con dedicación, 
                usando ingredientes frescos y recetas transmitidas por generaciones.
              </p>
              <p className="about-text">
                Nuestro compromiso es brindarte el auténtico sabor casero, 
                ese que te transporta a los mejores momentos en familia.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 text-center order-md-2 order-1">
            <div style={{ 
              position: "relative", 
              width: "100%", 
              maxWidth: "500px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
            }}>
              {!imageLoaded && (
                <div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                    backgroundSize: "200% 100%",
                    animation: "loading 1.5s infinite",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    minHeight: "300px"
                  }}
                >
                  <span style={{ color: "#888", fontSize: "14px" }}>Cargando...</span>
                </div>
              )}
              <img 
                src="/apariencia/fondo_home.JPG"
                alt="Panadera La Chiquita"
                className="about-image"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.target.src = "/placeholder-panaderia.jpg";
                }}
                style={{
                  width: "100%",
                  height: "auto", // Cambiado a auto para mantener proporciones
                  display: "block",
                  borderRadius: "12px",
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out"
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Botón debajo de la imagen en móviles */}
        <div className="row">
          <div className="col-12 text-center order-3">
            <div className="about-button-container">
              <Link 
                to="/nosotros" 
                className="btn about-btn"
              >
                Descubre nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Ubicación con Google Maps */}
      <div className="row align-items-center location-section animate-fade-in-up">
        <div className="col-md-6">
          <h2 className="location-title">VISÍTANOS</h2>
          <p className="location-text">
            Estamos ubicados en el corazón de Belalcázar, Caldas. Ven y disfruta 
            de nuestros productos recién horneados en un ambiente familiar y acogedor.
          </p>
          <p className="location-address">
            <strong>Dirección:</strong> Cra 3 #10-02, Belalcazar, Caldas
          </p>
          <div className="location-info">
            <p><strong>Horario de atención:</strong></p>
            <p>Lunes a Sábado: 6:00 AM - 8:00 PM</p>
            <p>Domingos y Festivos: 7:00 AM - 7:00 PM</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="map-container" style={{ height: "300px", overflow: "hidden", borderRadius: "12px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.41983789832904!2d-75.81253278392496!3d4.992767080948355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47852c68f4ff7b%3A0x14670897885c7eee!2sPanaderia%20La%20Chiquita!5e0!3m2!1ses-419!2sco!4v1757275659145!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Panadería La Chiquita"
            ></iframe>
          </div>
          <div className="text-center mt-3">
            <a
              href="https://www.google.com/maps/place/Panaderia+La+Chiquita/@4.9927671,-75.8125328,20.75z/data=!4m14!1m7!3m6!1s0x8e47852c68f4ff7b:0x14670897885c7eee!2sPanaderia+La+Chiquita!8m2!3d4.9927209!4d-75.8124735!16s%2Fg%2F11hzwrqm_2!3m5!1s0x8e47852c68f4ff7b:0x14670897885c7eee!8m2!3d4.9927209!4d-75.8124735!16s%2Fg%2F11hzwrqm_2?entry=ttu&g_ep=EgoyMDI1MDkwMy.4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}