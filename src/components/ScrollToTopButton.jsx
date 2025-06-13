import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Siempre al pixel 0
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle"
        style={{ zIndex: 1000, width: "50px", height: "50px" }}
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTopButton;
