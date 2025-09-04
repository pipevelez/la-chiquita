import ProductCard from "../components/ProductCard";

const products = {
  Panadería: [
    {
      name: "Danesa de frutas",
      description: "Crujientes y suaves, rellenas de exquisitas frutas confitadas. El toque perfecto de dulzura para acompañar tu café.",
      image: "/panaderia/Danesas.png",
    },
  ],
  Bebidas: [
    {
      name: "Kumis",
      description: "Fresco, cremoso y 100% artesanal. ¡El sabor de casa en cada sorbo!",
      image: "/bebidas/Kumis.png",
    },
  ],
  Dulces: [
    {
      name: "Alfajor",
      description: "Doble galleta suave, rellena de cremoso arequipe y bañada en coco rallado. Un bocado que te hará sonreír.",
      image: "/dulces/Alfajores.png",
    },
    {
      name: "Milhoja",
      description: "Capas crujientes de hojaldre rellenas de suave arequipe y cubiertas con un delicioso glaseado. Un clásico irresistible para los amantes del dulce.",
      image: "/dulces/Milhojas.png",
    },
    {
      name: "Torta de Maracuyá",
      description: "Suave, esponjosa y con el toque perfecto de maracuyá natural. Una explosión de sabor tropical en cada bocado.",
      image: "/dulces/Torta_mar.png",
    }
  ],
  Especialidades: [
    {
      name: "Pizza",
      description: "Masa suave y crujiente, cubierta con salsa casera, queso derretido y jamón. ¡Un pedazo de sabor irresistible que te hará querer más!",
      image: "/especialidades/Pizza.png",
    },
  ],

  Postres: [
    {
      name: "Copa de Chocolate",
      description: "Deliciosa base de chocolate comestible, rellena de crema suave, frutas frescas, virutas de chocolate blanco y un toque de sabor irresistible. ¡Un postre que conquista a primera vista!",
      image: "/postres/Copa_chocolate.png",
    },

    {
      name: "Vaso Fresas con Crema",
      description: "Capas irresistibles de bizcocho suave, crema batida, salsa de fresa natural, galleta y una cereza para coronar. Dulzura y suavidad en cada cucharada.",
      image: "/postres/Fresas_crema.png",
    },

    {
      name: "Postre de Leche Asada",
      description: "Un clásico lleno de tradición, con el sabor casero que enamora en cada bocado. Su textura suave y su capa doradita hacen de este postre el cierre perfecto para cualquier ocasión.",
      image: "/postres/leche_asada.jpg",
    },

    {
      name: "Postre de Tres Leches",
      description: "La suavidad del bizcocho bañado en tres leches, combinado con el toque dulce del chocolate y la frescura de la fresa, crean una experiencia irresistible. Un postre que derrite corazones en cada cucharada.",
      image: "/postres/tres_leches.jpg",
    },

    {
      name: "Postre de Oreo",
      description: "La combinación perfecta entre la cremosidad y el inconfundible sabor de las galletas Oreo. Cada capa está pensada para consentirte con una mezcla irresistible que no podrás dejar de probar.",
      image: "/postres/oreo.jpg",
    }
  ]
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
        <section key={idx} className="mb-5">
          {/* Punto de anclaje invisible para compensar el navbar */}
          <div id={category} style={{ position: "relative", top: "-80px" }}></div>

          <h2 className="mb-3" style={{ color: "#321808" }}>
            {category}
          </h2>

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
