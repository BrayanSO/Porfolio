// MobileMenu.js
import React from 'react';
import "../Styles/MobileMenu.css"
import ToggleButton from '../components/ToogleButton';

const MobileMenu = ({ goToPage, language, toggleLanguage, isMobileMenuVisible }) => {
    return (
      <div className={isMobileMenuVisible ? "mobile-menu mobile-menu-visible" : "mobile-menu"}>
        {/* Agrega el ToggleButton al menú móvil */}
        <ToggleButton label={language === 'en' ? 'Esp' : 'Eng'} onChange={toggleLanguage} />
        <button onClick={() => goToPage('home')}>
          {language === 'en' ? '🏠' : '🏠'} {/* Icono de inicio */}
        </button>
        <button onClick={() => goToPage('skills')}>
          {language === 'en' ? '🚀' : '🚀'} {/* Icono de habilidades */}
        </button>
        <button onClick={() => goToPage('proyects')}>
          {language === 'en' ? '💼' : '💼'} {/* Icono de proyectos */}
        </button>
        <button onClick={() => goToPage('contact')}>
          {language === 'en' ? '✉️' : '✉️'} {/* Icono de contacto */}
        </button>
      </div>
    );
};

export default MobileMenu;
