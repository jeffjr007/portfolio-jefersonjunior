import React, { useState } from "react";
// Importe o Safari se já existir no seu projeto
import Safari from "./Safari";
import ScratchToReveal from "./ScratchToReveal";

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}) {
  const [showVideo, setShowVideo] = useState(false);

  const cardStyle = {
    background: "var(--second-bg-color)",
    color: "var(--text-color)",
    borderRadius: 16,
    boxShadow: "0 4px 24px #0002",
    overflow: "hidden",
    minWidth: 320,
    maxWidth: 360,
    border: "2px solid var(--main-color)",
    transition: "box-shadow 0.3s, border 0.3s",
    position: "relative"
  };

  const imageStyle = {
    width: "100%",
    height: 160,
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    borderRadius: 8,
    background: "#000"
  };

  const tagStyle = {
    background: "var(--main-color)",
    color: "#fff",
    borderRadius: 6,
    padding: "2px 8px",
    fontSize: 11,
    fontWeight: 600,
    textShadow: "0 1px 4px rgba(0,0,0,0.25), 0 0 2px #000",
    boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
    border: "1px solid rgba(0,0,0,0.08)",
    backgroundBlendMode: "multiply",
  };

  const linkStyle = {
    background: "var(--main-color)",
    color: "#fff",
    borderRadius: 6,
    padding: "4px 10px",
    fontSize: 11,
    fontWeight: 600,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 4,
    textShadow: "0 1px 4px rgba(0,0,0,0.25), 0 0 2px #000",
    boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
    border: "1px solid rgba(0,0,0,0.08)",
    backgroundBlendMode: "multiply",
  };

  // Novo estilo para efeito de destaque
  const magicEffect = {
    boxShadow: '0 0 24px 6px var(--main-color), 0 0 60px 12px rgba(255,0,0,0.2)',
    animation: 'magic-glow 2s infinite alternate',
    borderRadius: '50%',
    background: '#fff',
    padding: 12,
    width: 100,
    height: 100,
    objectFit: 'contain',
    margin: '0 auto',
    display: 'block',
  };

  return (
    <div className={`project-card ${className || ""}`} style={cardStyle}>
      {title === "Em breve" ? (
        <ScratchToReveal width={"100%"} height={160} minScratchPercentage={60}
          revealContent={<div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 24, color: "var(--main-color)", letterSpacing: 2}}>EM BREVE</div>}>
          <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18, color: "#888", letterSpacing: 1}}>RASPE PARA REVELAR</div>
        </ScratchToReveal>
      ) : (
        <a
          href={href || "#"}
          className="block cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", position: "relative", display: "block" }}
        >
          {image && (
            title === "CarregueAqui" ? (
              <img src={image} alt={title} style={magicEffect} />
            ) : (
              <img src={image} alt={title} style={imageStyle} />
            )
          )}
        </a>
      )}
      
      <div style={{ padding: "16px", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <h3 style={{
            fontSize: 22,
            fontWeight: 800,
            color: "var(--text-color)",
            margin: 0,
            marginBottom: 0
          }}>
            {title}
          </h3>
          {video && (
            <button
              style={{
                background: "var(--main-color)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "4px 10px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer"
              }}
              onClick={() => setShowVideo(prev => !prev)}
            >
              {showVideo ? "Fechar vídeo" : "Ver vídeo"}
            </button>
          )}
        </div>
        
        {showVideo && video && (
          <video
            src={video}
            controls
            muted
            style={{
              ...imageStyle,
              marginBottom: 12
            }}
          />
        )}
        
        <div style={{ fontSize: 13, color: "var(--text-color)", marginBottom: 8 }}>
          {dates}
        </div>
        
        <div style={{ fontSize: 15, color: "var(--text-color)", marginBottom: 12 }}>
          {description}
        </div>
        
        {tags && tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
            {tags.map((tag) => (
              <span key={tag} style={tagStyle}>
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {links && links.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                {link.icon} {link.type}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 