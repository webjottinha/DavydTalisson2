import { useEffect, useMemo } from 'react';

interface ParticlesProps {
  count?: number;
  color?: string;
}

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export function Particles({ count = 30, color = 'rgba(212, 175, 55, 0.6)' }: ParticlesProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
      size: 3 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, [count]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatParticle {
        0% {
          transform: translateY(100vh) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: var(--particle-opacity);
        }
        90% {
          opacity: var(--particle-opacity);
        }
        100% {
          transform: translateY(-100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            animation: `floatParticle ${particle.duration}s linear ${particle.delay}s infinite`,
            '--particle-opacity': particle.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
