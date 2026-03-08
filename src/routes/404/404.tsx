import { useEffect, useRef } from 'react';
import './404.scss';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (glowRef.current) {
      const startX = window.innerWidth * 0.35;
      const startY = window.innerHeight * 0.4;
      glowRef.current.style.left = `${startX}px`;
      glowRef.current.style.top = `${startY}px`;
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
    <main className="home-container">
      <div className="cursor-glow" ref={glowRef}></div>

      <div className="content">
        <h1 className="liquid-title">404</h1>
        <NavLink to="/" end className="back-home-btn">
          Back to Home
        </NavLink>
      </div>
    </main>
  );
}
