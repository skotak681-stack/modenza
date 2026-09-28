import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/ModernSpec.css";
import { FiFileText } from "react-icons/fi";

const ModernSpec = () => {
  const modelId = location.pathname.replace("/modern-specyfikacje/", "");
  const [selectedImage, setSelectedImage] = useState(null);

  // TWOJE DANE ZDJĘĆ Z CLOUDINARY
  const modelsData = {
    "h-40": {
      name: "RESIDENCE H-40",
      price: "560 000 zł netto",
      modernImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123557/h40-modern2_yuc1fs.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123557/h-40-modren_ramcgs.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123557/h40-modern4_ci2dh8.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123558/h-40-moderm9_ppvpdp.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123557/h40-modern7_cd9itq.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123558/h-40-moderm8_bnyj29.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782123558/h-40-modern9_icqulz.jpg",
      ],
    },
    "h-70": {
      name: "RESIDENCE H-70",
      price: "990 000 zł netto ",
      modernImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125534/h70-modern_lqbxdn.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125535/h70-modern2_djslwy.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125535/h70-modern5_tnwfhj.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125535/h70-momdern3_mhzsn1.jpg",

        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125535/h70modern6_n8erqz.jpg",
      ],
    },
    "h-80": {
      name: "RESIDENCE H-80",
      price: `1 100 000 zł netto `,
      modernImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125969/h80-modern1_koeqdf.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125970/h80-modern2_rho0sw.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125971/h80-modern3_qcfk7h.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125971/h80-modern4_aw0ieh.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782125972/h80-modern5_yhxlyn.jpg",
      ],
    },
    "h-120": {
      name: "RESIDENCE H-120",
      price: `1 700 000 zł netto 
`,
      modernImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126866/h120modern_zdtzn5.jpg",

        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782127475/h120modern2_zn3wpn.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782126896/h120modern3_uypebh.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782127475/h120modern4_liwbiz.jpg",
      ],
    },
    "h-160": {
      name: "RESIDENCE H-160",
      price: `2 300 000 zł netto `,
      modernImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128148/h160modern_xdywoj.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128148/h160modern2_evqoso.jpg",

        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128147/h160modern3_tnk12a.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128201/h160modern7_h19uzf.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128202/h160modern8_xdzgpm.jpg",

        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128147/h160modern4_g5dasw.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128203/h160modern9_ll8jts.jpg",
      ],
    },
    "h-240": {
      name: "RESIDENCE H-240",
      price: " 3 400 000 zł netto",
      modernImgs: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128809/h240modern_kkawft.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128808/h240modern2_vyf0fr.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128807/h240modern3_orladx.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128806/h240modern4_imewpc.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128806/h240modern5_ocpxxo.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128805/h240modern6_m8ii2f.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128804/h240modern7_xxnorx.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128803/h240modern8_tapvnr.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128802/h240modern10_clwrwf.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128801/h240modern11_zjskrl.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128800/h240modern13_gi0l0v.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1782128801/h240modern12_kvpsck.jpg",
      ],
    },
  };

  const currentModel =
    modelsData[location.pathname.replace("/modern-specyfikacje/", "")] ||
    modelsData["h-40"];
  const imgs = currentModel.modernImgs;

  // LOGIKA ROZKŁADU ZDJĘĆ: tnie po 2, jak zostanie 1, daje do osobnej grupy na koniec
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

  const nav = useNavigate();

  // KATEGORIE KART
  const categories = [
    {
      title: "Elewacja i Dach",
      description:
        "Elewacja pokryta w całości specjalnymi, ekskluzywnymi panelami wykończeniowymi w kolorze antracytowym, co nadaje jej niepowtarzalny wygląd. Nowoczeny dach z blachodachówki układany w rąbek, zakończony na równo ze ścianą budynku.",
      images: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070627/Elewacja_Modern_i9fpop.jpg",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800",
      ],
    },
    {
      title: "Wnętrza i Zabudowa",
      description:
        "Ściany, wnęki, półki, szafy, garderoby oraz drzwi wewnętrzne wykończone ekskluzywnymi płytami meblowymi HDF. W pełni umeblowane wszystkie pokoje oraz pomieszczenia gospodarcze.",
      images: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070626/Wne%CC%A8trza_Modern2_m37lxq.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070627/Wne%CC%A8trza_Modern_kvmhup.jpg",
      ],
    },
    {
      title: "Drewniane Podłogi",
      description:
        "W sypialniach stawiamy na naturalne i ciepłe materiały. Podłogi w strefach prywatnych wykończone są w pełni ze szlachetnego drewna.",
      images: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070626/Pod%C5%82ogi_Modern_cwroo4.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070626/Pod%C5%82ogi_Modern2_ovpkwn.jpg",
      ],
    },
    {
      title: "Bezpieczeństwo",
      description:
        "Standard Modern to również dbałość o spokój i prywatność. Budynek wyposażony jest w instalację alarmową oraz rolety antywłamaniowe.",
      images: [
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070626/Bezpieczen%CC%81stwo_Modern2_anh01q.jpg",
        "https://res.cloudinary.com/doqdbxxis/image/upload/v1783070626/Bezpieczen%CC%81stwo_Modern_dbvcmc.jpg",
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

    const revealElements = document.querySelectorAll(".modern-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, [modelId]);

  const openModal = (imgUrl) => setSelectedImage(imgUrl);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="modern-page">
      {/* HERO SEKCJA */}
      <section className="modern-hero">
        <div className="modern-hero-bg hero-zoom-anim"></div>
        <div className="modern-hero-overlay"></div>
        <div className="modern-hero-content">
          <h1 className="modern-hero-title">SPECYFIKACJA MODERN</h1>
          <p className="modern-hero-subtitle">
            Nowoczesny Design. Klasa Selective.
            <br />
            <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Dotyczy: {currentModel.name}
              <br /> Cena: {currentModel.price}
            </span>
          </p>
        </div>
      </section>

      {/* GŁÓWNA TREŚĆ */}
      <section className="modern-content-section">
        <div className="modern-container">
          {categories.map((cat, index) => (
            <React.Fragment key={`cat-${index}`}>
              {/* KARTA Z TEKSTEM I ZDJĘCIAMI WEWNĄTRZ */}
              <div className="modern-main-card modern-reveal">
                <div className="modern-info">
                  <h2 className="modern-cat-title">{cat.title}</h2>
                  <div className="modern-divider"></div>
                  <p className="modern-cat-desc">{cat.description}</p>
                </div>

                {/* Galeria wewnątrz karty */}
                <div className="modern-card-gallery">
                  {cat.images.map((img, i) => (
                    <div
                      className="modern-card-img-wrapper"
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
                <div className="modern-between-gallery modern-reveal">
                  {imageGroups[index].map((img, i) => (
                    <div
                      className="modern-between-img-wrapper"
                      key={`between-img-${index}-${i}`}
                      onClick={() => openModal(img)}
                    >
                      <img
                        src={img}
                        alt={`Przerywnik ${index + 1} - ujęcie ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Renderowanie dodatkowych zdjęć, jeśli jest ich więcej niż kart */}
          {imageGroups.slice(categories.length).map((extraGroup, index) => (
            <div
              key={`extra-group-${index}`}
              className="modern-between-gallery modern-reveal"
            >
              {extraGroup.map((img, i) => (
                <div
                  className="modern-between-img-wrapper"
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
        <div className="modern-lightbox-overlay" onClick={closeModal}>
          <div
            className="modern-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modern-lightbox-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Powiększone ujęcie"
              className="modern-lightbox-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernSpec;
