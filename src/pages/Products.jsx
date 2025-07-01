import ProductCard from "../components/ProductCard";

const products = {
  Panadería: [
    {
      name: "Danesa de frutas",
      description: "Crujientes y suaves, rellenas de exquisitas frutas confitadas. El toque perfecto de dulzura para acompañar tu café.",
      image: "/Danesas.png",
    },
   
  ],
  Bebidas: [
    {
      name: "Kumis",
      description: "Fresco, cremoso y 100% artesanal. ¡El sabor de casa en cada sorbo!",
      image: "/Kumis.png",
    },
    
  ],
  Dulces: [
    {
      name: "Alfajor",
      description: "Doble galleta suave, rellena de cremoso arequipe y bañada en coco rallado. Un bocado que te hará sonreír.",
      image: "/Alfajores.png",
    },
    {
      name: "Milhoja",
      description: "Capas crujientes de hojaldre rellenas de suave arequipe y cubiertas con un delicioso glaseado. Un clásico irresistible para los amantes del dulce.",
      image: "/Milhojas.png",
    },
    {
      name: "Torta de Maracuyá",
      description: "Suave, esponjosa y con el toque perfecto de maracuyá natural. Una explosión de sabor tropical en cada bocado.",
      image: "/Torta_mar.png",
    }
  ],

  Especialidades: [
    {
      name: "Pizza",
      description: "Masa suave y crujiente, cubierta con salsa casera, queso derretido y jamón. ¡Un pedazo de sabor irresistible que te hará querer más!",
      image: "/Pizza.png",
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
