import React, { useState, useEffect, useRef } from "react";
import "../Styles/Configurator.css";

// Dane pakietów wyciągnięte z pliku źródłowego
const packages = [
  {
    id: "standard",
    name: "STANDARD",
    subtitle: "Stan deweloperski",
    description: "Przygotowany do indywidualnego wykończenia.",
    features: [
      "Konstrukcja drewniana CLT z ociepleniem (~23cm)",
      "Elewacja z tynku mineralnego (kolor do wyboru)",
      "Płaski dach (kąt nachylenia 7 stopni) zabezpieczony",
      "Komplet instalacji: elektr., wentyl., wod-kan.",
      "Ściany wykończone płytami regipsowymi",
      "Sufit podwieszany z regipsu",
    ],
    priceAdd: 0,
  },
  {
    id: "premium",
    name: "PREMIUM",
    subtitle: "Gotowe do zamieszkania",
    description: "Pełne wykończenie materiałami wysokiej jakości.",
    features: [
      "Wszystko z pakietu Standard",
      "Elewacja z elementami piaskowca",
      "Gotowe podłogi (gres, panele, wykładzina dywanowa)",
      "W pełni wykończone, umeblowane łazienki",
      "Ogrzewanie podłogowe + podgrzewacz Stiebel Eltron",
      "Zabudowa kuchni ze sprzętem AGD Bosch (~25 000 zł)",
    ],
    isPopular: true, // Wyróżniamy ten pakiet
    priceAdd: 80000,
  },
  {
    id: "modern",
    name: "MODERN",
    subtitle: "Nowoczesna estetyka",
    description: "Najwyższy standard i zaawansowane technologie.",
    features: [
      "Wszystko z pakietu Premium",
      "Elewacja z ekskluzywnej blachodachówki",
      "Rolety antywłamaniowe i instalacja alarmowa",
      "Drewniane podłogi i zabudowy z płyt meblowych",
      "Wyższej klasy stolarka okienna i drzwiowa",
      "Najwyższej klasy sprzęt kuchenny Miele (~60 000 zł)",
    ],
    priceAdd: 160000,
  },
];

const addons = [
  { id: "roof", name: "Dach spadzisty" },
  { id: "terrace", name: "Taras zewnętrzny" },
  { id: "pergola", name: "Pergola" },
  { id: "ac", name: "Przygotowanie pod klimatyzację" },
  { id: "foundation", name: "Płyta fundamentowa (przygotowanie)" },
];

const Configurator = () => {
  const sectionRef = useRef(null);
  const [selectedPackage, setSelectedPackage] = useState("premium"); // Domyślnie wybrany Premium
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Bazowa przykładowa cena (do zastąpienia właściwą)
  const basePrice = 250000;

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

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId],
    );
  };

  // Prosty kalkulator pokazujący zmianę ceny
  const currentPackagePrice =
    packages.find((p) => p.id === selectedPackage)?.priceAdd || 0;
  const estimatedPrice = basePrice + currentPackagePrice;

  return (
    <section
      className="configurator-section"
      id="configurator"
      ref={sectionRef}
    >
      <div className="conf-container">
        <div className="conf-header reveal-on-scroll fade-in-up">
          <span className="conf-subtitle">KROK 2</span>
          <h2 className="conf-title">Skonfiguruj swój model</h2>
          <p className="conf-desc">
            Wybierz standard wykończenia i dopasuj budynek do swoich potrzeb.
          </p>
        </div>

        {/* Karty Pakietów */}
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`package-card reveal-on-scroll fade-in-up delay-${index + 1} ${selectedPackage === pkg.id ? "is-selected" : ""}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.isPopular && (
                <div className="popular-badge">Rekomendowane</div>
              )}
              <div className="pkg-header">
                <h3>{pkg.name}</h3>
                <span className="pkg-subtitle">{pkg.subtitle}</span>
              </div>
              <p className="pkg-desc">{pkg.description}</p>

              <ul className="pkg-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <svg
                      className="check-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pkg-select-btn">
                {selectedPackage === pkg.id ? "Wybrano" : "Wybierz pakiet"}
              </div>
            </div>
          ))}
        </div>

        {/* Ważna informacja o dachu */}
        <div className="roof-notice reveal-on-scroll fade-in-up delay-4">
          <p>
            <strong>WAŻNE:</strong> Standardowo budynki wyposażone są w dach
            płaski (7 stopni ukrytego spadku). Na życzenie możliwe jest
            wykonanie dachu skośnego zgodnie z warunkami zabudowy.
          </p>
        </div>

        {/* Opcjonalne dodatki */}
        <div className="addons-section reveal-on-scroll fade-in-up delay-4">
          <h4 className="addons-title">Dodatki (opcjonalne)</h4>
          <div className="addons-grid">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className={`addon-pill ${selectedAddons.includes(addon.id) ? "is-active" : ""}`}
                onClick={() => toggleAddon(addon.id)}
              >
                {addon.name}
              </div>
            ))}
          </div>
        </div>

        {/* Dolny pasek z ceną */}
        <div className="price-estimation-bar reveal-on-scroll fade-in-up delay-5">
          <div className="price-content">
            <span className="price-label">Szacunkowa cena od:</span>
            <span className="price-value">
              {estimatedPrice.toLocaleString("pl-PL")} zł
            </span>
            <span className="price-note">
              (w zależności od ostatecznej konfiguracji)
            </span>
          </div>
          <button className="btn-solid-dark conf-submit-btn">
            Poproś o dokładną wycenę
          </button>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
