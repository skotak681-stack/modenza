import React, { useEffect } from "react";
import "../Styles/ModelsGrid.css";
import { useNavigate } from "react-router-dom";

const Venues = () => {
  const models = [
    {
      id: "K-30",
      name: "Venues K-30",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1783011052/k30_k64hvu.jpg",
    },
    {
      id: "KG-30",
      name: "Venues KG-30",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001221/kg30_zglfge.jpg",
    },
    {
      id: "K-40",
      name: "Venues K-40",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/k40_ckmykx.jpg",
    },
    {
      id: "KG-40",
      name: "Venues KG-40",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/kg40_xol4kd.jpg",
    },
    {
      id: "KG-70",
      name: "Venues KG-70+",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/kg70_qv49tb.jpg",
    },
    {
      id: "KG-120",
      name: "Venues KG-120+",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/kg120_w3wzix.jpg",
    },
    {
      id: "K-360",
      name: "Venues K-360 GuestHouse",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/kg360guestHouse_bywptd.jpg",
    },
    {
      id: "K-560",
      name: "Venues K-560 Guest Rooms",
      img: "https://res.cloudinary.com/doqdbxxis/image/upload/v1783001220/K-560_Guest_Rooms_aurgtd.jpg",
    },
  ];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const nav = useNavigate();

  return (
    <section className="models-section">
      <div className="models-container">
        <div className="models-header">
          <h2 className="models-title">VENUES</h2>
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
                  nav(`/venues/${model.id.toLowerCase()}`);
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

export default Venues;
