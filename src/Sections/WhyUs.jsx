import React from "react";
import "../Styles/WhyUs.css";

const WhyUs = () => {
  return (
    <section className="why-us-section">
      {/* Nagłówek na białym tle */}
      <div className="why-us-header">
        <h2
          style={{ color: "white", textTransform: "uppercase" }}
          className="how-it-works-title highlight-font"
        >
          DLACZEGO MY
        </h2>
      </div>

      {/* Sekcja ze zdjęciem i treścią */}
      <div className="why-us-body">
        <div className="why-us-overlay"></div>
        <div className="why-us-container">
          <div className="why-us-content">
            <p>
              Jesteśmy zespołem, który od lat projektuje i realizuje
              przestrzenie w oparciu o indywidualne koncepcje.
            </p>

            <p>
              Łączymy doświadczenie projektowe z praktycznym podejściem do
              wykonawstwa — od pierwszej idei po gotowy budynek.
            </p>

            <p>
              Generalnym wykonawcą naszych projektów jest firma Yaremco
              Engineering sp. z o.o. — z wieloletnim doświadczeniem w branży
              oraz licznymi realizacjami i nagrodami potwierdzającymi jakość
              wykonania.
            </p>

            <p>
              Dzięki temu oferujemy nie tylko dopracowany projekt, ale przede
              wszystkim sprawdzony proces i przewidywalny efekt końcowy.
            </p>

            <p>
              Realizujemy projekt kompleksowo — od wyboru modelu, przez
              konfigurację, aż po dostawę i montaż.
            </p>

            <p>
              Do wykonania naszych budynków używamy materiałów wysokiej jakości,
              dobranych pod trwałość, estetykę i komfort użytkowania.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
