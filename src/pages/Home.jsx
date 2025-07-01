import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const recommendedProducts = [
  {
      name: "Milhoja",
      description: "Capas crujientes de hojaldre rellenas de suave arequipe y cubiertas con un delicioso glaseado. Un clásico irresistible para los amantes del dulce.",
      image: "/Milhojas.png",
  },
  {
      name: "Torta de Maracuyá",
      description: "Suave, esponjosa y con el toque perfecto de maracuyá natural. Una explosión de sabor tropical en cada bocado.",
      image: "/Torta_mar.png",
  },
  {
      name: "Pizza",
      description: "Masa suave y crujiente, cubierta con salsa casera, queso derretido y jamón. ¡Un pedazo de sabor irresistible que te hará querer más!",
      image: "/Pizza.png",
  },
  {
      name: "Kumis",
      description: "Fresco, cremoso y 100% artesanal. ¡El sabor de casa en cada sorbo!",
      image: "/Kumis.png",
  },
];

export default function Home() {
  return (
    <main className="container mt-4">
      <h1 className="text-center mb-4">Bienvenidos a La Chiquita</h1>
      <p className="lead text-center mb-4">
        Disfruta lo mejor del pan artesanal, hecho con amor.
      </p>

      {/* 📺 Cuadro para el video (placeholder) */}
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
          <div className="col-6 col-md-3" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="text-center my-5">
        <Link to="/productos" className="btn btn-primary btn-lg">
          Ver todos los productos
        </Link>
      </div>
    </main>
  );
}
