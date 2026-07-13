import { useMemo } from 'react';

const seededNumber = (seed) => {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
};

export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 46 }, (_, index) => ({
        id: index,
        left: `${seededNumber(index + 1) * 100}%`,
        top: `${seededNumber(index + 51) * 100}%`,
        size: `${2 + seededNumber(index + 101) * 3}px`,
        duration: `${12 + seededNumber(index + 151) * 18}s`,
        delay: `${-seededNumber(index + 201) * 18}s`,
        opacity: 0.15 + seededNumber(index + 251) * 0.55,
      })),
    [],
  );

  return (
    <div className="animated-background" aria-hidden="true">
      <div className="background-grid" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="noise-layer" />
      <div className="particles">
        {particles.map((particle) => (
          <span
            className="particle"
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
