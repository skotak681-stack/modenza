import React, { useState, useEffect, useRef } from "react";
import "../Styles/Residences.css";
import { useNavigate } from "react-router-dom";

const Residences = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121796/glowne3_tznc72.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782983370/img-bg_r5zfze.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121797/glowne1_ijterx.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121784/glowne6_cmn9s4.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121786/glowne5_a28zfn.jpg",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121783/glowne2_esjych.jpg",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const nav = useNavigate();

  return (
    <section className="residences-section">
      {/* TŁA (SLYDY) - Teraz nakładają się na siebie */}
      <div className="residences-slider-container">
        {slides.map((slide, index) => (
          <div
            className={`residences-slide ${index === currentSlide ? "active" : ""}`}
            key={slide.id}
          >
            <div
              className="slide-bg pan-anim"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* STATYCZNY OVERLAY (Zaciemnienie dla lepszej czytelności tekstu) */}
      <div className="global-overlay"></div>

      {/* STATYCZNA TREŚĆ (Nie zmienia się przy przełączaniu slajdów) */}
      <div className="slide-content">
        <h2 className="residences-title">Nowoczesne domy całoroczne</h2>
        <p className="residences-desc">
          Komfortowe przestrzenie do życia, zaprojektowane jako gotowy produkt.
          <br />
          Różne wielkości, przemyślane układy i wysoki standard wykończenia.
        </p>
        <button
          className="venues-btn-premium"
          onClick={() => nav("/residences")}
        >
          Zobacz domy
        </button>
      </div>

      {/* STATYCZNY BRANDING */}
      <div className="residences-branding">
        <img
          src="https://res.cloudinary.com/doqdbxxis/image/upload/v1779962436/logo_yaq18q.png"
          alt="Logo"
          className="logo-hero"
        />
        <span>RESIDENCES</span>
      </div>

      {/* WSKAŹNIKI */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Residences;
