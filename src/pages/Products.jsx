import { useEffect, useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import TortasCarousel from "../components/TortasCarousel";

// Datos locales de productos (como respaldo)
const localProducts = {
  Panadería: [
    {
      name: "Pan",
      description: "Crujiente por fuera, suave y esponjoso por dentro, con ese aroma irresistible que solo tiene el pan recién horneado. Tradición, calidad y sabor único en cada mordisco, hecho con amor desde 1978 en Panadería La Chiquita.",
      image: "/panaderia/pan.PNG",
    },
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
      image: "/postres/leche_asada.JPG",
    },
    {
      name: "Postre de Tres Leches",
      description: "La suavidad del bizcocho bañado en tres leches, combinado con el toque dulce del chocolate y la frescura de la fresa, crean una experiencia irresistible. Un postre que derrite corazones en cada cucharada.",
      image: "/postres/tres_leches.JPG",
    },
    {
      name: "Postre de Oreo",
      description: "La combinación perfecta entre la cremosidad y el inconfundible sabor de las galletas Oreo. Cada capa está pensada para consentirte con una mezcla irresistible que no podrás dejar de probar.",
      image: "/postres/oreo.JPG",
    },
    {
      name: "Porcion de Torta de Queso",
      description: "Suave, cremosa y con ese toque casero que conquista paladares. Un postre tradicional que combina la sencillez del queso con el sabor auténtico de nuestra panadería. ¡No te quedes sin probarla!",
      image: "/postres/torta_queso.JPG",
    }
  ],
  Tortas: [
    {
      name: "Torta de Chocolate",
      description: "Deliciosa torta de chocolate con relleno cremoso y cubierta de ganache",
      image: "/tortas/torta_chocolate.jpg",
    },
    {
      name: "Torta de Frutas",
      description: "Torta fresca con frutas de la temporada y crema batida",
      image: "/tortas/torta_frutas.jpg",
    },
    {
      name: "Torta de Queso",
      description: "Clásica torta de queso con base de galleta y topping de frutos rojos",
      image: "/tortas/torta_queso.jpg",
    },
    {
      name: "Torta de Maracuyá",
      description: "Torta tropical con sabor a maracuyá y relleno de crema",
      image: "/tortas/torta_maracuya.jpg",
    }
  ]
};

export default function Products() {
  const [products, setProducts] = useState(localProducts);
  const categoriesRef = useRef({});
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // Scroll inmediato al montar el componente (antes de cualquier carga)
    if (!hasScrolledRef.current) {
      const scrollToCategory = sessionStorage.getItem('scrollToCategory');
      if (scrollToCategory) {
        // Scroll inmediato al ID del anchor
        setTimeout(() => {
          const element = document.getElementById(scrollToCategory);
          if (element) {
            const yOffset = -70;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
          sessionStorage.removeItem('scrollToCategory');
          hasScrolledRef.current = true;
        }, 50);
      }
    }

    // Intentar cargar productos desde Strapi (silenciosamente en segundo plano)
    fetch("http://localhost:1337/api/productos?populate=*")
      .then((res) => {
        if (!res.ok) return;
        return res.json();
      })
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          const formattedProducts = {};
          
          data.data.forEach((product) => {
            const category = product.attributes.categoria?.data?.attributes.nombre || "Sin Categoría";
            const categorySlug = category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
            
            if (!formattedProducts[category]) {
              formattedProducts[category] = [];
            }
            
            formattedProducts[category].push({
              name: product.attributes.nombre,
              description: product.attributes.descripcion?.[0]?.children?.[0]?.text || "Descripción no disponible",
              image: product.attributes.imagen?.data?.attributes.url 
                ? `http://localhost:1337${product.attributes.imagen.data.attributes.url}`
                : "/placeholder.png",
              category: category,
              categorySlug: categorySlug
            });
          });
          
          setProducts(formattedProducts);
        }
      })
      .catch((err) => {
        console.error("Error fetching from Strapi:", err);
      });
  }, []);

  // Función para scroll al hacer clic en botones
  const scrollToCategory = (categorySlug) => {
    const element = document.getElementById(categorySlug);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="container mt-4">
      <div id="top"></div>

      <h1 className="mb-4 text-center">Nuestros Productos</h1>

      {/* Botones de navegación por categoría */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {Object.keys(products).map((category, idx) => {
          const categorySlug = category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
          return (
            <button
              key={idx}
              className="btn"
              style={{
                backgroundColor: "#e9b274",
                color: "#321808",
                border: "1px solid #af6a18",
                borderRadius: "20px",
                padding: "8px 16px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#af6a18";
                e.target.style.color = "#faf7e7";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#e9b274";
                e.target.style.color = "#321808";
              }}
              onClick={() => scrollToCategory(categorySlug)}
            >
              {category.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Categorías normales (excluyendo Tortas) */}
      {Object.entries(products).map(([category, items], idx) => {
        if (category === "Tortas") return null; // Excluimos Tortas del mapeo normal
        
        const categorySlug = category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        
        return (
          <section 
            key={idx} 
            className="mb-5"
            ref={(el) => (categoriesRef.current[categorySlug] = el)}
          >
            <div 
              id={categorySlug} 
              style={{ position: "relative", top: "-40px" }}
            ></div>

            <h2 className="mb-3" style={{ color: "#321808" }}>
              {category.toUpperCase()}
            </h2>

            <div className="row g-3">
              {items.map((product, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <ProductCard 
                    name={product.name}
                    description={product.description}
                    image={product.image}
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Sección especial para Tortas - Carrusel */}
      <section 
        className="mb-5 tortas-special-section"
        ref={(el) => (categoriesRef.current["tortas"] = el)}
      >
        <div 
          id="tortas" 
          style={{ position: "relative", top: "-40px" }}
        ></div>
        
        <TortasCarousel />
      </section>

      <div className="text-center my-5">
        <button 
          className="btn btn-primary"
          style={{
            backgroundColor: "#af6a18",
            borderColor: "#af6a18",
            borderRadius: "20px",
            padding: "10px 25px",
            color: "#faf7e7",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#e9b274";
            e.target.style.color = "#321808";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#af6a18";
            e.target.style.color = "#faf7e7";
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Volver Arriba
        </button>
      </div>
    </main>
  );
}