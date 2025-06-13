export default function Hero() {
  return (
    <section className="hero position-relative text-center text-light" style={{ backgroundColor: '#321808' }}>
      <video autoPlay muted loop className="w-100" style={{ objectFit: 'cover', height: '80vh', opacity: 0.5 }}>
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
      <div className="position-absolute top-50 start-50 translate-middle px-3">
        <h1 className="display-3 fw-bold">El sabor que acompaña tu día</h1>
        <p className="lead">Tradición, calidad y frescura en cada bocado</p>
      </div>
    </section>
  );
}
