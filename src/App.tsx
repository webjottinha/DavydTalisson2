import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { Menu, MenuToggle } from './components/Menu';
import { MusicPlayer } from './components/MusicPlayer';
import { HomePage } from './pages/HomePage';
import { SobrePage } from './pages/SobrePage';
import { DavydPage } from './pages/DavydPage';
import { SurpresaPage } from './pages/SurpresaPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} duration={3500} />
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          showSplash ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <AppContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </BrowserRouter>
  );
}

interface AppContentProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

function AppContent({ menuOpen, setMenuOpen }: AppContentProps) {
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname, setMenuOpen]);

  // Get music source based on current path
  const getMusicForPage = () => {
    // These are placeholder paths - replace with actual audio files
    switch (location.pathname) {
      case '/':
        return '/home.mp3';
      case '/sobre':
        return '/sobre.mp3';
      case '/davyd':
        return '/nos.mp3';
      case '/surpresa':
        return '/surpresa.mp3';
      default:
        return '/home.mp3';
    }
  };

  // Determine if we should show menu toggle (not on splash)
  const showMenuToggle = location.pathname !== '/';

  // Determine if we should show music player
  const showMusicPlayer = location.pathname !== '/surpresa';

  return (
    <>
      {/* Menu Toggle - only show on pages other than home initially */}
      {showMenuToggle && (
        <MenuToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      )}

      {/* Menu Sidebar */}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Music Player - shown on all pages except surpresa */}
      {showMusicPlayer && <MusicPlayer src={getMusicForPage()} />}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/davyd" element={<DavydPage />} />
        <Route path="/surpresa" element={<SurpresaPage />} />
      </Routes>
    </>
  );
}

export default App;
