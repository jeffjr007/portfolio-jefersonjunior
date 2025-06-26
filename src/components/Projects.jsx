import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "CarregueAqui",
    href: "https://carregueaqui.vercel.app",
    description: "Aplicativo web/mobile para motoristas de veículos elétricos encontrarem e gerenciarem pontos de carregamento. Desenvolvido como TCC no SENAI/SE.",
    dates: "2025",
    tags: ["React", "TypeScript", "React Native", "Supabase", "PWA"],
    image: "/logo_carregueaqui_.png",
    video: "/carregueaqui-demo.mp4.mp4",
    links: [
      { icon: "🌐", type: "Site", href: "https://carregueaqui.vercel.app" },
      { icon: "💻", type: "GitHub", href: "https://github.com/jeffjr007/carregueaqui" },
    ],
  },
  {
    title: "Em breve",
    description: "Raspe acima.",
    dates: "2025",
    tags: ["React"],
    image: "/assets/images/project-2.png",
  },
];

export const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="projects-section" style={{ padding: 32 }}>
      <h2 className="heading" style={{ textAlign: 'center', marginBottom: 32 }}>
        Meus <span>Projetos</span>
      </h2>
      <div className="projects-container">
        <button className="projects-nav-btn" onClick={prevProject}>&lt;</button>
        {projects.slice(current, current + 2).map((project, idx) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        <button className="projects-nav-btn" onClick={nextProject}>&gt;</button>
      </div>
    </section>
  );
};
