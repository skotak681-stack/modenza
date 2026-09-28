import React from "react";
import { FiCheck, FiPlus } from "react-icons/fi";
import "../Styles/WhyModenza.css";

const WhyModenza = () => {
  const benefits = [
    "Gotowy produkt, nie proces budowy",
    "Realizacja w kilka tygodni zamiast miesięcy",
    "Stała kontrola jakości wykonania",
    "Przewidywalny koszt inwestycji",
    "Minimalny czas montażu na działce",
    "Wykończenie zgodne z wybranym standardem",
    "Transport i montaż",
  ];

  const addons = [
    "Inny dach spadzisty",
    "Zakup i montaż sprzętu AGD",
    "Taras",
    "Pergola",
    "Montaż klimatyzacji",
    "Montaż instalacji fotowoltaicznej",
    "Przygotowanie gruntu (płyta fundamentowa)",
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        {/* === NAGŁÓWEK SEKCJI === */}
        <div className="why-header">
          <h2
            style={{ color: "white", textTransform: "uppercase" }}
            className="how-it-works-title highlight-font"
          >
            DLACZEGO MODENZA
          </h2>
          <p className="hiw-subtitle">To przewaga, którą widać od razu</p>
        </div>

        {/* === SIATKA Z KARTAMI === */}
        <div className="why-content-grid">
          {/* KARTA: CO OTRZYMUJESZ */}
          <div className="why-modern-card ">
            <h3 className="column-title">
              Co <br />
              <span
                style={{
                  backgroundColor: "#c78c15",
                }}
                className="color-span"
              >
                otrzymujesz
              </span>
            </h3>
            <ul className="benefits-list-clean">
              {benefits.map((item, index) => (
                <li key={index}>
                  <FiCheck className="why-icon-check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* KARTA: OPCJE DODATKOWE */}
          <div className="why-modern-card ">
            <h3 className="column-title">
              Wybór
              <br />
              <span
                style={{
                  backgroundColor: "#c78c15",
                  marginTop: "2.5em",
                }}
                className="color-span"
              >
                opcji dodatkowych
              </span>{" "}
            </h3>
            <ul className="addons-list-clean">
              {addons.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* === STOPKA SEKCJI === */}
        <div className="why-summary-footer">
          <h4 className="summary-eyebrow">
            Produkt przemyślany w każdym detalu
          </h4>
          <p className="summary-text">
            Każdy budynek MODENZA to połączenie nowoczesnej architektury,
            funkcjonalności i trwałych materiałów.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyModenza;
