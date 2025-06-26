import React, { useEffect } from "react";
import themes from "./util/DataThemes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./components/HomePage";
import "./styles/style.css";
import { CreatePersonTheme } from "./components/CreatePersonTheme";
import { APP_CONFIG } from "./config/appConfig";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const theme = localStorage.getItem('theme');
    
    if (theme) {
      const parsedTheme = JSON.parse(theme);
      applyTheme(parsedTheme);
    } else {
      applyTheme(themes[APP_CONFIG.defaultTheme]);
    }
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', theme['--bg-color']);
    root.style.setProperty('--second-bg-color', theme['--second-bg-color']);
    root.style.setProperty('--text-color', theme['--text-color']);
    root.style.setProperty('--main-color', theme['--main-color']);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-theme" element={<CreatePersonTheme />} />
      </Routes>
    </Router>
  );
}

export default App;
