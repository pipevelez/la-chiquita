import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollRestoration from "./components/ScrollRestoration";
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
    try {
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    } catch (error) {
      console.error("Error al intentar cerrar el navbar:", error);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <NavbarCloser />
      <Navbar />
      <AnimatedRoutes />
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
