import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ResidenceDetails.css";

const ResidenceDetails = () => {
  const modelId = location.pathname.replace("/residences/", "");

  // Stan przechowujący INDEX aktualnie klikniętego zdjęcia w tablicy (null = modal zamknięty)
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const modelsData = {
    "h-40": {
      name: "RESIDENCE H-40",
      subtitle: "Dom bez pozwolenia, na zgłoszenie",
      type: `Nowoczesny dom "wypoczynkowy"`,
      area: "~35 m²",
      modules: "2",
      time: "3 tygodnie",
      rooms: ["Salon + kuchnia", "1 sypialnia", "Łazienka", "Przedpokój"],
      description: `Mały dom idealny na działkę rekreacyjną lub pod dom na wynajem krótkoterminowy. Dom bez pozwolenia, na tzw. "zgłoszenie". Może pomieścić maksymalnie 4 osoby do spania. Przestronnie zaprojektowane wnętrze sprawia, że w tym "małym domku" poczujesz, że wnętrze wydaje się dużo większe. W pomieszczeniu dziennym znajduje się w pełni umeblowany aneks kuchenny. W sypialni znajduje się duża szafa, która spełnia rolę gospodarczo-ubraniową. Z tyłu budynku znajdują się duże drzwi tarasowe. Wersja wykończenia do wyboru.`,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121797/glowne1_ijterx.jpg",
      demoImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123362/h-40-demo_zxuusg.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123362/h40demo2_xdc7wu.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123362/h40-demo2_uo3vnp.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123362/h40-demo3_cmaqi3.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123362/h40-demo5_wiqc62.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121797/glowne1_ijterx.jpg",
      ],
      premiumImgs: [],
      modernImgs: [],
    },

    "h-70": {
      name: "RESIDENCE H-70",
      subtitle: "Dom bez pozwolenia, na zgłoszenie",
      type: `Nowoczesny dom "całoroczny"`,
      area: "~67 m²",
      modules: "2",
      time: "0",
      rooms: [
        "Salon z kuchnią i jadalnią",
        "2 sypialnie",
        "Łazienka",
        "Przedpokój",
        "Pomieszczenie gospodarcze",
      ],
      description: `Idealny dom dla rodziny, która szuka alternatywy dla mieszkania w mieście. Powierzchnia tego budynku jest celowo zaprojektowana, aby nie przekroczyć limitu 70 m². Dzięki temu możesz postawić ten budynek na zasadach tzw. "zgłoszeniowych", bez pozwolenia. Pomimo niewielkiego metrażu tego budynku, poczujesz się w nim jak w pełnowymiarowym domu rodzinnym. Wersja wykończenia do wyboru.`,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121783/glowne2_esjych.jpg",
      demoImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124774/h70-demo_yd4sx2.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124775/h70-demo6_hrvxlz.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124775/h70-demo2_gk2whz.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124775/h70-demo5_ae1bqx.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124775/h70-demo3_dnyht3.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124775/h70-demo4_dppsec.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124776/h70-demo8_hmcdsz.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124776/h70-demo7_cekvlr.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124776/h70-demo9_ur585l.jpg",
      ],
      premiumImgs: [],
      modernImgs: [],
    },
    "h-80": {
      name: "RESIDENCE H-80",
      subtitle: "Dom bez pozwolenia, na zgłoszenie",
      type: `Nowoczesny dom "optymalny"`,
      area: "~80 m²",
      modules: "2",
      time: "0",
      rooms: [
        "Salon z kuchnią i jadalnią",
        "2 sypialnie",
        "2 łazienki",
        "Przedpokój",
        "Pomieszczenie gospodarcze",
      ],
      description:
        "Jest to nasz ulubiony projekt, przestrzeń została tutaj zaprojektowana w taki sposób, aby salon z kuchnią i jadalnią, stanowiły największą część domu, w której rodzina może spędzać czas. Na szczególną uwagę zasługuję główna sypialnia z prywatną łazienką. Bardzo duże przeszklenia z tyłu budynku. Wersja wykończenia do wyboru.",
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121796/glowne3_tznc72.jpg",
      demoImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125715/h80-demo_xwwor6.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125715/h80-demo2_r3xjue.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125729/h80-demo3_hpvh9j.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125729/h80-demo4_ozbi29.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125730/h80-demo5_rgk24y.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125731/h80-demo6_e0k2b7.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125736/h80-demo7_zkz9nb.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125737/h80-demo8_qoeilg.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125737/h80-demo9_fmfewm.jpg",
      ],
      premiumImgs: [],
      modernImgs: [],
    },

    "h-120": {
      name: "RESIDENCE H-120",
      subtitle: "Dom bez pozwolenia, na zgłoszenie",
      type: `Nowoczesny dom "wyjątkowy"`,
      area: "~120 m²",
      modules: "3",
      time: "0",
      rooms: [
        "Salon z kuchnią i jadalnią",
        "3 sypialnie",
        "2 łazienki",
        "1 toaleta dzienna",
        "Przedpokój",
        "Korytarz",
        "Garderoba przy sypialni głównej",
        "Biuro/dodatkowy pokój",
        "Pomieszczenie gospodarcze",
      ],
      description:
        "Ten wyjątkowy dom zawdzięcza swoją niezwykłość kształtem swojej bryły. Ułożenie budynku w kształcie litery T nadaje jej niepowtarzalny wygląd, zarówno z przodu, jak i z tyłu budynku. Ten projekt aż się prosi o rozbudowanie go o dodatkową pergolę lub wiatę. Całe lewe skrzydło domu jest zaprojektowane, aby zapewnić jak najwięcej prywatności dla właścicieli. Zabudowa kuchenna wraz z wyspą. Łazienka wyposażona dodatkowo w wannę. Nasz top model. Wersja wykończenia do wyboru.",
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782983370/img-bg_r5zfze.jpg",
      demoImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782983370/img-bg_r5zfze.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126860/h120demo2_wrkvgl.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126861/h120demo4_tcchdp.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126860/h120-demo_n7ilhv.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126861/h120demo3_sgfxkl.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126861/h120demo5_xoftew.jpg",
        "https://res.cloudinary.com/lwaibp6a/image/upload/93e9d1b0-9b77-41cd-8f9f-16b5d49ab942.jpg",
      premiumImgs: [],
      modernImgs: [],
    },
    "h-160": {
      name: "RESIDENCE H-160",
      subtitle: "Dom bez pozwolenia, na zgłoszenie",
      type: `Nowoczesny dom "mała Rezydencja"`,
      area: "~160 m²",
      modules: "4",
      time: "0",
      rooms: [
        "Salon z kuchnią i jadalnią",
        "5 sypialni",
        "2 łazienki",
        "1 toaleta dzienna",
        "2 garderoby",
        "Korytarz",
        "Przedpokój",
        "Pomieszczenie gospodarcze",
      ],
      description:
        "Ten projekt to kwintesencja stylu i luksusu zawarta w parterowym budynku. Prawie 50 metrowa powierzchnia dzienna, pozwoli dużej rodzinie na wspólne spędzanie czasu. Każda łazienka jest dodatkowo wyposażona w wannę. Zabudowa kuchenna wraz z wyspą. Duży dziedziniec ponad 60 metrów. Wersja wykończenia do wyboru.",
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121786/glowne5_a28zfn.jpg",
      demoImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128297/h160-demo_rpy9ec.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128297/h160-demo2_knx4ps.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128196/h160-demo8_wf34v4.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128197/h160-demo7_rhcto2.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128197/h160-demo6_omrpme.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128198/h160-demo5_oyvxun.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128195/h160-demo9_vqfgav.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128199/h160-demo4_b5mjxo.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128199/h160-demo3_oy1r4c.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128195/h160demo10_tdvlau.jpg",
      ],
      premiumImgs: [],
      modernImgs: [],
    },
    "h-240": {
      name: "RESIDENCE H-240",
      subtitle: "Dom bez pozwolenia, na zgłoszenie",
      type: `Nowoczesny dom "duża Rezydencja"`,
      area: "~240 m²",
      modules: "6",
      time: "0",
      rooms: [
        "Salon z kuchnią i jadalnią",
        "Hol na parterze oraz piętrze ze schodami ",
        "2 sypialnie główne, z dużymi garderobami oraz łazienkami wyposażonymi dodatkowo w wanny",
        "3 sypialnie z szafami wnękowymi oraz łazienkami",
        "Biuro/dodatkowy pokój ",
        "Toaleta dzienna",
        "Przedpokój ",
        "Pomieszczenie gospodarcze",
      ],
      description: `Ta cudowana Rezydencja została zaprojektowana tak, aby każdy jej mieszkaniec czuł się w swoim pokoju jak osobnym apartamencie. Bardzo duże przestrzenie wspólne pomieszczą liczną rodzinę oraz gości. Budynek został specjalnie tak zaprojektowany, aby swoją jednocześnie „prostą i zwarta” bryłą, zachował elegancję i klasę na najwyższym poziomie. Zarówno w wersji Premium jak i Modern, ten budynek prezentuje się wyśmienicie. Kuchnia wyposażona w nowoczesną zabudowę wraz z wyspą. W tym modelu, niezależnie od wersji, wszystkie pokoje są wyposażone w zabudowę meblową.`,
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121784/glowne6_cmn9s4.jpg",
      demoImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128822/h240-demo2_oat5c5.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128821/h240-demo3_im8kkt.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128820/h240-demo4_eulq3p.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128800/h240-demo_i7mza9.jpg",
      ],
      premiumImgs: [],
      modernImgs: [],
    },
  };

  const data = modelsData[modelId?.toLowerCase()] || modelsData["h-40"];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const nav = useNavigate();

  // Funkcje do obsługi modala
  const openModal = (index) => setCurrentImgIndex(index);
  const closeModal = () => setCurrentImgIndex(null);

  // Zmiana na poprzednie zdjęcie
  const handlePrev = (e) => {
    e.stopPropagation(); // Zapobiega zamknięciu modala po kliknięciu
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? data.demoImgs.length - 1 : prevIndex - 1,
    );
  };

  // Zmiana na następne zdjęcie
  const handleNext = (e) => {
    e.stopPropagation(); // Zapobiega zamknięciu modala po kliknięciu
    setCurrentImgIndex((prevIndex) =>
      prevIndex === data.demoImgs.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="rd-page">
      {/* SEKCJA HERO Z ANIMACJĄ ZDJĘCIA */}
      <section className="rd-hero">
        <div
          className="rd-hero-bg hero-anim"
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <div className="rd-hero-overlay"></div>
        <div className="rd-hero-content">
          <h1 className="rd-hero-title">{data.name}</h1>
        </div>
      </section>

      {/* GŁÓWNA KARTA */}
      <section className="rd-details-section">
        <div className="rd-container">
          <div className="rd-main-card">
            {/* Siatka z parametrami technicznymi */}
            <div className="rd-specs-grid">
              <div className="rd-spec-box">
                <span className="spec-label">Typ</span>
                <span className="spec-value">{data.type}</span>
              </div>
              <div className="rd-spec-box">
                <span className="spec-label">Powierzchnia</span>
                <span className="spec-value">{data.area}</span>
              </div>
              <div className="rd-spec-box">
                <span className="spec-label">Moduły</span>
                <span className="spec-value">{data.modules}</span>
              </div>
              <div className="rd-spec-box">
                <span className="spec-label">Czas realizacji</span>
                <span className="spec-value">{data.time}</span>
              </div>
            </div>

            <div className="rd-info-divider"></div>

            {/* Rozkład i Opis */}
            <div className="rd-info-layout">
              <div className="rd-rooms-box">
                <h3 className="rd-box-title">Układ pomieszczeń</h3>
                <ul className="rd-rooms-list">
                  {data.rooms.map((room, index) => (
                    <li key={index}>{room}</li>
                  ))}
                </ul>
              </div>

              <div className="rd-description-box">
                <h3 className="rd-box-title">O projekcie</h3>
                <p className="rd-desc-text">{data.description}</p>
              </div>
            </div>

            {/* Galeria zdjęć Demo */}
            {data.demoImgs && data.demoImgs.length > 0 && (
              <div className="rd-gallery-section">
                <h3 className="rd-box-title">Galeria</h3>
                <div className="rd-gallery-grid">
                  {data.demoImgs.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="rd-gallery-item"
                      onClick={() => openModal(idx)}
                    >
                      <img
                        src={imgUrl}
                        alt={`${data.name} - ujęcie ${idx + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Przyciski Akcji */}
            <div className="rd-actions">
              <button
                onClick={() => nav(`/modern-specyfikacje/${modelId}`)}
                className="rd-btn-primary"
              >
                Modern
              </button>
              <button
                onClick={() => nav(`/premium-specyfikacje/${modelId}`)}
                className="rd-btn-primary"
              >
                Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX / MODAL */}
      {currentImgIndex !== null && (
        <div className="rd-lightbox-overlay" onClick={closeModal}>
          {/* Strzałka w lewo */}
          <button className="rd-lightbox-prev" onClick={handlePrev}>
            &#10094;
          </button>

          <div
            className="rd-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="rd-lightbox-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={data.demoImgs[currentImgIndex]}
              alt="Powiększone ujęcie"
              className="rd-lightbox-img"
            />
          </div>

          {/* Strzałka w prawo */}
          <button className="rd-lightbox-next" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default ResidenceDetails;
