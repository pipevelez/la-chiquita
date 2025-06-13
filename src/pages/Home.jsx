import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const recommendedProducts = [
  {
    name: "Pan de Chocolate",
    description: "Delicioso pan relleno de chocolate semi amargo.",
    price: "$4.500",
    image: "/icono.jpg",
  },
  {
    name: "Croissant",
    description: "Clásico croissant hojaldrado, recién horneado.",
    price: "$3.800",
    image: "/icono.jpg",
  },
  {
    name: "Café Especial",
    description: "Café colombiano 100% suave y aromático.",
    price: "$5.000",
    image: "/icono.jpg",
  },
  {
    name: "Galletas Artesanales",
    description: "Galletas crocantes con chispas de chocolate.",
    price: "$2.500",
    image: "/icono.jpg",
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
      <div
        className="mx-auto mb-5"
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "#e9b274",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#321808",
          fontWeight: "bold",
        }}
      >
        Aquí irá el video 📹
      </div>

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
