import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/PremiumSpec.css";
import { FiFileText } from "react-icons/fi";

const PremiumSpec = () => {
  const modelId = location.pathname.replace("/premium-specyfikacje/", "");

  const [selectedImage, setSelectedImage] = useState(null);

  // ZDJĘCIA DYNAMICZNE (MIĘDZY KARTAMI DLA PREMIUM)
  const modelsData = {
    "h-40": {
      name: "RESIDENCE H-40",
      price: `495 000 zł netto `,
      premiumImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124390/h40-premium_y9fgpr.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124390/h-40premium2_cainuz.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124390/h-40-premium3_cmznfy.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124390/h40-premium4_vjvqt2.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782124390/h40-premium6_ns1k8b.jpg",
      ],
    },
    "h-70": {
      name: "RESIDENCE H-70",
      price: `865 000 zł netto `,
      premiumImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125025/h70-premium_s8fmmc.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125025/h70-premium2_mzgzj1.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125026/h70-premium4_ojlgpt.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125025/h70-premium3_fydczz.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125025/h70-premium5_tsedoq.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125026/h70premmium-6_aeddgi.jpg",
      ],
    },
    "h-80": {
      name: "RESIDENCE H-80",
      price: `965 000 zł netto `,
      premiumImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125965/h80-prem-2_jksvfu.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125965/h80-prem-1_ivepfq.jpg",

        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125966/h80-prem-4_rubuqe.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125966/h80-prem-3_cjd2ec.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125969/h80-prem-5_gxglxi.jpg",
      ],
    },
    "h-120": {
      name: "RESIDENCE H-120",
      price: `1 485 000 zł netto 
`,
      premiumImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126863/h120demo7_sbddyp.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782983219/img_b7taih.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126865/h120premium2_wiycay.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126865/h120premium3_mih2oe.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126865/h120premium4_ihsob8.jpg",
      ],
    },
    "h-160": {
      name: "RESIDENCE H-160",
      price: `1 985 000 zł netto `,
      premiumImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128194/h160-prem_jgbvqc.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128193/h160prem2_qxub2u.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128193/h160prem3_fzrzob.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128192/h160prem4_ysbf5c.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128191/h160prem5_aqhpuz.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128174/h160prem6_rq38ud.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128172/h160prem7_mlijod.jpg",
      ],
    },
    "h-240": {
      name: "RESIDENCE H-240",
      price: `2 975 000 zł netto`,
      premiumImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128820/h240-prem_xyggrn.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128819/h240prem1_dr60ky.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128818/h240prem_y50sle.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128817/h240prem3_fiwdcb.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128817/h240prem5_o4zjfi.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128816/h240prem6_zlln61.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128815/h240prem7_ae8kfs.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128814/h240prem8_kryn61.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128813/h240prem9_dczt8a.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128813/h240prem10_xtvqnn.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128812/h240prem11_ciuqd7.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128811/h240prem12_itchd3.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128810/h240prem13_onspzm.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782129191/h240prem14_j66gtg.jpg",
      ],
    },
  };

  const currentModel =
    modelsData[modelId?.toLowerCase()] ||
    modelsData[location.pathname.replace("/premium-specyfikacje/", "")] ||
    modelsData["h-40"];
  const imgs = currentModel.premiumImgs;

  // ŻELAZNA LOGIKA: Tnie po 2. Zostaje 1? Ląduje na końcu w osobnej paczce.
  const getDistribution = (total) => {
    const dist = [];
    let rem = total;
    while (rem > 0) {
      if (rem >= 2) {
        dist.push(2);
        rem -= 2;
      } else {
        dist.push(1);
        rem -= 1;
      }
    }
    return dist;
  };

  const distribution = getDistribution(imgs.length);
  let currentIndex = 0;

  const imageGroups = distribution.map((count) => {
    const group = imgs.slice(currentIndex, currentIndex + count);
    currentIndex += count;
    return group;
  });

  // KATEGORIE KART (TEKST + ZDJĘCIA WEWNĄTRZ KARTY)
  const categories = [
    {
      title: "Podłogi ",
      description:
        "W częściach wspólnych gres szkliwiony z ogrzewaniem podłogowym. W sypialniach luksusowe wykładziny dywanowe lub panele klasy premium.",
      images: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070632/podlogi-premium2_vym4sj.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070631/podlogi-premium_u3axm8.jpg",
      ],
    },
    {
      title: "Ściany i Detale",
      description:
        "Ściany wewnętrzne malowane na wybrany kolor. Wykończenie elegancką listwą przysufitową oraz cokołami przypodłogowymi. Drzwi wewnętrzne premium. Włączniki oraz kontakty wysokiej jakości premium. ",
      images: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070631/S%CC%81ciany_premium2_sjku8o.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070631/S%CC%81ciany_premium_fumv18.jpg",
      ],
    },
    {
      title: "Łazienka i Sanitariaty",
      description:
        "W pełni wykończone glazurą. Wyposażenie: szafka z umywalką, lustro, toaleta oraz kabina prysznicowa lub wanna. Armatura wysokiej klasy.",
      images: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070630/%C5%81azienki_premium_bqpefa.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070629/%C5%81azienki_premium2_cu0ymc.jpg",
      ],
    },
    {
      title: "Elewacja",
      description:
        "Standard Premium to elewacja wykończona ekskluzywnym piaskowcem wokół całego budynku, przy podłodze, na rogach, wokół okien oraz drzwi.",
      images: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070629/Elewacja_premium_dkuhv4.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070628/Elewacja_premium2_nhij54.jpg",
      ],
    },
  ];

  useEffect(() => {
    window.scroll(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const revealElements = document.querySelectorAll(".spec-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, [modelId]);

  const openModal = (imgUrl) => setSelectedImage(imgUrl);
  const closeModal = () => setSelectedImage(null);

  const nav = useNavigate();

  return (
    <div className="spec-page">
      {/* HERO SEKCJA */}
      <section className="spec-hero">
        <div className="spec-hero-bg hero-zoom-anim"></div>
        <div className="spec-hero-overlay"></div>
        <div className="spec-hero-content">
          <h1 className="spec-hero-title">SPECYFIKACJA PREMIUM</h1>
          <p className="spec-hero-subtitle">
            Architektura jako gotowy produkt w najwyższym standardzie
            <br />
            <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Dotyczy: {currentModel.name}
              <br /> Cena: {currentModel.price}
            </span>
          </p>
        </div>
      </section>

      {/* GŁÓWNA TREŚĆ */}
      <section className="spec-content-section">
        <div className="spec-container">
          {categories.map((cat, index) => (
            <React.Fragment key={`cat-${index}`}>
              {/* KARTA Z TEKSTEM I ZDJĘCIAMI WEWNĄTRZ */}
              <div className="spec-main-card spec-reveal">
                <div className="spec-info">
                  <h2 className="spec-cat-title">{cat.title}</h2>
                  <div className="spec-divider"></div>
                  <p className="spec-cat-desc">{cat.description}</p>
                </div>

                {/* Galeria wewnątrz karty */}
                <div className="spec-card-gallery">
                  {cat.images.map((img, i) => (
                    <div
                      className="spec-card-img-wrapper"
                      key={`card-img-${i}`}
                      onClick={() => openModal(img)}
                    >
                      <img src={img} alt={`${cat.title} ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* SEKCJA ZDJĘĆ POMIĘDZY KARTAMI */}
              {imageGroups[index] && (
                <div className="spec-between-gallery spec-reveal">
                  {imageGroups[index].map((img, i) => (
                    <div
                      className="spec-between-img-wrapper"
                      key={`between-img-${index}-${i}`}
                      onClick={() => openModal(img)}
                    >
                      <img
                        src={img}
                        alt={`Premium przerywnik ${index + 1} - ujęcie ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Renderowanie ewentualnych nadmiarowych zdjęć na dole */}
          {imageGroups.slice(categories.length).map((extraGroup, index) => (
            <div
              key={`extra-group-${index}`}
              className="spec-between-gallery spec-reveal"
            >
              {extraGroup.map((img, i) => (
                <div
                  className="spec-between-img-wrapper"
                  key={`extra-img-${index}-${i}`}
                  onClick={() => openModal(img)}
                >
                  <img
                    src={img}
                    alt={`Dodatkowy przerywnik - ujęcie ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
          <a
            onClick={() => nav("/specyfikacja-budowlana")}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button-premium"
            style={{
              cursor: "pointer",
              zIndex: 5,
              maxWidth: 500,
              margin: "auto",
            }}
          >
            <FiFileText className="pdf-icon" />
            <span>Pełna specyfikacja budowlana </span>
          </a>
        </div>
      </section>

      {/* LIGHTBOX / MODAL */}
      {selectedImage && (
        <div className="spec-lightbox-overlay" onClick={closeModal}>
          <div
            className="spec-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="spec-lightbox-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Powiększone ujęcie"
              className="spec-lightbox-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumSpec;
