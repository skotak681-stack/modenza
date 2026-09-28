import React, { useEffect } from "react";
import "../Styles/Documentation.css";

const Documentation = () => {
  useEffect(() => {
    window.scroll(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("doc-visible");
          }
        });
      },
      { threshold: 0.1 }, // Zmniejszyłem threshold, żeby animacje zaczynały się nieco wcześniej
    );

    const revealElements = document.querySelectorAll(".doc-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="doc-page">
      {/* SEKCJA HERO */}
      <section className="doc-hero">
        <div className="doc-hero-bg doc-hero-zoom"></div>
        <div className="doc-hero-overlay"></div>
        <div className="doc-hero-content">
          <h1 className="doc-hero-title doc-fade-in-up">
            Specyfikacja budowlana
          </h1>
          <p
            className="doc-hero-subtitle doc-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Szczegółowa dokumentacja techniczna
          </p>
        </div>
      </section>

      {/* GŁÓWNA TREŚĆ */}
      <section className="doc-content-section">
        <div className="doc-container">
          <div className="doc-main-card doc-reveal">
            {/* BLOK 1: STANDARD */}
            <p
              className="doc-text-block doc-reveal"
              style={{ transitionDelay: "0.2s" }}
            >
              Konstrukcja drewniana wykonana w technologii CLT wraz z
              ociepleniem (łączna grubość ścian zewnętrznych około 20cm).
              Standardowo budynki wyposażone są w dach naczółkowy wielospadowy o
              koncie nachylenia 25 stopni, pokryty czarną blachodachówką wraz z
              orynnowaniem. Na życzenie możliwe jest wykonanie innego dachu
              zgodnie z warunkami miejscowego planu zabudowy. Instalacje
              elektryczne, wentylacyjne oraz wodno-kanalizacyjne. Ściany
              wewnętrzne oraz sufit wykończony płytami regipsowymi. Cokoły przy
              podłodze. Stolarka okienna oraz drzwiowa, kolor Biały lub
              Antracytowy. Drzwi wewnętrzne wraz z okuciami. Sufit pomalowany na
              biało. Oświetlenie sufitowe halogenowe, przygotowana instalacja
              pod ewentualny żyrandol. Wysokiej jakości włączniki oraz gniazda
              elektryczne. Łazienki w pełni wykończone glazurą oraz wyposażone w
              szafkę z umywalką, lustro, toaletę i kabinę prysznicową (lub
              wannę, zależnie od modelu). Kuchnia w pełni umeblowana wraz z
              blatem kuchennym przygotowana pod montaż sprzętu AGD, wybór
              frontów szafek według preferencji klienta. Podłoga w częściach
              wspólnych wykończona jest glazurą (Gres szkliwiony 60cmx60cm).
              Ogrzewanie podłogowe. Szafy wnękowe, garderoby. Elektryczny
              podgrzewacz wody ze zbiornikiem wodnym Stiebel Eltron SHZ 150L LCD
              z bezobsługową anodą tytanową.
            </p>

            {/* BLOK 2: PREMIUM */}
            <h3
              className="doc-subheading doc-reveal"
              style={{ transitionDelay: "0.3s" }}
            >
              Wykończenie PREMIUM
            </h3>
            <p
              className="doc-text-block doc-reveal"
              style={{ transitionDelay: "0.4s" }}
            >
              Elewacja z tynku mineralnego, pomalowana pod wybrany kolor,
              wyłożona piaskowcem wokół budynku przy podłodze (20cm), na całej
              wysokości na rogach budynku(30cm), wokół okien oraz drzwi(20cm).
              Podłogi w sypialniach wykończone są wykładziną dywanową lub
              panelami. Ściany wewnętrzne w całym domu pomalowane pod wybrany
              kolor. Listwy wykończeniowe przy suficie. Dach z wypustem wokół
              budynku 50cm.
            </p>

            {/* BLOK 3: MODERN */}
            <h3
              className="doc-subheading doc-reveal"
              style={{ transitionDelay: "0.5s" }}
            >
              Wykończenie MODERN
            </h3>
            <p
              className="doc-text-block doc-reveal"
              style={{ transitionDelay: "0.6s" }}
            >
              Nowoczesny Design, klasa Selective. Elewacja pokryta w całości
              specjalną ekskluzywnymi panelami wykończeniowymi w kolorze
              antracytowym, co nadaje jej niepowtarzalny wygląd. Umeblowane
              pomieszczenia gospodarcze. Instalacja alarmowa. Rolety
              antywłamaniowe. Ściany, wnęki, półki, szafy oraz garderoby,
              wykończone ekskluzywnymi płytami meblowymi HDF. Podłogi w
              sypialniach wykonane są ze szlachetnego drewna. Dach zakończony na
              równo ze ścianą budynku.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
