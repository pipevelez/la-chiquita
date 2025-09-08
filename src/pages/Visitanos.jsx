import { Link } from "react-router-dom";

export default function Visitanos() {
  return (
    <main className="container mt-4">
      {/* Hero Section */}
      <div className="row visitanos-hero align-items-center">
        <div className="col-md-6">
          <h1 className="visitanos-main-title">VISÍTANOS</h1>
          <p className="visitanos-subtitle">
            Te esperamos con los brazos abiertos y el horno encendido
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img 
            src="/apariencia/visitanos.JPG" 
            alt="Interior de Panadería La Chiquita"
            className="visitanos-hero-image"
            onError={(e) => {
              e.target.src = "/placeholder-panaderia.jpg";
            }}
          />
        </div>
      </div>

      {/* Información de Ubicación */}
      <div className="row visitanos-info-section">
        <div className="col-lg-8">
          <h2 className="section-title">Nuestra Ubicación</h2>
          <div className="map-container-large">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.41983789832904!2d-75.81253278392496!3d4.992767080948355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47852c68f4ff7b%3A0x14670897885c7eee!2sPanaderia%20La%20Chiquita!5e0!3m2!1ses-419!2sco!4v1757275659145!5m2!1ses-419!2sco"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Panadería La Chiquita"
            ></iframe>
          </div>
          <div className="text-center mt-3">
            <a
              href="https://www.google.com/maps/place/Panaderia+La+Chiquita/@4.9927671,-75.8125328,20.75z/data=!4m14!1m7!3m6!1s0x8e47852c68f4ff7b:0x14670897885c7eee!2sPanaderia+La+Chiquita!8m2!3d4.9927209!4d-75.8124735!16s%2Fg%2F11hzwrqm_2!3m5!1s0x8e47852c68f4ff7b:0x14670897885c7eee!8m2!3d4.9927209!4d-75.8124735!16s%2Fg%2F11hzwrqm_2?entry=ttu&g_ep=EgoyMDI1MDkwMy.4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="info-card">
            <h3 className="info-card-title">Información de Contacto</h3>
            
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <strong>Dirección:</strong>
                  <p>Cra 10 #10-02, Belalcázar, Caldas</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <strong>Teléfono:</strong>
                  <p>+57 320 3818 931</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <strong>Email:</strong>
                  <p>lachiquitapanaderia1@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-details">
                  <strong>Horarios:</strong>
                  <div className="horarios-container">
                    <p>Lunes a Sábado: 6:00 AM - 8:00 PM</p>
                    <p>Domingos y Festivos: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios Adicionales - CENTRADO */}
      <div className="row services-section">
        <div className="col-12">
          <h2 className="section-title text-center">Nuestros Servicios</h2>
        </div>
        
        <div className="col-12 col-md-8 mx-auto">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 service-card">
              <div className="service-content text-center">
                <div className="service-icon">🎂</div>
                <h3>Pedidos Especiales</h3>
                <p>✨ Realizamos todo tipo de tortas para tus eventos especiales: envinadas, genovesas, tortas frías y tres leches.</p>
                <p>📅 Haz tu pedido con al menos 48 horas de anticipación y disfruta de un postre único y delicioso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Contacto Simplificada */}
      <div className="row contact-section">
        <div className="col-lg-8 mx-auto">
          <h2 className="section-title text-center">¿Tienes alguna pregunta?</h2>
          <p className="text-center mb-4">Estamos aquí para ayudarte</p>
          
          <div className="text-center">
            <Link to="/contacto" className="btn btn-primary btn-lg contact-btn">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>

      {/* Cómo Llegar */}
      <div className="row directions-section">
        <div className="col-12">
          <h2 className="section-title text-center">Cómo llegar</h2>
        </div>
        
        <div className="col-md-6">
          <div className="direction-card">
            <h4>🚗 En carro</h4>
            <p>Estamos ubicados en el centro de Belalcázar, a una cuadra del parque principal. Hay parqueadero público disponible a 50 metros.</p>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="direction-card">
            <h4>🚌 Transporte público</h4>
            <p>Puedes tomar cualquier bus que pase por el centro de Belalcázar. Nuestra panadería está a solo 2 cuadras de la terminal de buses.</p>
          </div>
        </div>
      </div>
    </main>
  );
}