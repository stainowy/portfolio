import { useEffect, useRef } from 'react';
import Navigation from '../../components/nav/nav';
import './about.scss';
import { NavLink } from 'react-router-dom';

export default function About() {
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

  return (
    <main className="container">
      <div className="cursor-glow" ref={glowRef}></div>

      <div className="content">
        <h1 className="liquid-title-small">Stainowy</h1>
        <Navigation />

        <p className="description">
          I'm a front-end developer and project coordinator. Since 2022, I've
          been honing my skills in technologies such as React, JavaScript,
          TypeScript, and Vite, while also utilizing Python, C#, and Lua. I
          specialize in creating both high-performance interactive websites and
          advanced applications for the Discord platform.
          <br />
          <br />
          Beyond coding, I have extensive experience in project coordination and
          design, ensuring that each product is not only technically sound but
          also visually intuitive. I also manage product marketing and sales.
          Originally from Poland, I speak English fluently. I'm also learning
          Spanish. In my free time, I focus on self-improvement and sports.
        </p>

        <div className="actions">
          <NavLink to="/contact">
            <button className="cta-button">Get in touch</button>
          </NavLink>
          <div className="social-icons">
            <NavLink to="/github">
              <i className="fab fa-github"></i>
            </NavLink>
            <NavLink to="/discord">
              <i className="fab fa-discord"></i>
            </NavLink>
            <NavLink to="/twitter">
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink to="/instagram">
              <i className="fab fa-instagram"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}
