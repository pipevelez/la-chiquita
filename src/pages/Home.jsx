import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

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

          {/* 📺 Video */}
          <video
            className="welcome-video"
            src="/apariencia/video_home.mp4"
            controls
            muted
            autoPlay
            loop
          />
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

      {/* Sección "Conócenos" */}
      <div className="row align-items-center about-section animate-fade-in-up">
        <div className="col-md-6">
          <h2 className="about-title">NUESTRA HISTORIA</h2>
          <p className="about-text">
            Desde 1978, en <strong>La Chiquita</strong> hemos mantenido viva la tradición 
            de la panadería artesanal. Cada mañana amasamos con dedicación, 
            usando ingredientes frescos y recetas transmitidas por generaciones.
          </p>
          <p className="about-text">
            Nuestro compromiso es brindarte el auténtico sabor casero, 
            ese que te transporta a los mejores momentos en familia.
          </p>
          <Link 
            to="/nosotros" 
            className="btn about-btn"
          >
            Descubre nuestra historia
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <img 
            src="/apariencia/fondo_home.JPG"
            alt="Panadera La Chiquita"
            className="about-image"
            onError={(e) => {
              e.target.src = "/placeholder-panaderia.jpg";
            }}
          />
        </div>
      </div>
    </main>
  );
}