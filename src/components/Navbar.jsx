import { Link } from "react-router-dom";

export default function Navbar() {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && window.bootstrap) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#321808" }}>
      <div className="container-fluid px-3 px-md-5">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
          style={{ color: "#faf7e7", fontSize: "1.5rem", fontWeight: "bold" }}
          onClick={handleNavLinkClick}
        >
          <img
            src="/icono.jpg"
            alt="Logo La Chiquita"
            width="60"
            height="60"
            className="me-2 rounded-circle"
          />
          La Chiquita
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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-light fw-semibold fs-5"
                onClick={handleNavLinkClick}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/productos"
                className="nav-link text-light fw-semibold fs-5"
                onClick={handleNavLinkClick}
              >
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/nosotros"
                className="nav-link text-light fw-semibold fs-5"
                onClick={handleNavLinkClick}
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className="nav-link text-light fw-semibold fs-5"
                onClick={handleNavLinkClick}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
