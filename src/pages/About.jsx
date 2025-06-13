export default function About() {
  return (
    <div className="container my-5" style={{ color: "#321808" }}>
      <h1 className="mb-4" style={{ color: "#af6a18" }}>Sobre Nosotros</h1>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/icono.jpg"
            alt="Panadería La Chiquita"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Nuestra Historia</h3>
          <p style={{ fontSize: "1.1rem" }}>
            Bienvenidos a <strong>Panadería La Chiquita</strong>, un rincón familiar donde el aroma del pan recién horneado se mezcla con la tradición y el amor por lo artesanal.
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            Desde nuestros inicios hemos trabajado con pasión para ofrecer a nuestros clientes productos frescos, deliciosos y de la mejor calidad.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="mb-3">Nuestro Compromiso</h3>
        <ul style={{ fontSize: "1.1rem" }}>
          <li>Productos 100% frescos y artesanales.</li>
          <li>Recetas tradicionales con ingredientes seleccionados.</li>
          <li>Atención cálida y personalizada a cada cliente.</li>
        </ul>
      </div>
    </div>
  );
}
