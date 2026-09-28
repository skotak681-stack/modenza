import React, { useEffect } from "react";
import "../Styles/ModelsGrid.css";
import { useNavigate } from "react-router-dom";

const ResidencesModels = () => {
  const models = [
    {
      id: "H-40",
      name: "RESIDENCE H-40",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121797/glowne1_ijterx.jpg",
    },
    {
      id: "H-70",
      name: "RESIDENCE H-70",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121783/glowne2_esjych.jpg",
    },
    {
      id: "H-80",
      name: "RESIDENCE H-80",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121796/glowne3_tznc72.jpg",
    },
    {
      id: "H-120",
      name: "RESIDENCE H-120",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1782983370/img-bg_r5zfze.jpg",
    },
    {
      id: "H-160",
      name: "RESIDENCE H-160",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121786/glowne5_a28zfn.jpg",
    },
    {
      id: "H-240",
      name: "RESIDENCE H-240",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1782121784/glowne6_cmn9s4.jpg",
    },
  ];

  const nav = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="models-section">
      <div className="models-container">
        <div className="models-header">
          <h2 className="models-title">RESIDENCES</h2>
          <p className="models-subtitle">Nowoczesne domy całoroczne</p>
          <div className="models-divider"></div>
          <p className="models-instruction">WYBÓR MODELU</p>
        </div>

        <div className="models-grid">
          {models.map((model, index) => (
            <div className="model-card" key={index}>
              {/* Miejsce na wizualizację modelu */}
              <div className="model-image-wrapper">
                <img src={model.img} alt={model.name} className="model-image" />
              </div>

              <h3 className="model-name">{model.name}</h3>

              {/* Przycisk przekierowujący do podstrony konkretnego modelu */}
              <a
                onClick={() => {
                  nav(`/residences/${model.id.toLowerCase()}`);
                }}
                className="model-btn"
              >
                Wybierz model
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidencesModels;
