import React from "react";
import "../Styles/ForWhom.css";

const ForWhom = () => {
  return (
    <section className="for-whom-section">
      {/* Tytuł na białym tle */}
      <div className="fw-header">
        <h2
          style={{ color: "white", textTransform: "uppercase" }}
          className="how-it-works-title highlight-font"
        >
          DLA KOGO
        </h2>
      </div>

      {/* Sekcja ze zdjęciem i treścią */}
      <div className="fw-body">
        <div className="fw-overlay"></div>
        <div className="fw-container">
          <div className="fw-content">
            <ul className="fw-list">
              <li>
                Dla osób, które chcą gotowego domu bez wielomiesięcznej budowy
              </li>
              <li>
                Dla inwestorów szukających przewidywalnego produktu premium
              </li>
              <li>
                Dla przedsiębiorców planujących lokal gastronomiczny, usługowy
                lub komercyjny
              </li>
              <li>
                Dla klientów, którzy oczekują jakości, kontroli kosztów i
                szybkiej realizacji
              </li>
            </ul>

            <div className="fw-cta">
              <h3 className="cta-title">Zacznij od wyboru projektu</h3>
              <p className="cta-desc">
                Skonfiguruj swój model i sprawdź możliwości realizacji na Twojej
                działce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
