import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

export function SplashScreen({ onComplete, duration = 3000 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, duration - 800);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, duration]);

  if (!isVisible) return null;

  return (
    <div
      className={`splash-screen ${isFading ? 'opacity-0' : 'opacity-100'}`}
      style={{
        transition: 'opacity 0.8s ease-out',
      }}
    >
      <div className="text-center">
        <h1
          className="splash-text"
          style={{
            animation: 'splashIn 1s ease-out forwards',
          }}
        >
          Davynho
        </h1>
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gold-500"
              style={{
                animation: `pulseSoft 1.5s ease-in-out ${i * 0.3}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
