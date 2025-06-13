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
            <p>Panadería artesanal desde 1995.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#e9b274" }}>Contacto</h5>
            <p>📍 Cra 3 #10-02 Belalcázar, Caldas</p>
            <p>📞 +57 320 3810 931</p>
            <p>✉️ contacto@lachiquita.com</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#e9b274" }}>Síguenos</h5>
            <a
              href="#"
              className="me-2"
              style={{ color: "#faf7e7", textDecoration: "none" }}
            >
              Facebook
            </a>
            <a
              href="#"
              className="me-2"
              style={{ color: "#faf7e7", textDecoration: "none" }}
            >
              Instagram
            </a>
            <a
              href="#"
              style={{ color: "#faf7e7", textDecoration: "none" }}
            >
              WhatsApp
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
