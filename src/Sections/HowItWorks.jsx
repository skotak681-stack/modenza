import { useEffect, useRef } from "react";
import "../Styles/HowItWorks.css";

const stepsData = [
  {
    id: "01",
    title: "Wybór modelu",
    description:
      "Wybierasz jeden z gotowych modeli dopasowanych do Twoich potrzeb.", // [cite: 12, 13]
  },
  {
    id: "02",
    title: "Konfiguracja",
    description: "Określasz standard wykończenia, materiały oraz detale.", // [cite: 14, 15]
  },
  {
    id: "03",
    title: "Produkcja",
    description: "Budynek powstaje w całości w halach produkcyjnych firmy.", // [cite: 16, 17]
  },
  {
    id: "04",
    title: "Dostawa i montaż",
    description: "Transport i montaż na Twojej działce — w kilka dni.", // [cite: 18, 19]
  },
  {
    id: "05",
    title: "Gotowe do użytkowania",
    description: "Otrzymujesz w pełni funkcjonalny, całoroczny budynek.", // [cite: 20, 21]
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    const hiddenElements =
      sectionRef.current.querySelectorAll(".reveal-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className="how-it-works-section"
      id="how-it-works"
      ref={sectionRef}
    >
      <div className="hiw-container">
        {/* Nagłówek sekcji */}
        <div className="hiw-header reveal-on-scroll fade-in-up">
          <h2
            style={{ color: "white" }}
            className="how-it-works-title highlight-font"
          >
            JAK TO DZIAŁA
          </h2>
          <div className="divider"></div>
          <span className="hiw-subtitle" style={{ color: "white" }}>
            Od projektu do gotowego budynku
          </span>
          <div className="divider"></div>
        </div>

        <div className={`hiw-step-card `}>
          {stepsData.map((item, index) => {
            return (
              <div className="step-content">
                <h3 className="step-title">
                  {index + 1}.{" "}
                  <span
                    style={{ backgroundColor: "#c78c15" }}
                    className="color-span"
                  >
                    {item.title}
                  </span>
                </h3>
                <p className="step-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
