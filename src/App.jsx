import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Twoich głównych sekcji/podstron
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

import Footer from "./Sections/Footer";
import ResidencesModels from "./Pages/Residences";
import ResidenceDetails from "./Pages/ResidenceDetails";
import BackgroundMusic from "./Components/BackgroundMusic";
import PremiumSpec from "./Pages/PremiumSpec";
import ModernSpec from "./Pages/ModernSpec";
import Documentation from "./Pages/Documentation";
import Venues from "./Pages/Venues";
import VenuesDetails from "./Pages/VenuesDetails";

function App() {
  return (
    <Router>
      {/* Navbar jest stały, wyświetla się na każdej podstronie */}
      <Navbar />
      <BackgroundMusic />

      <Routes>
        {/* Strona główna ze scrollytellingiem */}
        <Route path="/" element={<Home />} />

        {/* Podstrony segmentów z siatką 6 modeli */}
        <Route path="/residences" element={<ResidencesModels />} />
        <Route path="/venues" element={<Venues />} />

        {/* Dynamiczne podstrony konkretnych modeli domów i lokali commercial */}
        {/* Wartość po dwukropku (:modelId) staje się zmienną w adresie URL */}
        <Route
          path="/residences/:modelId"
          element={<ResidenceDetails type="residence" />}
        />
        <Route path="/venues/:modelId" element={<VenuesDetails />} />
        <Route path="/premium-specyfikacje/:id" element={<PremiumSpec />} />
        <Route path="/modern-specyfikacje/:id" element={<ModernSpec />} />
        <Route path="/specyfikacja-budowlana" element={<Documentation />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
