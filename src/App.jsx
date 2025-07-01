import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollRestoration from "./components/ScrollRestoration";
import Footer from "./components/Footer";

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

function App() {
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
  }, [location]); // 🔥 cada vez que cambia la ruta, cierra el menú

  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <AnimatedRoutes />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
