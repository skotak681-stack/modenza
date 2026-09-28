import React, { useState, useEffect, useRef } from "react";
import "../Styles/Hero.css";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const sections = containerRef.current.querySelectorAll(".scroll-section");
      const vh = window.innerHeight;
      let currentActive = -1;

      sections.forEach((sec, index) => {
        const rect = sec.getBoundingClientRect();

        // Dynamiczny punkt aktywacji:
        // Slajd 0 pojawia się szybko (85% ekranu)
        // Slajdy 2 i 3 wymagają zescrollowania niżej (tekst pojawi się dopiero, gdy góra sekcji minie 60% wysokości ekranu)
        const triggerPoint = index === 0 ? vh * 0.85 : vh * 0.6;

        if (rect.top <= triggerPoint && rect.bottom >= vh * 0.15) {
          currentActive = index;
        }
      });

      setActiveIndex(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Inicjalizacja przy montowaniu
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-scroll-container" ref={containerRef}>
      {/* SLAJD 1 */}
      <div className="scroll-section">
        <div className="hero-image-container">
          <div
            className="bg-img"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/doqdbxxis/image/upload/v1779007706/2_eqwtiy.png)",
            }}
          ></div>
          <div className="hero-card-wrapper">
            <div className="glass-panel">
              <div
                className={`text-content ${activeIndex === 0 ? "active" : ""}`}
              >
                <h2 className="main-title delay-2 main-title-margin">
                  <span className="highlight-font"> Nowy sposób budowania</span>
                </h2>
                <h2 className="main-title delay-3">
                  Gotowe budynki premium dostarczane i montowane na Twojej
                  działce
                </h2>
              </div>
            </div>
          </div>

          <div className="bottom-brand-container">
            <div className={`brand-logo ${activeIndex === 0 ? "active" : ""}`}>
              <img
                className="logo-hero"
                src="https://res.cloudinary.com/doqdbxxis/image/upload/v1779962436/logo_yaq18q.png"
              />
              <span>RESIDENCES</span>
            </div>
          </div>

          <div
            className="scroll-mouse-container"
            style={{
              opacity: activeIndex === 0 ? 1 : 0,
              transition: "opacity 0.4s",
            }}
          >
            <div className="mouse-body">
              <div className="mouse-wheel"></div>
            </div>
            <p>SCROLL</p>
          </div>
        </div>
      </div>

      {/* SLAJD 2 */}
      <div className="scroll-section">
        <div className="hero-image-container">
          <div
            className={`carousel-img ${carouselIdx === 0 ? "active" : ""}`}
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/doqdbxxis/image/upload/v1779007713/2_hctchx.png)",
            }}
          ></div>
          <div
            className={`carousel-img ${carouselIdx === 1 ? "active" : ""}`}
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/doqdbxxis/image/upload/v1779007713/1_is72sl.png)",
            }}
          ></div>

          <div className="hero-card-wrapper lower">
            <div className="glass-panel ">
              <div
                className={`text-content ${activeIndex === 1 ? "active" : ""}`}
              >
                <p className="slide-text-uniform delay-1">
                  Projektujemy, budujemy i dostarczamy w pełni wykończone oraz
                  wyposażone budynki mieszkalne i komercyjne segmentu Premium,
                  gotowe do użytkowania od pierwszego dnia.
                </p>
                <p className="slide-text-uniform delay-2">
                  Produkcję realizuje generalny wykonawca Yaremco Engineering,
                  natomiast zabudowę meblową i kuchenną w najwyższym standardzie
                  wykonuje wrocławska firma INTAR.
                </p>
                <p
                  className="slide-text-uniform delay-3"
                  style={{ marginTop: "3rem" }}
                >
                  Montaż na Twojej działce trwa zaledwie kilka dni.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-brand-container">
            <div className={`brand-logo ${activeIndex === 1 ? "active" : ""}`}>
              <img
                className="logo-hero"
                src="https://res.cloudinary.com/doqdbxxis/image/upload/v1779962436/logo_yaq18q.png"
              />
              <span>VENUES</span>
            </div>
          </div>
        </div>
      </div>

      {/* SLAJD 3 */}
      <div className="scroll-section">
        <div className="hero-image-container">
          <div
            className={`carousel-img ${carouselIdx === 0 ? "active" : ""}`}
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/doqdbxxis/image/upload/v1779007713/2_hctchx.png)",
            }}
          ></div>
          <div
            className={`carousel-img ${carouselIdx === 1 ? "active" : ""}`}
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/doqdbxxis/image/upload/v1779007707/1_ppk2ev.png)",
            }}
          ></div>

          <div className="hero-card-wrapper lower-2">
            <div className="glass-panel">
              <div
                className={`text-content ${activeIndex === 2 ? "active" : ""}`}
              >
                <p className="slide-text-uniform delay-1">
                  Bez wielomiesięcznej budowy.
                </p>
                <p className="slide-text-uniform delay-2">
                  Bez nieprzewidzianych kosztów.
                </p>
                <p className="slide-text-uniform delay-3">
                  Z pełną kontrolą jakości od projektu po realizację.
                </p>
                <p className="slide-text-uniform delay-4">
                  Nasza technologia pozwala realizować budynki nawet do 6
                  kondygnacji.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-brand-container">
            <div className={`brand-logo ${activeIndex === 2 ? "active" : ""}`}>
              <img
                className="logo-hero"
                src="https://res.cloudinary.com/doqdbxxis/image/upload/v1779962436/logo_yaq18q.png"
              />
              <span>DESIGN. BUILD. INSTALL.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
