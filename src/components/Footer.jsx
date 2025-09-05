import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start"
      style={{ backgroundColor: "#321808", color: "#faf7e7" }}
    >
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#e9b274" }}>La Chiquita</h5>
            <p>Horneando los mejores productos desde 1978.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#e9b274" }}>Contacto</h5>
            <p>📍 Cra 3 #10-02 Belalcázar, Caldas</p>
            <p>📞 +57 320 3818 931</p>
            <p>✉️ lachiquitapanaderia1@gmail.com</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#e9b274" }}>Síguenos</h5>
            <a
              href="https://www.facebook.com/PanaderiayCafeteriaLaChiquita"
              className="me-3 d-inline-block"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#faf7e7", fontSize: "1.5rem" }}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/la_chiquita_panaderia?igsh=MWVncXlzMTNhdW9vNQ=="
              className="me-3 d-inline-block"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#faf7e7", fontSize: "1.5rem" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/573203818931"
              className="d-inline-block"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#faf7e7", fontSize: "1.5rem" }}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div
        className="text-center py-2"
        style={{ backgroundColor: "#af6a18", color: "#321808" }}
      >
        © 2025 La Chiquita. Todos los derechos reservados.
      </div>
    </footer>
  );
}
