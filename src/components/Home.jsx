import React from "react";
import { getLanguage } from '../util/language';
import { APP_CONFIG } from '../config/appConfig';

const language = getLanguage();

export const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>
          {language.Home.introdctionText}<span> {language.Home.nameText}</span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </h1>
        <div className="text-animate">
          <h3>{language.Home.jobText}</h3>
          <span className="animate" style={{ "--i": 3 }}></span>
        </div>
        <p>
          {language.Home.TextAbout}
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>

        <div className="btn-box">
          <a
          className="btn"
          href={APP_CONFIG.socialLinks.resume}
          download="Jeferson Junior - Curriculo.pdf"
          target="_blank" 
          rel="noreferrer"
          >
            {language.Home.TextButton}⠀<i className="bx bx-download"></i>
          </a>
          <a href="#projects" className="btn">
            {language.Home.TextButton2}
          </a>
          <span className="animate" style={{ "--i": 5 }}></span>
        </div>
      </div>

      <div className="home-sci">
        <a
          href={APP_CONFIG.socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href={APP_CONFIG.socialLinks.github}
          target="_blank" 
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <span className="animate" style={{ "--i": 6 }}></span>
      </div>

      <div className="home-imgHover"></div>
      <span className="animate home-img" style={{ "--i": 7 }}></span>
    </section>
  );
};

