import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Particles } from '../components/Particles';
import { Carousel } from '../components/Carousel';
import { useScrollReveal } from '../hooks/useScrollReveal';

const sections = [
   {
    id: 'davyd',
    title: 'Davyd',
    description:
      'Tem pessoas que carregam uma luz diferente, e você é uma delas. Tem um coração enorme, um sorriso que transmite paz e um jeito de cuidar de quem ama que encanta. É forte, dedicado, gentil e tem uma bondade que faz qualquer lugar ficar mais leve. Hoje é o seu dia, Davynho. Que Deus continue abençoando cada passo da sua vida e te permitindo continuar sendo exatamente essa pessoa tão especial. Feliz aniversário! 🤍✨',
    images: [
      '/DavydTalisson2/DAVYD_1.jpg',
      '/DavydTalisson2/DAVYD_2.jpeg',
      '/DavydTalisson2/DAVYD_3.jpeg',
      '/DavydTalisson2/DAVYD_4.jpg',
      '/DavydTalisson2/DAVYD_5.jpeg',
      '/DavydTalisson2/DAVYD_6.jpeg',
      '/DavydTalisson2/DAVYD_7.jpeg',
      '/DavydTalisson2/DAVYD_8.jpeg',
      '/DavydTalisson2/DAVYD_9.jpeg',
      '/DavydTalisson2/DAVYD_10.jpeg',
    ],
  }, 
  {
    id: 'familia',
    title: 'Familia',
    description:
      'Essa parte eu ainda estou descobrindo. Conheço poucas pessoas da sua família, mas todas me passaram uma sensação muito boa e demonstraram o quanto você é amado. A tia Vera é muito acolhedora e transmite um carinho enorme por você. A Jéssica, que conheci há pouco tempo, já conquistou minha admiração pela pequena parte da história dela que conheço. A Ellen eu nem preciso comentar: adoro ela em todos os aspectos. E sua avó, apesar de parecer firme, tenho a impressão de que é uma das grandes responsáveis por manter a família unida e forte. Aos poucos vou conhecendo mais pessoas, mas, pelo pouco que já vi, uma coisa é certa: você é muito amado por todos que têm o privilégio de fazer parte da sua vida.',
    images: [
      '/DavydTalisson2/FAMILIA_1.jpg',
      '/DavydTalisson2/FAMILIA_2.jpg',
      '/DavydTalisson2/FAMILIA_3.jpg',
      '/DavydTalisson2/FAMILIA_4.jpg',
      '/DavydTalisson2/FAMILIA_5.jpeg',
      '/DavydTalisson2/FAMILIA_6.jpeg',
    ],
  },
  {
    id: 'direito',
    title: 'Direito',
    description:
      'E pensar que, de algum jeito, eu te conquistei com uma petição Kkkkk. Até hoje eu acho isso muito engraçado.Mas uma coisa que eu realmente admiro é o jeito que você leva os estudos. Dá para ver o quanto você se dedica e faz de tudo para alcançar o que sonha. Você pensa no futuro, corre atrás dos seus objetivos e não desiste fácil. Ver isso em você acaba me motivando também, porque me faz querer dar o meu melhor. Espero que, lá na frente, a gente possa olhar para trás com orgulho de toda essa caminhada e ver que valeu a pena. Você sendo um advogado de excelência, eu um programador de excelência, e nós dois realizando os sonhos que hoje ainda estamos construindo.',
    images: [
      '/DavydTalisson2/DIREITO_1.jpg',
      '/DavydTalisson2/DIREITO_2.jpg',
    ],
  },
  {
    id: 'exercito',
    title: 'Exercito',
    description:
      'O Exército faz parte da sua história, e eu gosto muito de ouvir quando você conta sobre essa época. Você fala das noites de serviço, da rotina puxada e até do dia em que precisou raspar o cabelo, sempre com um carinho especial por tudo o que viveu. Acho incrível imaginar você passando por tudo isso. Tenho certeza de que essa experiência ajudou a formar a pessoa forte, disciplinada e determinada que você é hoje. É mais uma das muitas coisas que me fazem admirar você e ter orgulho da sua história.',
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
      'Essa também é uma parte da sua vida que ainda estou descobrindo. Até agora tive a oportunidade de conhecer de verdade apenas o Ailton Júlio, e foi o suficiente para perceber que você sabe escolher muito bem as pessoas que mantém por perto.Também já ouvi falar de algumas outras pessoas, como a Lara, que me passa a impressão de ser alguém muito adorável, e a maravilhosa Stela, que, além de ser surrealmente linda, parece ter uma presença marcante. Mesmo sem conhecer todos de perto, dá para perceber que você está cercado de pessoas especiais.Aos poucos espero conhecer melhor cada um deles e fazer parte das histórias, risadas e momentos que vocês compartilham. Afinal, os amigos que escolhemos também contam um pouco sobre quem somos, e os seus parecem refletir a pessoa incrível que você é.',
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
      'O Miguel merece um lugar especial aqui, porque dá para perceber o quanto ele é importante para você. É muito bonito ver o carinho, a paciência e o cuidado que você tem com ele. Sempre que vocês saem juntos ou quando você fala dele, dá para notar o quanto esse vínculo é verdadeiro. Ver a forma como você trata o Miguel me fez enxergar um lado seu ainda mais bonito. Foi aí que percebi o quanto você tem um coração enorme e o quanto é fácil se apaixonar por quem você é. Isso também me faz imaginar o futuro e acreditar que, quando esse momento chegar, você será um pai maravilhoso para os nossos filhos. Só de pensar nisso, meu coração fica cheio de esperança pelo que ainda vamos viver juntos.',
    images: [
      '/DavydTalisson2/PADRINHO_1.jpg',
      '/DavydTalisson2/PADRINHO_2.jpg',
    ],
  },
  {
    id: 'nosFinal',
    title: 'Nos para Sempre',
    description:
      'Essa foto representa um sonho. Um sonho que entrego todos os dias nas mãos de Deus, confiando que, se for da vontade dEle, um dia será a nossa realidade. Não é apenas sobre um casamento, mas sobre construir uma vida inteira ao seu lado, dividir conquistas, enfrentar desafios, criar uma família e envelhecer de mãos dadas. É sobre escolher você todos os dias, hoje e em todos os amanhãs. Se Deus permitir, quero que essa imagem deixe de ser apenas uma ideia e se torne uma lembrança do dia em que começamos oficialmente a nossa história para sempre. Porque, acima de tudo, o que eu mais desejo é viver uma vida inteira ao seu lado. Eu te amo, hoje, amanhã e por toda a minha vida.',
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
            backgroundImage: `url('/DavydTalisson2/planodefundo.jpg')`,
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
            O homem que faz meu coracao sorrir!!
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
          Davyd Talisson, o homem que ilumina minha vida a cada dia mais e mais e que faz meu coração transbordar de emoão toda vez que me olha.
        </p>

        <p className="font-inter text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Fiz esta pagina e uma celebracao de quem voce e, de tudo que voce conquistou,
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