import { useEffect, useRef } from 'react';
import Navigation from '../../components/nav/nav';
import './contact.scss';

export default function Contact() {
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
          Feel free to contact me on Discord under the username{' '}
          <a href="/discord" target="_blank" rel="noopener noreferrer">
            @stainowy
          </a>{' '}
          or via email at{' '}
          <a href="mailto:stainowy@proton.me">stainowy@proton.me</a>. Average
          response time is around 1-3 days.
        </p>
      </div>
    </main>
  );
}
