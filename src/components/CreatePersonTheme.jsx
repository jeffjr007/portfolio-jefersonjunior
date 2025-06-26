import React, { useEffect, useState } from "react";
import { HomePage } from "./HomePage";
import ColorPicker from 'react-best-gradient-color-picker';
import themes from "../util/DataThemes";

export const CreatePersonTheme = () => {
  const [colorText, setColorText] = useState('');
  const [colorBackground, setColorBackground] = useState('');
  const [colorMain, setColorMain] = useState('');
  const [colorSecond, setColorSecond] = useState('');
  const [actualColor, setActualColor] = useState('bg-color');
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const allColors = {
    "--bg-color": colorBackground,
    "--second-bg-color": colorSecond,
    "--text-color": colorText,
    "--main-color": colorMain,
  };

  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    
    if (newHeight !== windowHeight) {
      setWindowHeight(newHeight);
    }
    if (newWidth !== windowWidth) {
      setWindowWidth(newWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowHeight, windowWidth]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      const parsedTheme = JSON.parse(theme);
      setColorBackground(parsedTheme['--bg-color']);
      setColorSecond(parsedTheme['--second-bg-color']);
      setColorText(parsedTheme['--text-color']);
      setColorMain(parsedTheme['--main-color']);
    } else {
      setColorBackground(themes[5]['--bg-color']);
      setColorSecond(themes[5]['--second-bg-color']);
      setColorText(themes[5]['--text-color']);
      setColorMain(themes[5]['--main-color']);
    }
  }, []);

  const colorOptions = [
    { variable: "bg-color", label: "Cor de fundo" },
    { variable: "text-color", label: "Cor do texto" },
    { variable: "main-color", label: "Cor principal" },
    { variable: "second-bg-color", label: "Cor secundária" },
  ];

  const saveNewTheme = (theme) => {
    const themesUser = JSON.parse(localStorage.getItem("themeUser")) || [];
    themesUser.push(theme);
    localStorage.setItem("themeUser", JSON.stringify(themesUser));
    localStorage.setItem("theme", JSON.stringify(theme));
    window.location.href = "/";
  };

  const getColorValue = (variable) => {
    switch (variable) {
      case "bg-color": return colorBackground;
      case "second-bg-color": return colorSecond;
      case "text-color": return colorText;
      case "main-color": return colorMain;
      default: return colorBackground;
    }
  };

  const getColorSetter = (variable) => {
    switch (variable) {
      case "bg-color": return setColorBackground;
      case "second-bg-color": return setColorSecond;
      case "text-color": return setColorText;
      case "main-color": return setColorMain;
      default: return setColorBackground;
    }
  };

  const renderColorOption = (option, index) => (
    <div key={index}>
      <div
        style={{
          width: "12rem",
          height: "12rem",
          border: ".3px solid white",
          backgroundColor: getColorValue(option.variable),
          borderRadius: "50%",
          marginRight: "-10px",
          zIndex: 2,
          position: "relative",
        }}
        onClick={() => setActualColor(option.variable)}
      />
      <h3 style={{
        textAlign: "center",
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginTop: "1rem",
      }}>
        {option.label}
      </h3>
    </div>
  );

  return (
    <div className="background" style={{ display: "flex" }}>
      <div style={{ width: "100%" }}>
        <HomePage navbar={false} cores={allColors} />
      </div>
      
      <div style={{
        flex: "30%",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div className="theme-modal-item" style={{ position: "fixed" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            height: "20rem",
          }}>
            {colorOptions.map(renderColorOption)}
          </div>
        </div>
        
        <div style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
        }}>
          <div style={{
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            backgroundColor: "#fff",
            position: "fixed",
            top: "22rem",
            zIndex: 1,
          }}>
            <ColorPicker 
              value={getColorValue(actualColor)}
              onChange={getColorSetter(actualColor)}
              height={windowHeight !== 0 && windowHeight < 670 ? 100 : 200}
              hideColorTypeBtns
              hideInputs
              hidePresets={windowHeight !== 0 ? windowHeight < 670 : false}
            />
          </div>
          
          <div className="btn-box" style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            cursor: "pointer",
            position: "fixed",
            bottom: "2rem",
          }}>
            <a className="btn" onClick={() => saveNewTheme(allColors)}>
              Salvar tema
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePersonTheme;
