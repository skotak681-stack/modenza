import React from "react";
import "../Styles/TechnologyInfo.css";

const TechnologyInfo = () => {
  return (
    <section className="tech-section">
      <div className="tech-container">
        {/* Karta ze zaktualizowaną ramką z sekcji "Jak to działa" */}
        <div className="tech-card ">
          <div className="tech-text-content">
            <p className="tech-line">
              Budynki MODENZA powstają w technologii CLT z pełną izolacją
              termiczną. W standardzie obejmują konstrukcję drewnianą, elewację,
              stolarkę wewnętrzną i zewnętrzną, izolowaną oraz ogrzewaną
              podłogę, dach z blachy na rąbek oraz komplet instalacji:
              elektrycznej, wentylacyjnej i wodno-kanalizacyjnej.
            </p>
            <p className="tech-line"></p>
          </div>
          <img
            src="https://res.cloudinary.com/doqdbxxis/image/upload/v1780386695/Screenshot_2026-06-02_at_09.50.51_stjtkn.png"
            className="tech-image"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyInfo;
