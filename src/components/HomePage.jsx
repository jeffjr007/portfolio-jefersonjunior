import React from 'react'
import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Projects } from './Projects';
import { ThemeModal } from './ThemeModal';
import { APP_CONFIG } from '../config/appConfig';
import { useLocation } from 'react-router-dom';

export const HomePage = ({navbar, cores}) => {
  const [menuOpen, setMenuOpen] = useState(false);  
  const [stateModal, setStateModal] = useState(false);
  const location = useLocation();

  const applyCustomColors = () => {
    if (cores) {
      const root = document.documentElement;
      Object.entries(cores).forEach(([property, value]) => {
        if (value) {
          root.style.setProperty(property, value);
        }
      });
    }
  };

  useEffect(() => {
    applyCustomColors();
  }, [cores]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    const handleScroll = () => {
      const top = window.scrollY;

      if (sections && navLinks) {
        sections.forEach((sec) => {
          const offset = sec.offsetTop - APP_CONFIG.animation.scrollOffset;
          const id = sec.getAttribute("id");
      
          if (top >= offset) {
            navLinks.forEach((link) => {
              if (link && document.querySelector(`header nav a[href*=${id}]`)) {
                link.classList.remove("active");
                document
                  .querySelector(`header nav a[href*=${id}]`)
                  .classList.add("active");
              }
            });
      
            sec.classList.add("show-animate");
          } else {
            sec.classList.remove("show-animate");
          }
        });
      }

      if (header) {
        header.classList.toggle("sticky", top > APP_CONFIG.animation.stickyHeaderThreshold);
      }

      setMenuOpen(false);

      const scrolled = window.scrollY;
      
      if (footer) {
        if (Math.ceil(scrolled) >= scrollable) {
          footer.classList.add("show-animate");
        } else {
          footer.classList.remove("show-animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // Scroll suave para #projects ao carregar se hash presente
  useEffect(() => {
    if (location.hash === '#projects') {
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <div className='background'>
        <NavBar modal={setStateModal} componente={navbar !== false ? 'Home' : 'previa'} />
        <div></div>
        <Home />
        <div></div>
        <Education />
        <div></div>
        <section id="projects"><Projects /></section>
        <div></div>
        <Skills />
        <div></div>
        <Contact />
        <div></div>
        <Footer />
      </div>
      <ThemeModal onOpen={stateModal} setOpen={setStateModal} />
    </>
  )
}
