import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface EnvelopeProps {
  onOpenComplete: () => void;
  letterContent?: React.ReactNode;
}

export function Envelope({ onOpenComplete, letterContent }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isOpen) {
      timer = setTimeout(() => {
        setShowLetter(true);
      }, 1000);

      const completeTimer = setTimeout(() => {
        onOpenComplete();
      }, 2500);

      return () => {
        clearTimeout(timer);
        clearTimeout(completeTimer);
      };
    }
  }, [isOpen, onOpenComplete]);

  return (
    <div className="envelope-container">
      <div
        className={`envelope ${isOpen ? 'open' : ''}`}
        onClick={handleEnvelopeClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleEnvelopeClick()}
        aria-label="Abrir envelope"
      >
        {/* Back of envelope */}
        <div className="envelope-back" />

        {/* Letter inside */}
        <div
          className={`letter ${showLetter ? 'visible' : ''}`}
          style={{
            opacity: showLetter ? 1 : 0,
            transform: showLetter
              ? 'translate(-50%, -150%)'
              : 'translate(-50%, -50%)',
            transition: 'all 1s ease-out',
          }}
        >
          {letterContent || (
            <div className="text-center">
              <p className="font-playfair text-gold-600 text-lg">
                Para Davyd
              </p>
              <p className="font-poppins text-neutral-600 text-sm mt-2">
                Com todo meu amor...
              </p>
            </div>
          )}
        </div>

        {/* Front flap */}
        <div className="envelope-front">
          {!isOpen && (
            <p className="font-playfair text-gold-600 text-xl tracking-widest">
              Clique
            </p>
          )}
        </div>

        {/* Seal */}
        <div className="envelope-seal">
          <Heart size={24} className="text-white" fill="white" />
        </div>
      </div>

      {/* Hint text */}
      {!isOpen && (
        <p className="text-center font-inter text-neutral-400 text-sm mt-6 animate-pulse">
          Toque no envelope para abrir
        </p>
      )}
    </div>
  );
}
