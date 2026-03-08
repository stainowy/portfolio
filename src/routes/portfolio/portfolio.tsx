import { useEffect, useRef } from 'react';
import Navigation from '../../components/nav/nav';
import './portfolio.scss';
import { NavLink } from 'react-router-dom';

export default function Portfolio() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.style.left = '35%';
      glowRef.current.style.top = '40%';
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX + window.scrollX}px`;
        glowRef.current.style.top = `${e.clientY + window.scrollY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: 'Thallium',
      description:
        'A programming studio that creates private, self-hosted software that helps keep your emails, files, conversations, and passwords safe. (In development)',
      stack: 'REACT, VITE, TYPESCRIPT',
      role: 'CEO, FRONTEND DEVELOPER',
      link: 'https://thallium.pages.dev',
    },
  ];

  return (
    <main className="container">
      <div className="cursor-glow" ref={glowRef}></div>

      <div className="content">
        <h1 className="liquid-title-small">Stainowy</h1>
        <Navigation />
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="stack-text">
                STACK: {project.stack}
                <br />
                ROLE: {project.role}
              </p>
              <div className="actions">
                <NavLink className="cta-button" to={project.link}>
                  View Project
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
