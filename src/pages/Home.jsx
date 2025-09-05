import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const recommendedProducts = [
  {
    name: "Milhoja",
    description: "Capas crujientes de hojaldre rellenas de suave arequipe y cubiertas con un delicioso glaseado. Un clásico irresistible para los amantes del dulce.",
    image: "/dulces/Milhojas.png",
    category: "Dulces",
    categorySlug: "dulces"
  },
  {
    name: "Torta de Maracuyá",
    description: "Suave, esponjosa y con el toque perfecto de maracuyá natural. Una explosión de sabor tropical en cada bocado.",
    image: "/dulces/Torta_mar.png",
    category: "Dulces",
    categorySlug: "dulces"
  },
  {
    name: "Pizza",
    description: "Masa suave y crujiente, cubierta con salsa casera, queso derretido y jamón. ¡Un pedazo de sabor irresistible que te hará querer más!",
    image: "/especialidades/Pizza.png",
    category: "Especialidades",
    categorySlug: "especialidades"
  },
  {
    name: "Kumis",
    description: "Fresco, cremoso y 100% artesanal. ¡El sabor de casa en cada sorbo!",
    image: "/bebidas/Kumis.png",
    category: "Bebidas",
    categorySlug: "bebidas"
  },
];

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <main className="container mt-4">
      <h1 className="text-center mb-4">Bienvenidos a La Chiquita</h1>
      <p className="lead text-center mb-4">
        Disfruta lo mejor del pan artesanal, hecho con amor.
      </p>

      {/* 📺 Video */}
      <video
        className="mx-auto mb-5 d-block"
        style={{
          width: "300px",
          height: "350px",
          borderRadius: "12px",
          objectFit: "cover",
        }}
        src="/Hojaldre.mp4"
        controls
        muted
        autoPlay
        loop
      />

      <h2 className="mb-3">Recomendados</h2>

      <div className="row g-3">
        {recommendedProducts.map((product, index) => (
          <div 
            className="col-6 col-md-3" 
            key={index}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            style={{ position: "relative" }}
          >
            {/* Overlay con efecto hover */}
            {hoveredProduct === index && (
              <div 
                className="product-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 10,
                  padding: "20px",
                  transition: "all 0.3s ease"
                }}
              >
                <h5 
                  className="text-white mb-3 text-center"
                  style={{ fontWeight: "bold" }}
                >
                  {product.category}
                </h5>
                <Link 
                  to={`/productos#${product.categorySlug}`}
                  className="btn btn-light btn-sm"
                  style={{
                    borderRadius: "20px",
                    fontWeight: "bold",
                    padding: "8px 20px"
                  }}
                >
                  Ver más
                </Link>
              </div>
            )}
            
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="text-center my-5">
        <Link to="/productos" className="btn btn-primary btn-lg">
          Ver todos los productos
        </Link>
      </div>

      {/* Nueva sección "Conócenos" */}
      <div 
        className="row align-items-center my-5 py-5"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "15px",
          padding: "40px"
        }}
      >
        <div className="col-md-6">
          <h2 style={{ color: "#321808" }}>Nuestra Historia</h2>
          <p className="lead" style={{ color: "#654321" }}>
            Desde 1990, en La Chiquita hemos mantenido la tradición de la 
            panadería artesanal, usando ingredientes frescos y recetas 
            transmitidas por generaciones.
          </p>
          <p style={{ color: "#654321" }}>
            Cada producto que horneamos lleva el sabor auténtico de lo casero 
            y el cuidado que solo una familia panadera puede brindar.
          </p>
          <Link 
            to="/nosotros" 
            className="btn btn-outline-primary mt-3"
            style={{
              borderColor: "#af6a18",
              color: "#321808",
              backgroundColor: "transparent"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#e9b274";
              e.target.style.color = "#321808";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#321808";
            }}
          >
            Conoce más sobre nosotros
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <img 
            src="/panaderia-familia.jpg" // Reemplaza con tu imagen
            alt="Familia panadera La Chiquita"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
            }}
            onError={(e) => {
              e.target.src = "/placeholder-panaderia.jpg";
            }}
          />
        </div>
      </div>

      {/* Estilos CSS para mejoras visuales */}
      <style>
        {`
          .product-overlay {
            opacity: 0;
            transform: scale(0.95);
            animation: fadeIn 0.3s ease forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .product-card-container {
            transition: transform 0.3s ease;
          }

          .product-card-container:hover {
            transform: translateY(-5px);
          }
        `}
      </style>
    </main>
  );
}