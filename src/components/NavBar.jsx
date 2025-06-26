import React, { useState } from "react";
import { getLanguage } from "../util/language";

const language = getLanguage();

export const NavBar = ({ modal, componente }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const changeLanguage = (lang) => {
    const currentLang = localStorage.getItem("language");

    if (currentLang === lang) {
      return;
    }

    localStorage.setItem("language", lang);
    window.location.reload();
  };

  const languageFlags = [
    { code: "pt", src: "https://flagcdn.com/36x27/br.png", alt: "Português" },
    { code: "es", src: "https://flagcdn.com/36x27/es.png", alt: "Espanhol" },
    { code: "en", src: "https://flagcdn.com/36x27/us.png", alt: "Inglês" }
  ];

  return (
    <>
      <header className="header" style={{ width: "100%" }}>
        <a href="/" className="logo" style={{ textDecoration: "none" }}>
          {"<"} Jeferson Junior {"/>"}
          <span className="animate" style={{ "--i": 1 }}></span>
        </a>

        <div
          className={menuOpen ? "bx bx-x" : "bx bx-menu"}
          id="menu-icon"
          onClick={toggleMenu}
        >
          <span className="animate" style={{ "--i": 2 }}></span>
        </div>

        <nav className={menuOpen ? "navbar active" : "navbar"}>
          {componente === "Home" ? (
            <>
              <a href="#home" className="active">
                {language.NavBar.HomeText}
              </a>
              <a href="#education">{language.NavBar.formationText}</a>
              <a href="#projects">{language.NavBar.ProjectsText}</a>
              <a href="#skills">{language.NavBar.SkillsText}</a>
              <a href="#contact">{language.NavBar.ContactText}</a>
              <a style={{ borderBottom: "none" }}>
                <div className="custom-select">
                  <span>
                    {languageFlags.map((flag) => (
                      <img
                        key={flag.code}
                        src={flag.src}
                        srcSet={`${flag.src.replace('36x27', '72x54')} 2x,${flag.src.replace('36x27', '108x81')} 3x`}
                        width="36"
                        height="27"
                        onClick={() => changeLanguage(flag.code)}
                        alt={flag.alt}
                      />
                    ))}
                  </span>
                </div>
              </a>

              <a
                className="theme"
                onClick={() => {
                  modal(!modalOpen);
                  handleModalToggle();
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 14, color: '#fff', letterSpacing: 1 }}>Temas</span>
              </a>
            </>
          ) : (
            <a href="/" className="active">
              Voltar
            </a>
          )}
          <span className="active-nav"></span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </nav>
      </header>
    </>
  );
};
