import React from "react";
import { FiFileText } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import "../Styles/FinishingPackages.css";
import { useNavigate } from "react-router-dom";

const FinishingPackages = () => {
  const nav = useNavigate();

  return (
    <section className="packages-section">
      <div className="packages-container">
        <div className="packages-header">
          <h2
            style={{ color: "white" }}
            className="how-it-works-title highlight-font"
          >
            PAKIETY WYKOŃCZENIA
          </h2>
          <p className="hiw-subtitle ">
            Pełne wykończenie materiałami wysokiej jakości.
            <br />
            Gotowe do zamieszkania od pierwszego dnia.
          </p>
        </div>

        <div className="packages-grid">
          {/* KARTA: PREMIUM */}
          <div className="package-card ">
            <div className="card-header">
              <h3 className="package-name">
                <span
                  style={{ backgroundColor: "#c78c15" }}
                  className="color-span"
                >
                  PREMIUM
                </span>
              </h3>
            </div>
            <div className="package-divider"></div>
            <ul className="package-features">
              <li>- wykończone podłogi</li>
              <li> - pomalowane ściany i sufity</li>
              <li> - w pełni wyposażone łazienki</li>
              <li> - zabudowa kuchni</li>
              <li> - oświetlenie oraz osprzęt elektryczny</li>
            </ul>
          </div>

          {/* KARTA: MODERN */}
          <div className="package-card ">
            <div className="card-header">
              <h3 className="package-name">
                <span
                  style={{
                    backgroundColor: "#c78c15",
                  }}
                  className="color-span"
                >
                  MODERN
                </span>
              </h3>
            </div>
            <div className="package-divider"></div>
            <ul className="package-features">
              <li> - nowoczesna estetyka i podwyższony standard wykończenia</li>
              <li> - elewacja o charakterystycznym, nowoczesnym wyrazie</li>
              <li>
                {" "}
                - rozbudowane zabudowy meblowe i rozwiązania funkcjonalne
              </li>
            </ul>
          </div>
        </div>

        <div className="packages-footer">
          <a
            onClick={() => nav("specyfikacja-budowlana")}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button-premium"
            style={{ cursor: "pointer", zIndex: 5 }}
          >
            <FiFileText className="pdf-icon" />
            <span>Pełna specyfikacja budowlana </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinishingPackages;
