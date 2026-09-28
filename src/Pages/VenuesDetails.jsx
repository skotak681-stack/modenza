import React, { useEffect, useState, useCallback, useRef } from "react";

import "../Styles/VenuesDetails.css";

const BASE = "https://res.cloudinary.com/doqdbxxis/image/upload";

const VenuesDetails = () => {
  const modelId = location.pathname.replace("/venues/", "");

  const [selectedIndex, setSelectedIndex] = useState(null);

  const venuesData = {
    "k-30": {
      name: "K-30",
      subtitle: "Budynek komercyjny",
      description:
        "Budynek komercyjny przeznaczony pod usługi lub handel. Powierzchnia zabudowy 9m x 3,4m, jeden moduł. W budynku jest wydzielona główna sala, zaplecze oraz toaleta. Wszystkie nasze budynki komercyjne oraz gastronomiczne, wykańczamy oraz wyposażamy pod indywidualne potrzeby klienta. Przygotowujemy pełną dokumentację HACCP.",
      image:
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783011052/k30_k64hvu.jpg",
      demoImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783011164/k303_mm07up.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783011164/k301_rq2et1.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783011164/k302_dl4rxa.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783011164/k304_p0o508.jpg",
      ],
    },
    "k-40": {
      name: "K-40",
      subtitle: "Budynek komercyjny",
      description:
        "Budynek komercyjny przeznaczony pod usługi lub handel. Powierzchnia zabudowy 12m x 3,4m, jeden moduł. W budynku jest wydzielona główna sala z recepcją, toaletą, poczekalnią dla klienta oraz dwa duże niezależne pomieszczenia do zagospodarowania pod prowadzoną działalność. Wszystkie nasze budynki komercyjne oraz gastronomiczne, wykańczamy oraz wyposażamy pod indywidualne potrzeby klienta. Przygotowujemy pełną dokumentację HACCP.",
      image: `${BASE}/v1783001220/k40_ckmykx.jpg`,
      demoImgs: [
        `${BASE}/v1783003451/K-40-1_l1dc4h.jpg`,
        `${BASE}/v1783003451/K-40-2_so94sv.jpg`,
        `${BASE}/v1783003451/K-40-3_nl5ixp.jpg`,
        `${BASE}/v1783003453/K-40-4_rd4tw7.jpg`,
        `${BASE}/v1783003453/K-40-5_rijeq8.jpg`,
      ],
    },
    "kg-30": {
      name: "KG-30",
      subtitle: "Budynek gastronomiczny",
      description:
        'Budynek gastronomiczny przygotowany pod "małą gastronomie", na wynos. Powierzchnia zabudowy 9m x 3,4m, jeden moduł. W budynku jest wydzielona główna sala ze strefą kuchenną, ladą do obsługi klienta, oraz poczekalnią dla klienta. W drugiej części budynku, znajduje się pomieszczenie socjalne, magazyn oraz toaleta dla pracowników. Wszystkie nasze budynki komercyjne oraz gastronomiczne, wykańczamy oraz wyposażamy pod indywidualne potrzeby klienta. Przygotowujemy pełną dokumentację HACCP.',
      image: `${BASE}/v1783001221/kg30_zglfge.jpg`,
      demoImgs: [
        `${BASE}/v1783003453/KG-30-1_qukapu.jpg`,
        `${BASE}/v1783003452/KG-30-2_umrfwg.jpg`,
        `${BASE}/v1783003452/KG-30-3_tgdrk8.jpg`,
        `${BASE}/v1783003452/KG-30-4_eifjdi.jpg`,
      ],
    },
    "kg-40": {
      name: "KG-40",
      subtitle: "Budynek gastronomiczny",
      description:
        'Budynek gastronomiczny przygotowany pod "małą gastronomie", na wynos oraz z możliwością spożywania posiłków w "ogródku sezonowym". Powierzchnia zabudowy 12m x 3,4m, jeden moduł. W budynku jest wydzielona główna sala ze strefą kuchenną, ladą do obsługi klienta, oraz toaletą dla klienta. W drugiej części budynku, znajduje się pomieszczenie socjalne, magazyn oraz toaleta dla pracowników. Wszystkie nasze budynki komercyjne oraz gastronomiczne, wykańczamy oraz wyposażamy pod indywidualne potrzeby klienta. Przygotowujemy pełną dokumentację HACCP.',
      image: `${BASE}/v1783001220/kg40_xol4kd.jpg`,
      demoImgs: [
        `${BASE}/v1783003452/KG-40-1_urljkj.jpg`,
        `${BASE}/v1783003452/KG-40-2_geyny1.jpg`,
        `${BASE}/v1783003451/KG-40-3_s6xcbp.jpg`,
      ],
    },
    "kg-70": {
      name: "KG-70+",
      subtitle: "Budynek gastronomiczny",
      description:
        'Budynek gastronomiczny przygotowany pod "restauracje", składa się z dwóch modułów o łącznej powierzchni zabudowy 10.2m x 6,8m. Koncepcja naszych budynków pozwala nam na dowolną konfiguracje pod indywidualne potrzeby klienta. Może on funkcjonować "samodzielnie" (przy deptaku lub plaży) lub w połączeniu z zamkniętą salą konsumpcyjną (całorocznie). W budynku jest wydzielona strefa na bar, kuchnię, zmywak, chłodnię, magazyn, pomieszczenie socjalne oraz toalety dla pracowników oraz klientów. Wszystkie nasze budynki komercyjne oraz gastronomiczne, wykańczamy oraz wyposażamy pod indywidualne potrzeby klienta. Przygotowujemy pełną dokumentację HACCP.',
      image: `${BASE}/v1783001220/kg70_qv49tb.jpg`,
      demoImgs: [
        `${BASE}/v1783003451/KG-70_1_r59ezv.jpg`,
        `${BASE}/v1783003451/KG-70_2_n3qgqo.jpg`,
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783012306/2_kzaaee.jpg",
        `${BASE}/v1783003451/KG-70_3_bu0zlq.jpg`,
        `${BASE}/v1783003569/KG-70_4_cffxus.jpg`,
        `${BASE}/v1783003568/KG-70_5_gdcpu2.jpg`,
        `${BASE}/v1783003568/KG-70_6_vmmx0v.jpg`,
        `${BASE}/v1783003568/KG-70_7_ztrsuc.jpg`,
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783012305/WhatsApp_Image_2026-07-02_at_09.57.56_uxfg5x.jpg",
      ],
    },
    "kg-120": {
      name: "KG-120+",
      subtitle: "Budynek gastronomiczny",
      description:
        'Budynek gastronomiczny przygotowany pod "catering/wesela", składa się z trzech modułów o łącznej powierzchni zabudowy 12m x 10,20m.Ten profesjonalnie zaprojektowany budynek, pozwala na obsłużenie bardzo dużej ilości osób, podczas eventów, wesel lub imprez masowych. Może on funkcjonować "samodzielnie" lub w połączeniu z halą lub namiotem. W budynku jest wydzielona strefa na bar, kuchnię, zmywak, chłodnię, magazyn, pomieszczenie socjalne oraz toalety dla pracowników oraz klientów. Wszystkie nasze budynki komercyjne oraz gastronomiczne, wykańczamy oraz wyposażamy pod indywidualne potrzeby klienta. Przygotowujemy pełną dokumentację HACCP.',
      image: `${BASE}/v1783001220/kg120_w3wzix.jpg`,
      demoImgs: [
        `${BASE}/v1783003567/KG-120_1_unz3cz.jpg`,
        `${BASE}/v1783003567/KG-120_2_yriwe9.jpg`,
        `${BASE}/v1783003556/KG-120_3_mqbe5p.jpg`,
        `${BASE}/v1783003556/KG-120_4_dcjhap.jpg`,
      ],
    },
    "k-360": {
      name: "K-360 GuestHouse",
      subtitle: "Budynek komercyjny",
      description:
        'Budynek komercyjny przygotowany pod działalność związaną z "wynajmem pokoi" typu agroturystyka. Budynek składa się z dziewięciu modułów o łącznej powierzchni zabudowy 12m x 10,20m. Na parterze znajduje się przestrzeń wspólna, jadalnia, kuchnia, magazyn, biuro oraz pokój właścicielski. Na górnych piętrach, znajduje się osiem dwu osobowych pokoi z łazienkami. Dodatkowo na każdym piętrze jest wydzielona wspólna przestrzeń dla gości. Wszystkie nasze budynki komercyjne oraz gastronomiczne, wykańczamy oraz wyposażamy pod indywidualne potrzeby klienta. Przygotowujemy pełną dokumentację HACCP.',
      image: `${BASE}/v1783001220/kg360guestHouse_bywptd.jpg`,
      demoImgs: [
        `${BASE}/v1783003556/K-360_GuestHouse1_bv6yzz.jpg`,
        `${BASE}/v1783003552/K-360_GuestHouse2_ictibk.jpg`,
        `${BASE}/v1783003552/K-360_GuestHouse3_a6mfi5.jpg`,
        `${BASE}/v1783003552/K-360_GuestHouse4_pymsyl.jpg`,
        `${BASE}/v1783003482/K-360_GuestHouse5_jqcmt6.jpg`,
        `${BASE}/v1783003455/K-360_GuestHouse6_y8rkbn.jpg`,
        `${BASE}/v1783003455/K-360_GuestHouse7_e0xrsw.jpg`,
        `${BASE}/v1783003455/K-360_GuestHouse8_omd12u.jpg`,
        `${BASE}/v1783003455/K-360_GuestHouse9_ktfe7y.jpg`,
      ],
    },
    "k-560": {
      name: "K-560 Guest Rooms",
      subtitle: "Budynek komercyjny",
      description:
        'Budynek komercyjny przygotowany pod działalność związaną z "wynajmem pokoi" lub jako dodatek do kompleksu eventowo-weselnego. Budynek składa się z czternastu modułów o łącznej powierzchni zabudowy 24m x 12m. W środku znajduje się dwadzieścia pięć dwu osobowych pokoi z łazienkami. W budynku znajdują się również dwa pomieszczenia gospodarcze oraz miejsce na recepcję. Wszystkie nasze budynki komercyjne oraz gastronomiczne, wykańczamy oraz wyposażamy pod indywidualne potrzeby klienta. Przygotowujemy pełną dokumentację HACCP.',
      image: `${BASE}/v1783001220/K-560_Guest_Rooms_aurgtd.jpg`,
      demoImgs: [
        `${BASE}/v1783003454/K-560_Guest_Rooms1_sj636e.jpg`,
        `${BASE}/v1783003454/K-560_Guest_Rooms2_jad2an.jpg`,
        `${BASE}/v1783003454/K-560_Guest_Rooms3_qen2p2.jpg`,
        `${BASE}/v1783003453/K-560_Guest_Rooms4_ey4ptb.jpg`,
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783012071/WhatsApp_Image_2026-07-02_at_10.36.08_vzylm0.jpg",
        `${BASE}/v1783003453/K-560_Guest_Rooms5_bkcovy.jpg`,
      ],
    },
  };

  const data = venuesData[modelId?.toLowerCase()] || venuesData["k-40"];

  // Main image jako PIERWSZY obrazek galerii (bez duplikatu, jeśli już jest w demoImgs)
  const gallery = data.image
    ? [data.image, ...(data.demoImgs || []).filter((u) => u !== data.image)]
    : data.demoImgs || [];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const openModal = (idx) => setSelectedIndex(idx);
  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((i) => (i - 1 + gallery.length) % gallery.length);
    },
    [gallery.length],
  );

  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((i) => (i + 1) % gallery.length);
    },
    [gallery.length],
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, closeModal, showPrev, showNext]);

  // --- ANIMACJA WJAZDU PRZY SCROLLU (IntersectionObserver) ---
  const rowRefs = useRef([]);
  rowRefs.current = [];
  const addRowRef = (el) => {
    if (el && !rowRefs.current.includes(el)) rowRefs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vd-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    rowRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [gallery.length, modelId]);

  return (
    <div className="vd-page">
      {/* NAGŁÓWEK TEKSTOWY */}
      <header className="vd-header">
        <div className="vd-header-inner">
          <p className="vd-eyebrow">{data.subtitle}</p>
          <h1 className="vd-title">
            Venues <br /> {data.name}
          </h1>
          <div className="vd-header-rule"></div>
          <p className="vd-desc">{data.description}</p>
        </div>
      </header>

      {/* ZIG-ZAG GALERIA */}
      {gallery.length > 0 && (
        <section className="vd-zigzag">
          {gallery.map((imgUrl, idx) => (
            <figure
              key={idx}
              ref={addRowRef}
              className={`vd-row ${idx % 2 === 0 ? "vd-left" : "vd-right"}`}
            >
              <button
                className="vd-frame"
                onClick={() => openModal(idx)}
                aria-label={`Powiększ zdjęcie ${idx + 1}`}
              >
                <img
                  src={imgUrl}
                  alt={`${data.name} — ujęcie ${idx + 1}`}
                  loading="lazy"
                />
              </button>
              <figcaption className="vd-caption">
                <span className="vd-num">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="vd-caption-name">{data.name}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="vd-lightbox-overlay" onClick={closeModal}>
          <button className="vd-lightbox-close" onClick={closeModal}>
            &times;
          </button>

          <button
            className="vd-lightbox-nav vd-nav-prev"
            onClick={showPrev}
            aria-label="Poprzednie"
          >
            &#8249;
          </button>

          <div
            className="vd-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[selectedIndex]}
              alt="Powiększone ujęcie"
              className="vd-lightbox-img"
            />
            <span className="vd-lightbox-counter">
              {selectedIndex + 1} / {gallery.length}
            </span>
          </div>

          <button
            className="vd-lightbox-nav vd-nav-next"
            onClick={showNext}
            aria-label="Następne"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default VenuesDetails;
