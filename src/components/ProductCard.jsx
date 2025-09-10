import { useState } from 'react';

export default function ProductCard({ name, description, price, image }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="card h-100 shadow-sm border-0" style={{ borderRadius: "12px" }}>
      {image && (
        <div className="product-image-container" style={{
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          position: "relative"
        }}>
          {/* Placeholder mientras carga */}
          {!loaded && !error && (
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
                borderRadius: "12px"
              }}
            >
              <span style={{ color: "#888", fontSize: "14px" }}>Cargando...</span>
            </div>
          )}
          
          {/* Imagen optimizada */}
          <img
            src={image}
            className="card-img-top"
            alt={name}
            loading="lazy"
            width={300}
            height={300}
            onLoad={() => setLoaded(true)}
            onError={(e) => {
              setError(true);
              e.target.src = '/placeholder-product.png';
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out"
            }}
          />
        </div>
      )}
      <div className="card-body" style={{ backgroundColor: "#faf7e7" }}>
        <h5 className="card-title" style={{ color: "#321808" }}>{name}</h5>
        <p className="card-text" style={{ color: "#654321" }}>{description}</p>
        {price && <p className="fw-bold" style={{ color: "#af6a18" }}>{price}</p>}
      </div>
    </div>
  );
}