import { useEffect, useRef } from 'react';
import Navigation from '../../components/nav/nav';
import './home.scss';

export default function Home() {
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
    <main className="container">
      <div className="cursor-glow" ref={glowRef}></div>

      <div className="content">
        <h1 className="liquid-title">Stainowy</h1>
        <Navigation />
      </div>
    </main>
  );
}
