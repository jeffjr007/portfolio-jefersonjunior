import React from "react";
import { getLanguage } from "../util/language";

const language = getLanguage();

export const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "bx bxl-javascript",
      URL: "https://www.javascript.com/",
      color: "#f0db4f",
    },
    {
      name: "React",
      icon: "bx bxl-react",
      URL: "https://pt-br.reactjs.org/",
      color: "#61dbfb",
    },
    {
      name: "Node.JS",
      icon: "bx bxl-nodejs",
      URL: "https://nodejs.org/en/",
      color: "#3c873a",
    },
    {
      name: "TypeScript",
      icon: "bx bxl-typescript",
      URL: "https://www.typescriptlang.org/",
      color: "#007acc",
    },
    {
      name: "Git",
      icon: "bx bxl-git",
      URL: "https://git-scm.com/",
      color: "#f34f29",
    },
    {
      name: "React Native",
      icon: "bx bxl-react",
      URL: "https://reactnative.dev/",
      color: "#61dbfb",
    },
    {
      name: "SQL",
      icon: "bx bxs-data",
      URL: "https://www.mysql.com/",
      color: "#00758f",
    },
    {
      name: "PostgreSQL",
      icon: "bx bxl-postgresql",
      URL: "https://www.postgresql.org/",
      color: "#336791",
    },
    {
      name: "Python",
      icon: "bx bxl-python",
      URL: "https://www.python.org/",
      color: "#306998",
    },
    {
      name: "Jest",
      icon: "custom-svg",
      URL: "https://jestjs.io/",
      color: "#C21325",
    },
    {
      name: "HTML",
      icon: "bx bxl-html5",
      URL: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      color: "#e34f26",
    },
    {
      name: "CSS",
      icon: "bx bxl-css3",
      URL: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      color: "#2965f1",
    },
    {
      name: "Figma",
      icon: "bx bxl-figma",
      URL: "https://www.figma.com/",
      color: "#F24E1E",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        {language.Skills.sectionTitle}{" "}
        <span>{language.Skills.sectionTitle2}</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <div className="skills-box">
            {skills.map((skill, index) => (
              <div className="skills-content" key={index}>
                <div
                  className="cursor-pointer"
                  onClick={() => window.open(skill.URL, "_blank")}
                >
                  {skill.name === "Jest" ? (
                    <img src="/jest.png" alt="Jest" style={{width: 40, height: 40, marginBottom: 8}} />
                  ) : (
                    <i className={`${skill.icon} bx-lg`} style={{color: skill.color}}></i>
                  )}
                  <h3>{skill.name}</h3>
                </div>
              </div>
            ))}
            <span className="animate scroll" style={{ "--i": 2 }}></span>
          </div>
        </div>
      </div>
    </section>
  );
};
