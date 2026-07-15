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
      <div className="fixed inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 flex flex-col items-center justify-center overflow-hidden">      {/* Particles */}
      <Particles count={50} color="rgba(212, 175, 55, 0.4)" />

      {/* Content */}
     <div
  className={`relative z-10 max-w-5xl mx-auto py-20 px-6 transition-all duration-1000 ${
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
              <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
<div
  className="
      w-full
      bg-[#f8f1de]
      rounded-2xl
      shadow-2xl
      border border-[#d8c7a1]
      p-6 md:p-12
      relative
"
>
S
        {/* Message */}
        <p className="font-playfair text-3xl text-[#5a4632] mb-8">

Meu amor,    
    </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
          Às vezes eu paro para pensar em como Deus escreve histórias que a gente nunca seria capaz de imaginar. Existem pessoas que entram na nossa vida para somar, para ensinar alguma coisa, para deixar boas lembranças e seguir o próprio caminho. Mas você nunca foi só mais uma pessoa.
        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
Você não entrou na minha vida para somar. Você entrou para ser a minha vida        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
          Eu sei que essa frase parece grande demais, mas ela ainda é pequena perto do que eu sinto por você. Desde que você chegou, tudo ganhou um significado diferente. Os dias ficaram mais leves, os sorrisos mais sinceros e até os momentos difíceis deixaram de parecer impossíveis. Você se tornou o meu lugar favorito, a minha paz em meio ao caos e o motivo pelo qual hoje eu consigo acreditar tanto no amanhã.
        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
          Ter você em meus braços é uma das melhores sensações que eu já vivi. Ouvir a sua voz, sentir o seu carinho, fazer carinho em você, olhar nos seus olhos e simplesmente estar ao seu lado faz meu coração sentir uma paz que eu nunca conheci. Você despertou em mim sentimentos que eu nem sabia que existiam. Um amor tão puro, tão verdadeiro e tão intenso que me curou de dores que eu já tinha aprendido a esconder.
        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
         Você é muito mais do que um namorado. Você é a prova de que Deus nunca deixou de cuidar de mim. Quando eu já não conseguia enxergar esperança, Ele colocou você no meu caminho. Quando eu já não tinha tanta vontade de acreditar no futuro, Ele fez você se tornar a raiz de tudo aquilo que hoje eu sonho em construir. Você devolveu vida aos meus sonhos e fez florescer em mim uma felicidade que eu achava impossível viver.
        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
Talvez você nunca tenha noção do quanto mudou a minha história. Você chegou sem fazer promessas, mas cumpriu coisas que nem eu mesma imaginava precisar. Você me fez entender que amar não é apenas dizer "eu te amo". Amar é cuidar, respeitar, escolher a mesma pessoa todos os dias e encontrar paz simplesmente por saber que ela existe.        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
Mesmo com a distância, eu sinto você perto de mim. É estranho explicar, mas é como se uma parte do meu coração estivesse sempre ao seu lado. Em tudo o que acontece de bom, penso em você primeiro. Em todos os planos que faço, você já está incluído. Quando imagino o meu futuro, não consigo enxergar um caminho onde você não esteja segurando a minha mão.        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
         Eu sonho com a nossa casa, com as nossas conquistas, com as nossas viagens, com as nossas risadas espalhadas pelos cômodos e até com os desafios que vamos enfrentar juntos, porque sei que, ao seu lado, qualquer dificuldade fica menor. Eu sonho em construir uma família com você, envelhecer ao seu lado e continuar escolhendo você todos os dias, exatamente como escolho hoje.
        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
Obrigada por existir. Obrigada por me amar de um jeito tão bonito. Obrigada por cuidar de mim, por me fazer sorrir, por ser meu porto seguro e por me mostrar, todos os dias, que o amor pode ser leve, verdadeiro e capaz de curar.        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
Eu peço a Deus que continue abençoando a nossa história, fortalecendo o nosso amor e preparando cada passo do futuro que tanto sonhamos. Que nunca nos falte fé, diálogo, respeito e carinho. E que, independentemente do tempo, da distância ou das dificuldades, a gente nunca deixe de escolher um ao outro.        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
         Eu amo você de um jeito que nenhuma carta conseguiria explicar por completo. Mas, se existe uma certeza que eu tenho nesta vida, é que, entre todas as pessoas que poderiam ter cruzado o meu caminho, Deus escolheu justamente você para caminhar ao meu lado.
        </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
porque você não entrou na minha vida para somar. Você entrou para ser a minha vida.  Com todo o meu amor,
     </p>
        <p className="font-inter text-[#4b3b2a] text-base md:text-lg leading-9 mb-6 text-justify">
do seu amor.
        </p>
        <p className="font-playfair italic text-gold-400 text-xl md:text-2xl">
          Eu te amo, Davyd.
        </p>
        </div>
                </div>


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
