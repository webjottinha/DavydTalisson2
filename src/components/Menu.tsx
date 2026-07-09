import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { path: '/', label: 'Home', icon: '✨' },
  { path: '/sobre', label: 'Sobre Nos', icon: '💕' },
  { path: '/davyd', label: 'Sobre Davyd', icon: '🎂' },
  { path: '/surpresa', label: 'Surpresa', icon: '🎁' },
];

export function Menu({ isOpen, onClose }: MenuProps) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleItemClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`menu-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gold-100 transition-colors"
          aria-label="Fechar menu"
        >
          <X size={24} className="text-neutral-700" />
        </button>

        {/* Logo/Title */}
        <div className="mb-12">
          <p className="font-playfair text-gold-500 text-sm tracking-widest uppercase">
            Feliz Aniversario
          </p>
          <h2 className="font-playfair text-3xl text-neutral-800 mt-2">
            Davyd
          </h2>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleItemClick}
                className={`menu-item flex items-center gap-4 ${
                  isActive ? 'text-gold-600 pl-4' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-playfair text-xl">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-8 left-10 right-10">
          <p className="font-inter text-xs text-neutral-400 tracking-wider">
            Com amor, sempre.
          </p>
        </div>
      </div>
    </>
  );
}

export function MenuToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`menu-toggle ${isOpen ? 'open' : ''}`}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
