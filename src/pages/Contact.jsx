import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_eov03a9",   // 👉 Tu Service ID
        "template_b58gn3c",  // 👉 Tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "I6E-q_Ze7F2s-ghH2"  // 👉 Tu Public Key
      )
      .then(
        () => {
          alert("✅ Mensaje enviado correctamente. Te contactaremos pronto.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Error al enviar el mensaje: " + error.text);
        }
      );
  };

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
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nombre@ejemplo.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>
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
