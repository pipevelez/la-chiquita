import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#321808" }}>
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
          style={{ color: "#faf7e7", fontSize: "1.8rem", fontWeight: "bold" }}
        >
          <img
            src="/icono.jpg"
            alt="Logo La Chiquita"
            width="80"
            height="80"
            className="me-2 rounded-circle"
          />
          Panadería La Chiquita
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "#faf7e7", fontSize: "1.1rem" }}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link" style={{ color: "#faf7e7", fontSize: "1.1rem" }}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link" style={{ color: "#faf7e7", fontSize: "1.1rem" }}>
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link" style={{ color: "#faf7e7", fontSize: "1.1rem" }}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
