function FinalScreen() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 overflow-x-hidden relative">
      {/* Partículas */}
      <Particles count={50} color="rgba(212, 175, 55, 0.4)" />

      {/* Conteúdo */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-5 md:px-10 py-16 transition-all duration-1000 ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* FOREVER */}
        <h1
          className="font-playfair text-center text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6"
          style={{
            background:
              "linear-gradient(135deg,#D4AF37 0%,#F5DB72 50%,#D4AF37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 60px rgba(212,175,55,.3)",
          }}
        >
          FOREVER
        </h1>

        {/* Coração */}
        <Heart
          size={70}
          className="mx-auto text-red-500 animate-heart-beat mb-12"
          fill="currentColor"
        />

        {/* Carta */}
        <div className="max-w-4xl mx-auto">
          <div
            className="
              bg-[#f7edd5]
              border border-[#d6c5a1]
              rounded-3xl
              shadow-2xl
              p-8
              md:p-14
              w-full
            "
            style={{
              boxShadow: "0 25px 60px rgba(0,0,0,.35)",
            }}
          >
            {/* SUA CARTA COMEÇA AQUI */}
                        <p className="font-playfair text-3xl text-[#5a4632] mb-8">
              Meu amor,
            </p>

            {/* Cole aqui TODOS os seus parágrafos (<p>) exatamente como já estão */}

            <p className="font-playfair italic text-[#b8860b] text-2xl md:text-3xl text-center mt-12">
              Eu te amo, Davyd.
            </p>
          </div>
        </div>

        {/* Linha decorativa */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
          <div className="w-2 h-2 rounded-full bg-gold-500" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
        </div>

        {/* Data */}
        <p className="font-inter text-center text-white/40 text-sm mt-8 tracking-widest">
          2024 &middot; PARA SEMPRE
        </p>
      </div>

      {/* Corações flutuando */}
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