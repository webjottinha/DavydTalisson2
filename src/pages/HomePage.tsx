import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Particles } from '../components/Particles';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="hero-section relative">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/DavydTalisson2/NOS_1.jpg')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Particles */}
        <Particles count={25} />

        {/* Content */}
        <div
          className={`relative z-10 text-center px-6 transition-all duration-1000 ${
            heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500" />
            <div className="w-2 h-2 rounded-full bg-gold-500" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          {/* Main Title */}
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
            Feliz Aniversário
          </h1>

          {/* Subtitle */}
          <p className="font-playfair italic text-2xl md:text-3xl text-gold-400 mb-4">
            Davyd Talisson
          </p>

          {/* Quote */}
          <p className="font-inter text-white/80 text-sm md:text-base max-w-lg mx-auto mb-12 leading-relaxed">
            "Cada momento ao seu lado é uma página escrita com amor,
            e hoje celebramos mais um capítulo dessa história."
          </p>

          {/* CTA Button */}
          <Link to="/sobre" className="btn-elegant inline-block">
            Começar
          </Link>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="w-1 h-1 rounded-full bg-gold-500/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* Intro Section */}
      <IntroSection />

      {/* Quote Section */}
      <QuoteSection />

      {/* Next Section */}
      <NextSection />
    </div>
  );
}

function IntroSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <p className="font-inter text-gold-500 text-xs tracking-widest uppercase mb-4">
          Uma messagem especial
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl text-neutral-800 mb-8">
          Para a pessoa mais especial da minha vida
        </h2>
        <p className="font-inter text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-6">
          Este site foi criado com todo o amor do mundo para você.
          Cada detalhe foi pensado para celebrar sua existência
          e expressar todo o carinho que sinto por você.
        </p>
        <p className="font-inter text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Hoje é o seu dia, mas para mim, todos os dias são seus.
          Você ilumina minha vida de uma forma que nem mil palavras
          conseguiriam descrever.
        </p>
      </div>
    </section>
  );
}

function QuoteSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-cream-100 to-white relative overflow-hidden">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="text-6xl mb-6">"</div>
        <blockquote className="font-playfair text-2xl md:text-3xl text-neutral-700 italic leading-relaxed">
          Você é meu sol em dias nublados,
          minha calma em meio ao caos,
          e minha felicidade todos os dias.
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-gold-500" />
          <Heart className="text-gold-500" size={20} />
          <div className="w-16 h-px bg-gold-500" />
        </div>
      </div>
    </section>
  );
}

function Heart({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function NextSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 px-6 bg-neutral-900 relative overflow-hidden">
      <Particles count={15} color="rgba(212, 175, 55, 0.4)" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <p className="font-inter text-gold-400 text-xs tracking-widest uppercase mb-4">
          Continue a jornada
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
          Nossa História
        </h2>
        <p className="font-inter text-white/70 max-w-xl mx-auto mb-10">
          Cada capítulo escrito juntos é um tesouro guardado no coração.
          acabamos de começar esse capítulo, mas já temos bons momentos para lembrar.
        </p>
        <Link to="/sobre" className="btn-elegant">
          Descobrir
        </Link>
      </div>
    </section>
  );
}
