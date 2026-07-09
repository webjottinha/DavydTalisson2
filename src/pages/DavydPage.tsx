import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Particles } from '../components/Particles';
import { Carousel } from '../components/Carousel';
import { useScrollReveal } from '../hooks/useScrollReveal';

const sections = [
  {
    id: 'nos',
    title: 'Nos',
    description:
      'Nos dois e onde encontro minha paz. Cada momento ao seu lado e uma bencao, cada sorriso seu ilumina meu dia. Voce e eu somos a melhor equipe do mundo.',
    images: [
      '/DavydTalisson2/NOS_1.jpg',
      '/DavydTalisson2/NOS_2.jpg',
      '/DavydTalisson2/NOS_3.jpg',
      '/DavydTalisson2/NOS_4.jpg',
      '/DavydTalisson2/NOS_5.jpeg',
      '/DavydTalisson2/NOS_6.jpg',
    ],
  },
  {
    id: 'familia',
    title: 'Familia',
    description:
      'Sua familia te ama profundamente. O carinho e o respeito que voce tem por eles refletem o homem maravilhoso que voce e.',
    images: [
      '/DavydTalisson2/FAMILIA_1.jpg',
      '/DavydTalisson2/FAMILIA_2.jpg',
      '/DavydTalisson2/FAMILIA_3.jpg',
      '/DavydTalisson2/FAMILIA_4.jpg',
    ],
  },
  {
    id: 'direito',
    title: 'Direito',
    description:
      'Sua dedicacao aos estudos e sua paixao pela justica mostram o profissional comprometido que voce esta se tornando. Tenho orgulho de cada conquista sua.',
    images: [
      '/DavydTalisson2/DIREITO_1.jpg',
      '/DavydTalisson2/DIREITO_2.jpg',
    ],
  },
  {
    id: 'exercito',
    title: 'Exercito',
    description:
      'Sua forca, disciplina e honra sao inspiradoras. Voce carrega consigo valores que fazem de voce um verdadeiro soldado, dentro e fora do quartel.',
    images: [
      '/DavydTalisson2/EXERCITO_1.jpeg',
      '/DavydTalisson2/EXERCITO_2.jpeg',
      '/DavydTalisson2/EXERCITO_3.jpeg',
    ],
  },
  {
    id: 'amigos',
    title: 'Amigos',
    description:
      'Voce sabe escolher bem as pessoas ao seu redor. Seus amigos sao prova da luz que voce emana e da lealdade que voce inspira.',
    images: [
      '/DavydTalisson2/AMIGOS_1.jpg',
      '/DavydTalisson2/AMIGOS_2.jpg',
      '/DavydTalisson2/AMIGOS_3.jpg',
      '/DavydTalisson2/AMIGOS_4.jpg',
      '/DavydTalisson2/AMIGOS_5.jpg',
      '/DavydTalisson2/AMIGOS_6.jpg',
    ],
  },
  {
    id: 'padrinho',
    title: 'Padrinho',
    description:
      'Ser padrinho e uma honra que voce carrega com orgulho. Voce guia e protege aqueles que ama com todo seu carinho.',
    images: [
      '/DavydTalisson2/PADRINHO_1.jpg',
      '/DavydTalisson2/PADRINHO_2.jpg',
    ],
  },
  {
    id: 'nosFinal',
    title: 'Nos para Sempre',
    description:
      'Essa historia nao tem fim. Cada dia e uma nova pagina, cada sorriso uma nova letra. Voce e meu presente de vida.',
    images: [
      '/DavydTalisson2/NOS_FINAL.jpg',
    ],
  },
];

export function DavydPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      <section className="hero-section relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/DavydTalisson2/DAVYD_4.jpg')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        <Particles count={25} />

        <div className="relative z-10 text-center px-6">
          <div className="mb-8 animate-fade-in-down">
            <div className="relative inline-block">
              <img
                src="/DavydTalisson2/DAVYD_4.jpg"
                alt="Davyd"
                className="circular-photo w-40 h-40 md:w-52 md:h-52"
              />              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-gold">
                <span className="text-2xl">🎂</span>
              </div>
            </div>
          </div>

          <p className="font-inter text-gold-400 text-xs tracking-widest uppercase mb-4 animate-fade-in">
            Feliz Aniversario
          </p>

          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-4 animate-fade-in-up">
            Davyd Talisson
          </h1>

          <p
            className="font-playfair italic text-xl md:text-2xl text-white/80 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            O homem que faz meu coracao sorrir
          </p>
        </div>
      </section>

      <IntroSection />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {sections.map((section, index) => (
            <SectionCard key={section.id} section={section} index={index} />
          ))}
        </div>
      </section>

      <NextSection />
    </div>
  );
}

function IntroSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <p className="font-inter text-gold-500 text-xs tracking-widest uppercase mb-4">
          Quem e voce
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl text-neutral-800 mb-8">
          O Homem dos Meus Sonhos
        </h2>

        <p className="font-inter text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-6">
          Voce e muitas coisas ao mesmo tempo: forte e carinhoso, determinado e gentil,
          serio e brincalhao. Voce e a pessoa mais completa que ja conheci.
        </p>

        <p className="font-inter text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Esta pagina e uma celebracao de quem voce e, de tudo que voce conquistou,
          e de tudo que voce ainda vai conquistar. Eu estou aqui, torcendo por voce,
          caminhando ao seu lado.
        </p>
      </div>
    </section>
  );
}

interface SectionType {
  id: string;
  title: string;
  description: string;
  images: string[];
}

function SectionCard({ section, index }: { section: SectionType; index: number }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-center gap-10 transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="w-full lg:w-2/5 text-center lg:text-left">
        <div className="section-card">
          <div className="w-12 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mb-6 mx-auto lg:mx-0 rounded-full" />

          <h3 className="font-playfair text-2xl md:text-3xl text-neutral-800 mb-4">
            {section.title}
          </h3>

          <p className="font-inter text-neutral-600 leading-relaxed">
            {section.description}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/5">
        <Carousel
          images={section.images}
          alt={`Foto de ${section.title}`}
          imageHeight="h-72 md:h-96"
        />
      </div>
    </div>
  );
}

function NextSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 px-6 bg-neutral-900 relative overflow-hidden">
      <Particles count={20} color="rgba(212, 175, 55, 0.3)" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <p className="font-inter text-gold-400 text-xs tracking-widest uppercase mb-4">
          E agora...
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
          Uma Surpresa Espera Por Voce
        </h2>

        <p className="font-inter text-white/70 max-w-xl mx-auto mb-10">
          Preparei algo especial para este momento. Algo que guarda
          todo o amor que sinto por voce.
        </p>

        <Link to="/surpresa" className="btn-elegant">
          Abrir Surpresa
        </Link>
      </div>
    </section>
  );
}