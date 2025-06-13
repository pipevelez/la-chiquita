import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-center mb-4" style={{ color: "#321808" }}>
        Contáctanos
      </h1>

      <p className="text-center mb-4">
        ¿Tienes dudas, sugerencias o quieres hacer un pedido especial? ¡Escríbenos!
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea className="form-control" id="message" rows="5" placeholder="Escribe tu mensaje..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
