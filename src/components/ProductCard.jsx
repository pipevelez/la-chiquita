export default function ProductCard({ name, description, price, image }) {
  return (
    <div className="card h-100 shadow-sm border-0" style={{ borderRadius: "12px" }}>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px", height: "160px", objectFit: "cover" }}
        />
      )}
      <div className="card-body" style={{ backgroundColor: "#faf7e7" }}>
        <h5 className="card-title" style={{ color: "#321808" }}>{name}</h5>
        <p className="card-text" style={{ color: "#654321" }}>{description}</p>
        <p className="fw-bold" style={{ color: "#af6a18" }}>{price}</p>
      </div>
    </div>
  );
}
