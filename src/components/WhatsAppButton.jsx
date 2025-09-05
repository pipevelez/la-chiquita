import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "573203818931"; // Reemplaza con tu número real
  const message = "¡Hola! Me interesa conocer más sobre sus productos.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={{ 
      position: "fixed", 
      bottom: "90px", 
      right: "20px", 
      zIndex: 1000 
    }}>
      {/* Tooltip */}
      {showTooltip && (
        <div style={{
          position: "absolute",
          bottom: "70px",
          right: "0",
          backgroundColor: "#333",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          fontSize: "14px",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}>
          ¡Contáctanos por WhatsApp!
        </div>
      )}

      {/* Botón */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          textDecoration: "none",
          animation: "pulse 2s infinite",
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Estilos CSS para la animación */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}