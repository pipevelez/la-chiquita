import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import { useEffect } from "react";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/productos" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/nosotros" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function NavbarCloser() {
  const location = useLocation();

  useEffect(() => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      if (navbarCollapse.classList.contains("show")) {
        console.log("Cerrando el navbar por cambio de ruta");
        navbarCollapse.classList.remove("show");
      } else {
        console.log("Navbar ya cerrado al cambiar de ruta");
      }
    } else {
      console.log("No se encontró #navbarNav en el DOM");
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <NavbarCloser />
      <Navbar />
      <AnimatedRoutes />
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
