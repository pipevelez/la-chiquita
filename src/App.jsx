import { Routes, Route, useLocation } from "react-router-dom";
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
        <Route
          path="/"
          element={<PageTransition><Home /></PageTransition>}
        />
        <Route
          path="/productos"
          element={<PageTransition><Products /></PageTransition>}
        />
        <Route
          path="/nosotros"
          element={<PageTransition><About /></PageTransition>}
        />
        <Route
          path="/contacto"
          element={<PageTransition><Contact /></PageTransition>}
        />
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
    if (navbarCollapse && window.bootstrap) {
      let bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
      if (!bsCollapse) {
        bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
      }
      bsCollapse.hide();
    }
  }, [location]); // cierra navbar en cada navegación

  return null; // este componente no renderiza nada visible
}

function App() {
  return (
    <>
      <ScrollRestoration />
      <NavbarCloser /> {/* ✅ cierra el menú al navegar */}
      <Navbar />
      <AnimatedRoutes />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
