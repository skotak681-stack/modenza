import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Szukamy naszego kontenera sekcji Hero
      const heroSection = document.querySelector(".hero-scroll-container");

      if (heroSection) {
        // Obliczamy punkt aktywacji: offset od góry + dokładnie 2/3 wysokości sekcji Hero
        const triggerPoint =
          heroSection.offsetTop + heroSection.offsetHeight * (3 / 4);

        // Jeśli nasz scroll zjechał poniżej wyliczonego punktu
        if (window.scrollY >= triggerPoint) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        // Fallback dla podstron bez Hero
        setIsScrolled(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Wywołanie początkowe

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Podpięty Twój link z Cloudinary */}
        <img
          onClick={() => window.location.assign("/")}
          src="https://res.cloudinary.com/doqdbxxis/image/upload/v1779008416/logo_blfd7e.png"
          alt="MODENZA"
          className="navbar-logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
