import { useState, useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react';

interface MusicPlayerProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export function MusicPlayer({ src, autoPlay = true, loop = true }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = loop;
    audioRef.current.volume = 0.5;

    const audio = audioRef.current;

    const handleCanPlayThrough = () => {
      if (autoPlay && hasInteracted) {
        audio.play().catch(() => {
          setIsPlaying(false);
        });
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => !loop && setIsPlaying(false);

    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, [src, loop, autoPlay, hasInteracted]);

  // Handle first user interaction for autoplay
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
    };

    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // Play when interaction happens
  useEffect(() => {
    if (hasInteracted && audioRef.current && autoPlay && !isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [hasInteracted, autoPlay, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="music-player">
      <button
        onClick={togglePlay}
        className={`music-btn ${isPlaying ? 'playing' : ''}`}
        aria-label={isPlaying ? 'Pausar musica' : 'Tocar musica'}
      >
        {isPlaying ? (
          <Music2 size={24} className="text-white" />
        ) : (
          <Music size={24} className="text-white" />
        )}
      </button>

      {/* Visual indicator */}
      {isPlaying && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
      )}
    </div>
  );
}
