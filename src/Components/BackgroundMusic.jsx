import React, { useState, useEffect, useRef } from "react";
import { FiMusic, FiVolumeX } from "react-icons/fi";
import "../Styles/BackgroundMusic.css";

const STORAGE_KEY = "modenza-music-enabled";

// Odczyt preferencji użytkownika. Domyślnie TRUE (ma grać),
// chyba że w localStorage zapisano wprost "false".
const readEnabled = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  } catch {
    return true;
  }
};

const BackgroundMusic = () => {
  // enabled = ŚWIADOMY wybór użytkownika (zapisywany w localStorage).
  // Zmienia się TYLKO po kliknięciu w przycisk.
  const [enabled, setEnabled] = useState(readEnabled);

  // isPlaying = czy faktycznie leci dźwięk teraz (steruje ikonką).
  // To NIE jest zapisywane — to stan chwilowy.
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const CLOUDINARY_URL =
    "https://res.cloudinary.com/doqdbxxis/video/upload/v1779876071/Lndonfox_-_Clockwork_SPOTISAVER_zjj3er.mp3";

  // Efekt startowy: jeśli preferencja to "grać", próbujemy odtworzyć.
  // Jeśli przeglądarka zablokuje autoplay — ustawiamy tylko isPlaying=false,
  // ale NIE dotykamy 'enabled', więc preferencja pozostaje nienaruszona.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;

    if (enabled) {
      const p = audio.play();
      if (p && typeof p.then === "function") {
        p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Zapisujemy WYŁĄCZNIE preferencję użytkownika.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(enabled));
    } catch {
      // localStorage niedostępny (tryb prywatny) — ignorujemy
    }
  }, [enabled]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Użytkownik wycisza — zapisujemy tę decyzję
      audio.pause();
      setIsPlaying(false);
      setEnabled(false);
    } else {
      // Użytkownik włącza — zapisujemy tę decyzję
      try {
        await audio.play();
        setIsPlaying(true);
        setEnabled(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={CLOUDINARY_URL} loop preload="auto" />

      <div className="music-control-wrapper">
        <button
          className={`music-toggle-btn ${isPlaying ? "playing" : ""}`}
          onClick={togglePlay}
          aria-label="Toggle background music"
        >
          {isPlaying ? <FiMusic /> : <FiVolumeX />}
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;
