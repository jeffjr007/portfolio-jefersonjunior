import React, { useEffect, useState } from "react";
import themes from "../util/DataThemes";

export const ThemeModal = ({ onOpen, setOpen }) => {
  const [opened, setOpened] = useState(false);
  const [themeUser] = useState(JSON.parse(localStorage.getItem("themeUser")));

  useEffect(() => {
    if (onOpen) {
      setOpened(true);
    }
  }, [onOpen]);

  const closeModal = () => {
    setOpened(false);
    setOpen(false);
  };

  const applyTheme = (theme) => {
    const root = document.documentElement;
    localStorage.setItem("theme", JSON.stringify(theme));

    root.style.setProperty("--bg-color", theme["--bg-color"]);
    root.style.setProperty("--second-bg-color", theme["--second-bg-color"]);
    root.style.setProperty("--text-color", theme["--text-color"]);
    root.style.setProperty("--main-color", theme["--main-color"]);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (opened && e.target.classList.contains("theme-modal-background")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [opened]);

  const ThemeItem = ({ theme, index }) => (
    <div
      key={index}
      onClick={() => applyTheme(theme)}
      className="theme-modal-item"
      style={{ border: "1px solid black" }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}>
        {[
          { color: theme["--bg-color"], zIndex: 991 },
          { color: theme["--second-bg-color"], zIndex: 992 },
          { color: theme["--text-color"], zIndex: 993 },
          { color: theme["--main-color"], zIndex: 994 }
        ].map((colorInfo, idx) => (
          <div
            key={idx}
            style={{
              width: "5rem",
              height: "5rem",
              border: ".3px solid black",
              backgroundColor: colorInfo.color,
              borderRadius: "50%",
              marginRight: idx < 3 ? "-10px" : "0",
              zIndex: colorInfo.zIndex,
              position: "relative",
            }}
          />
        ))}
      </div>
    </div>
  );

  if (!opened) return null;

  return (
    <div
      className="theme-modal-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 990,
      }}
    >
      <div className="modal-content">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}>
          <h2>Temas</h2>
          <div className="bx bx-x" id="menu-icon" onClick={closeModal}>
            <span className="animate" style={{ "--i": 2 }}></span>
          </div>
        </div>
        
        <div>
          {themes.map((theme, index) => (
            <ThemeItem theme={theme} key={index} />
          ))}

          {themeUser && (
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <h2>Seus temas</h2>
            </div>
          )}

          {Array.isArray(themeUser) &&
            themeUser.map((theme, index) => (
              <ThemeItem theme={theme} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
