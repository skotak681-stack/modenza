import React from "react";
import {
  FiPhone,
  FiMail,
  FiFileText,
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import "../Styles/Footer.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* === GÓRNA SEKCJA: SLOGAN I SUBTEXT === */}
        <div className="footer-top-row">
          <div className="footer-statement-block">
            <h2 className="footer-main-title">
              Dostarczamy architekturę jako{" "}
              <span
                style={{
                  backgroundColor: "#c78c15",
                  fontWeight: 800,
                }}
                className="color-span"
              >
                gotowy produkt.
              </span>
            </h2>
            <p className="footer-sub-text">
              Wybierz model MODENZA i sprawdź możliwości realizacji na swojej
              działce.
            </p>
          </div>
        </div>

        {/* === ŚRODKOWA SEKCJA: KONTAKT I PRZYCISK PDF === */}
        <div className="footer-middle-row">
          {/* Dane kontaktowe */}
          <div className="footer-contact-links">
            <a href="tel:+48721505600" className="contact-item">
              <FaWhatsapp
                style={{ color: "#49ca58" }}
                className="contact-icon"
              />
              <div className="contact-meta">
                <span className="contact-label">Zadzwoń do nas </span>
                <span className="contact-value">Maciej +48 721 505 600
                  Oskar +48 516 624 665</span>
              </div>
            </a>

            <a href="mailto:biuro@modenza.com.pl" className="contact-item">
              <FiMail style={{ color: "#4aa1f7" }} className="contact-icon" />
              <div className="contact-meta">
                <span className="contact-label">E-mail</span>
                <span className="contact-value">biuro@modenza.com.pl</span>
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61590732279759"
              className="contact-item"
            >
              <FiFacebook
                style={{ color: "#225da9" }}
                className="contact-icon"
              />
              <div className="contact-meta">
                <span className="contact-label">Social Media</span>
                <span className="contact-value">Facebook</span>
              </div>
            </a>
            <a
              href="https://www.instagram.com/modenza.design.built.install/"
              className="contact-item"
            >
              <FiInstagram
                style={{ color: "#ed8032" }}
                className="contact-icon"
              />
              <div className="contact-meta">
                <span className="contact-label">Social Media</span>
                <span className="contact-value">Instagram</span>
              </div>
            </a>
          </div>

          {/* Nowoczesny przycisk PDF dopasowany do ciemnego tła */}
          <div className="footer-actions"></div>
        </div>

        {/* === DOLNA SEKCJA: COPYRIGHTS & BRANDING === */}
        <div className="footer-bottom-row">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="https://res.cloudinary.com/doqdbxxis/image/upload/v1779962436/logo_yaq18q.png"
            />
            <span>DESIGN. BUILD. INSTALL.</span>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} MODENZA. Wszelkie prawa zastrzeżone.</p>
            <p>
              {" "}
              Project Manager:{" "}
              <strong style={{ fontWeight: 500, color: "white" }}>
                Natan Ilnicki
              </strong>
            </p>
            <p className="partner-credits">
              Generalny wykonawca: <strong>Yaremco Engineering</strong>
            </p>
          </div>
        </div>
      </div>
      <p className="footer-desc">
        Prezentowane na stronie zdjęcia i wizualizacje mają charakter wyłącznie
        poglądowy. Zawartość strony nie stanowi oferty handlowej w rozumieniu
        art. 66 § 1 Kodeksu Cywilnego, a jest jedynie zaproszeniem do zawarcia
        umowy / formą prezentacji produktu
      </p>
    </footer>
  );
};

export default Footer;
