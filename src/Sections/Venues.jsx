import React, { useState, useEffect } from "react";
import "../Styles/Venues.css";
import { useNavigate } from "react-router-dom";

const Venues = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/kg40_xol4kd.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/kg70_qv49tb.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/K-560_Guest_Rooms_aurgtd.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/kg360guestHouse_bywptd.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001221/kg30_zglfge.jpg",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/kg120_w3wzix.jpg",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/k40_ckmykx.jpg",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783011052/k30_k64hvu.jpg",
    },
  ];

  // Automatyczne zmienianie slajdów co 5 sekund
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const nav = useNavigate();

  useEffect(() => {
    const onBack = () => window.location.assign("/");
    window.addEventListener("popstate", onBack);
    return () => window.removeEventListener("popstate", onBack);
  }, []);

  return (
    <section className="venues-section">
      {/* TŁA (SLYDY) - Nakładają się na siebie */}
      <div className="venues-slider-container">
        {slides.map((slide, index) => (
          <div
            className={`venues-slide ${index === currentSlide ? "active" : ""}`}
            key={slide.id}
          >
            <div
              className="slide-bg pan-anim"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* STATYCZNY OVERLAY DLA CZYTELNOŚCI */}
      <div className="global-overlay"></div>

      {/* STATYCZNY KONTENT */}
      <div className="venues-content">
        <h2 className="residences-title">Przestrzenie dla biznesu i usług</h2>
        <p className="residences-desc">
          Funkcjonalne obiekty dla gastronomii, usług i działalności
          komercyjnej.
          <br />
          Estetyka premium, szybka realizacja, dokumentacja HACCP, gotowość do
          działania.
        </p>
        <button className="venues-btn-premium" onClick={() => nav("/venues")}>
          Zobacz przestrzenie
        </button>
      </div>

      {/* STATYCZNY BRANDING */}
      <div className="residences-branding">
        <img
          src="https://res.cloudinary.com/doqdbxxis/image/upload/v1779962436/logo_yaq18q.png"
          className="logo-hero"
        />{" "}
        <span>VENUES</span>
      </div>

      {/* WSKAŹNIKI */}
      <div className="venues-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`venues-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Venues;
