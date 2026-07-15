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
      'tudo começou de um jeito bem aleatório. Eu estava mexendo no Instagram quando apareceu um lindo homem de olhos verdes. Na mesma hora pedi para seguir. Só que ele demorou dois dias para aceitar, e eu já tava pensando que nem ia rolar. Quando ele aceitou, fui fazer o que qualquer pessoa curiosa faria: stalkeei todos os destaques. Queria saber mais sobre ele. E, sinceramente... foi ali que começou. A cada story eu ia me encantando mais. Na minha cabeça, ele parecia simplesmente perfeito. Mesmo assim, eu não tinha muita esperança de que algum dia a gente fosse conversar. Então fiquei só esperando uma oportunidade aparecer. Passaram uns dez dias, até que ele me colocou nos Melhores Amigos. Pouco depois, postou uma petição nos stories. Na hora eu pensei: *É essa a minha chance.* Respondi o story sem pensar duas vezes e puxei assunto. E foi assim, de um jeito tão simples, que começou a nossa história. Quem diria que uma resposta a um story mudaria tanta coisa na minha vida?',
    image: '/DavydTalisson2/NOS_1.jpg',
  },
  {
    id: 2,
    title: 'Nossos Primeiro encontro',
    subtitle: 'pingo do meio dia',
    description:
      'A partir daquele momento, meu coração já estava completamente acelerado. A gente começou a conversar todos os dias, toda hora, e eu só queria conhecer cada vez mais sobre você. Quanto mais eu descobria, mais eu tinha vontade de continuar ali, conversando por horas.Depois de um tempo, descobri que você morava em Currais Novos e que tinha família em Mossoró, justamente a cidade onde minha irmã morava e para onde eu iria me mudar futuramente. Parecia até uma daquelas coincidências que a vida faz de propósito. Os meses foram passando, mas a intensidade da nossa conversa continuava a mesma. O mais engraçado é que nunca faltava assunto. A gente falava de tudo, ria de tudo e, sem perceber, foi criando uma conexão que eu nunca tinha sentido antes. Até que chegou o grande dia. Eu finalmente vim morar em Mossoró e a gente marcou de se encontrar no Pingo da Mei Dia. Passei o dia inteiro ansioso, contando as horas. Mas, quando te vi, toda a ansiedade desapareceu. Era como se eu já te conhecesse há anos. Não teve vergonha, não teve silêncio estranho, não teve aquele clima de "primeiro encontro". Parecia que a gente só estava continuando uma conversa que já vinha acontecendo há muito tempo. Naquele momento eu tive certeza de que a conexão que existia entre nós era tão real quanto eu imaginava. E isso só fez eu gostar ainda mais de você.',
    image: '/DavydTalisson2/NOS_2.jpg',
  },
  {
    id: 3,
    title: 'Primeira festa',
    subtitle: 'primeira vez',
    description:
      'Depois do nosso primeiro encontro, você voltou para Currais Novos, mas fez uma promessa: na semana seguinte estaria de volta. E, como sempre, você cumpriu. Marcamos de ir para a festa juntos, e eu já estava morrendo de saudade. Queria te ver de novo de qualquer jeito. Só que apareceu um problema: minha irmã não iria para a festa e, sem ela, eu também não teria como voltar para casa. Foi aí que surgiu a ideia de dormir na casa da sua prima. Sinceramente, eu achava que minha irmã nunca deixaria. Mas, para a minha surpresa, ela deixou. quele dia, você foi me buscar na faculdade depois que minhas aulas terminaram. Fomos para a casa da sua prima, nos arrumamos para a festa e seguimos para viver mais uma noite que ficou marcada na minha memória. Cantamos, rimos, aproveitamos cada segundo e, no meio de toda aquela multidão, parecia que só existíamos nós dois. Quando voltamos para casa, deitamos para descansar e, naquela noite, eu escolhi me entregar a você por inteiro. Não foi apenas sobre um momento, foi sobre confiança, carinho e a certeza de que meu coração já tinha encontrado o lugar onde queria estar.',
    image: '/DavydTalisson2/NOS_3.jpg',
  },
  {
    id: 4,
    title: 'aqui estamos',
    subtitle: 'futuro',
    description:
      'E o resto da nossa história... Depois de tudo isso, olha onde a gente chegou. Continuamos aqui, firmes e fortes, e, se tem uma coisa que mudou desde aquela primeira conversa no Instagram, foi a intensidade do que eu sinto por você. A cada dia que passa, eu te amo mais. Nem a saudade consegue diminuir isso; na verdade, ela só faz aumentar a vontade de te ver, de te abraçar e de viver mais momentos ao seu lado. Hoje, quando penso no futuro, é você quem eu imagino comigo. Penso nos nossos empregos, na nossa casa, no nosso casamento, nos nossos filhos, nas nossas viagens e em todas as conquistas que ainda vamos viver. Não porque tudo será perfeito, mas porque sei que, com você, qualquer caminho vale a pena. Obrigado por ter respondido uma simples mensagem e, sem saber, ter mudado completamente a minha vida. Se hoje eu pudesse fazer um único pedido a Deus, seria que essa história nunca tivesse um fim. Que ela seja para sempre.',
    image: '/DavydTalisson2/NOS_5.jpg',
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
