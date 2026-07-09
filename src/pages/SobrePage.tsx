import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Particles } from '../components/Particles';
import { Carousel } from '../components/Carousel';
import { useScrollReveal } from '../hooks/useScrollReveal';

const chapters = [
  {
    id: 1,
    title: 'O Inicio',
    subtitle: 'Quando tudo comeca',
    description:
      'Foi como se o universo tivesse conspirado para nos unir. Um olhar, um sorriso, e algo dentro de mim disse que voce era especial. Naquele momento, comecou a historia mais linda da minha vida.',
    image: '/DavydTalisson2/NOS_1.jpg',
  },
  {
    id: 2,
    title: 'Nossos Primeiros Dias',
    subtitle: 'Descobertas e encantos',
    description:
      'Cada dia ao seu lado era uma descoberta. Seu jeito de sorrir, sua risada contagiante, seu abraco que sempre me acalmava. Eu fui aprendendo a te amar em cada detalhe.',
    image: '/DavydTalisson2/NOS_2.jpg',
  },
  {
    id: 3,
    title: 'Construindo Juntos',
    subtitle: 'Momentos inesqueciveis',
    description:
      'Construímos memorias em cada canto, em cada viagem, em cada tarde preguicosa. Cada momento com voce se tornou um pedacinho do ceu aqui na Terra.',
    image: '/DavydTalisson2/NOS_3.jpg',
  },
  {
    id: 4,
    title: 'Para Sempre',
    subtitle: 'Uma promessa de amor eterno',
    description:
      'Hoje, olho para voce e vejo meu futuro inteiro. Voce e meu porto seguro, minha razao de sorrir, meu verdadeiro amor. Prometo te amar para sempre.',
    image: '/DavydTalisson2/NOS_4.jpg',
  },
];

export function SobrePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="hero-section relative">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('DavydTalisson2/NOS_5.jpeg')`,
          }}
        />
        <div className="hero-overlay" />

        <Particles count={20} />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <p className="font-inter text-gold-400 text-xs tracking-widest uppercase mb-4 animate-fade-in">
            Nossa história
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6 animate-fade-in-up">
            Sobre Nós
          </h1>
          <p className="font-playfair italic text-xl md:text-2xl text-white/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Uma história de amor escrita a dois
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-inter text-neutral-600 leading-relaxed">
            Cada vez que olho para trás, vejo quantos momentos lindos construímos juntos.
            Esta é a história de nós dois, escrita com amor, cumplicidade e carinho.
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Next Section */}
      <NextSection />
    </div>
  );
}

interface ChapterType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

function ChapterCard({ chapter, index }: { chapter: ChapterType; index: number }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-8 md:gap-16 mb-20 last:mb-0 transition-all duration-800 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/30 rounded-2xl" />
        <img
          src={chapter.image}
          alt={chapter.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-elegant relative z-10"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
          <span className="font-inter text-6xl text-gold-500/20 font-light">
            {String(chapter.id).padStart(2, '0')}
          </span>
        </div>
        <h3 className="font-playfair text-3xl md:text-4xl text-neutral-800 mb-2">
          {chapter.title}
        </h3>
        <p className="font-playfair italic text-gold-600 text-lg mb-4">
          {chapter.subtitle}
        </p>
        <p className="font-inter text-neutral-600 leading-relaxed">
          {chapter.description}
        </p>
      </div>
    </div>
  );
}

function PhotoGallery() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const photos = [
    'DavydTalisson2/NOS_1.jpg',
    'DavydTalisson2/NOS_2.jpg',
    'DavydTalisson2/NOS_3.jpg',
    'DavydTalisson2/NOS_4.jpg',
    'DavydTalisson2/NOS_5.jpeg',
    'DavydTalisson2/NOS_6.jpg',
  ];

  return (
    <section className="py-24 px-6 bg-neutral-900 relative overflow-hidden">
      <Particles count={15} color="rgba(212, 175, 55, 0.3)" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="font-inter text-gold-400 text-xs tracking-widest uppercase mb-4">
            Momentos eternizados
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white">
            Nossas Fotos
          </h2>
        </div>

        <Carousel images={photos} alt="Nossa foto" imageHeight="h-72 md:h-96" />
      </div>
    </section>
  );
}

function NextSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-cream-100 to-cream-50">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <p className="font-inter text-gold-500 text-xs tracking-widest uppercase mb-4">
          A seguir
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl text-neutral-800 mb-6">
          Quem é Davyd?
        </h2>
        <p className="font-inter text-neutral-600 max-w-xl mx-auto mb-10">
          Descubra mais sobre a pessoa incrível que faz meu coração bater mais forte.
        </p>
        <Link to="/davyd" className="btn-elegant">
          Conhecer Davyd
        </Link>
      </div>
    </section>
  );
}
