import ProductCard from "../components/ProductCard";

const products = {
  Panadería: [
    {
      name: "Pan Francés",
      description: "Pan crujiente, perfecto para el desayuno.",
      price: "$2.000",
      image: "/icono.jpg",
    },
    {
      name: "Pan Integral",
      description: "Saludable, elaborado con harinas integrales.",
      price: "$2.500",
      image: "/icono.jpg",
    },
  ],
  Bebidas: [
    {
      name: "Kumis",
      description: "Fresco, cremoso y 100% artesanal. ¡El sabor de casa en cada sorbo!",
      image: "/img/kumis.png",
    },
    {
      name: "Chocolate Caliente",
      description: "Chocolate artesanal con leche cremosa.",
      price: "$4.500",
      image: "/icono.jpg",
    },
  ],
  Dulces: [
    {
      name: "Galletas Artesanales",
      description: "Con chispas de chocolate y crocantes.",
      price: "$2.500",
      image: "/icono.jpg",
    },
    {
      name: "Brownie",
      description: "Suave por dentro, crujiente por fuera.",
      price: "$3.000",
      image: "/icono.jpg",
    },
  ],
};

export default function Products() {
  return (
    <main className="container mt-4">
      {/* Punto de referencia para volver arriba */}
      <div id="top"></div>

      <h1 className="mb-4 text-center">Nuestros Productos</h1>

      {/* Botones de navegación por categoría */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {Object.keys(products).map((category, idx) => (
          <a
            key={idx}
            href={`#${category}`}
            className="btn btn-outline-primary"
            style={{
              backgroundColor: "#e9b274",
              color: "#321808",
              borderColor: "#af6a18",
            }}
          >
            {category}
          </a>
        ))}
      </div>

      {/* Categorías */}
      {Object.entries(products).map(([category, items], idx) => (
        <section key={idx} id={category} className="mb-5">
          <h2 className="mb-3" style={{ color: "#321808" }}>{category}</h2>
          <div className="row g-3">
            {items.map((product, index) => (
              <div className="col-6 col-md-3" key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>
      ))}

    </main>
  );
}
