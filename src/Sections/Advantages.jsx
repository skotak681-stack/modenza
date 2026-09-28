import React, { useEffect, useRef } from "react";
import "../Styles/Advantages.css";

const advantagesList = [
  {
    title: "Gotowy produkt, nie proces budowy",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Realizacja w kilka tygodni zamiast miesięcy",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Stała kontrola jakości wykonania",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Przewidywalny koszt inwestycji",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Minimalny czas montażu na działce",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const deliverablesList = [
  "Kompletną konstrukcję budynku",
  "Pełne ocieplenie całoroczne",
  "Elewację zewnętrzną",
  "Instalacje (elektryka, wod-kan)",
  "Wykończenie zgodne z wybranym standardem",
  "Transport i montaż",
];

const timelineSteps = [
  {
    time: "Kilka dni",
    title: "Projekt i konfiguracja",
    desc: "Wybór modelu i dopasowanie detali.",
  },
  {
    time: "Kilka tygodni",
    title: "Produkcja",
    desc: "Budowa w kontrolowanych warunkach hali.",
  },
  {
    time: "Kilka dni",
    title: "Montaż na działce",
    desc: "Posadowienie i oddanie do użytku.",
  },
];

const Advantages = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const hiddenElements =
      sectionRef.current.querySelectorAll(".reveal-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="adv-section" id="advantages" ref={sectionRef}>
      <div className="adv-container">
        {/* CZĘŚĆ 1: Dlaczego Modenza */}
        <div className="adv-header reveal-on-scroll fade-in-up">
          <span className="adv-subtitle">DLACZEGO MODENZA</span>
          <h2 className="adv-title">Przewaga, którą widać od razu</h2>
        </div>

        <div className="adv-grid">
          {advantagesList.map((adv, index) => (
            <div
              key={index}
              className={`adv-card reveal-on-scroll fade-in-up delay-${index + 1}`}
            >
              <div className="adv-icon-wrapper">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={adv.icon}
                  />
                </svg>
              </div>
              <h4 className="adv-card-title">{adv.title}</h4>
            </div>
          ))}
        </div>

        {/* CZĘŚĆ 2 i 3: Co otrzymujesz + Czas i Proces (Układ kolumnowy) */}
        <div className="adv-split-section">
          {/* Lewa kolumna: Co otrzymujesz */}
          <div className="deliverables-box reveal-on-scroll fade-in-up delay-2">
            <h3 className="split-title">
              Co{" "}
              <span
                style={{
                  backgroundColor: "#c78c15",
                  opacity: "0 !important",
                }}
                className="color-span"
              >
                otrzymujesz
              </span>
            </h3>
            <p className="split-desc">
              Gotowy produkt, a nie plac budowy. W cenie zawarliśmy:
            </p>
            <ul className="deliverables-list">
              {deliverablesList.map((item, index) => (
                <li key={index}>
                  <div className="check-circle">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Prawa kolumna: Czas i Proces (Oś czasu) */}
          <div className="timeline-box reveal-on-scroll fade-in-up delay-3">
            <h3 className="split-title">Czas i proces</h3>
            <p className="split-desc">
              Szybko i przewidywalnie. Bez wielomiesięcznej budowy i
              niepewności.
            </p>

            <div className="timeline-container">
              {timelineSteps.map((step, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-time">{step.time}</span>
                    <h4 className="timeline-step-title">{step.title}</h4>
                    <p className="timeline-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="timeline-summary">
              <p>
                Każdy budynek MODENZA to połączenie nowoczesnej architektury,
                funkcjonalności i trwałych materiałów. Produkt przemyślany w
                każdym detalu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
