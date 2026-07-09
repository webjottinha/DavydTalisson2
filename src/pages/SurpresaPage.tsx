import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { Particles } from '../components/Particles';
import { Envelope } from '../components/Envelope';

export function SurpresaPage() {
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnvelopeOpen = () => {
    setTimeout(() => {
      setShowFinalScreen(true);
    }, 1000);
  };

  if (showFinalScreen) {
    return <FinalScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Particles */}
      <Particles count={40} color="rgba(212, 175, 55, 0.5)" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="font-inter text-gold-400 text-xs tracking-widest uppercase mb-4 animate-fade-in">
          Uma mensagem para voce
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl text-white mb-8 animate-fade-in-up">
          Sua Surpresa Especial
        </h1>
        <p className="font-inter text-white/70 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Abra o envelope para descobrir...
        </p>

        {/* Envelope */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Envelope
            onOpenComplete={handleEnvelopeOpen}
            letterContent={
              <div className="text-center p-4">
                <p className="font-playfair text-gold-600 text-lg mb-2">
                  Meu Amor,
                </p>
                <p className="font-poppins text-neutral-600 text-sm leading-relaxed">
                  Esta carta carrega todo o amor que sinto por voce...
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

function FinalScreen() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Particles */}
      <Particles count={50} color="rgba(212, 175, 55, 0.4)" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* FOREVER Text */}
        <h1
          className="font-playfair text-6xl md:text-8xl lg:text-9xl tracking-wider mb-8"
          style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5DB72 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 60px rgba(212, 175, 55, 0.3)',
          }}
        >
          FOREVER
        </h1>

        {/* Heart */}
        <div className="mb-8">
          <Heart
            size={80}
            className="text-red-500 mx-auto animate-heart-beat"
            fill="currentColor"
          />
        </div>

        {/* Message */}
        <p className="font-inter text-white/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
          Esta historia continuara sendo escrita todos os dias.
        </p>
        <p className="font-playfair italic text-gold-400 text-xl md:text-2xl">
          Eu te amo, Davyd.
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
          <div className="w-2 h-2 rounded-full bg-gold-500" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
        </div>

        {/* Date */}
        <p className="font-inter text-white/40 text-sm mt-8 tracking-widest">
          2024 &middot; PARA SEMPRE
        </p>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-red-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Heart fill="currentColor" />
          </div>
        ))}
      </div>
    </div>
  );
}
