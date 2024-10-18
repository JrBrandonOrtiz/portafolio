import React from 'react';
import { FaHtml5, FaReact, FaFigma, FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";// Importa los estilos
import './technologies.css';

const technologies = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <IoLogoCss3 />, name: 'SCSS' },
  { icon: <DiJavascript />, name: 'JavaScript' },
  { icon: <BiLogoTypescript />, name: 'TypeScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <BiLogoSass />, name: 'SCSS' },
  { icon: <FaFigma />, name: 'Figma' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <RiNextjsFill />, name: 'Next.js' },
  { icon: <AiFillGithub />, name: 'GitHub' },
];

const Technologies = () => {
  return (
    <section id="technologies">
      <h2>Tecnologías</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div className="tech-item" key={index}>
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
