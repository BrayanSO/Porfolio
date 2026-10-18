import React from 'react';
import "../Styles/MobileMenu.css"
import ToggleButton from '../components/ToogleButton';

const MobileMenu = ({ goToPage, language, toggleLanguage, isMobileMenuVisible }) => {
    const handleClick = (section) => {
        goToPage(section);
        if (window.innerWidth <= 768) {
        // Posición real de la sección (funciona aunque cambie la altura del contenido)
        const el = document.getElementById(section);
        const scrollOffset = section === 'home' || !el ? 0 : el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: scrollOffset, // Desplazamiento personalizado para cada sección
            behavior: 'smooth' // Desplazamiento suave
        });
      }
    };

    return (
      <div className={isMobileMenuVisible ? "mobile-menu mobile-menu-visible" : "mobile-menu"}>
        {/* Agrega el ToggleButton al menú móvil */}
        <ToggleButton label={language === 'en' ? 'Esp' : 'Eng'} onChange={toggleLanguage} />
        <button onClick={() => handleClick('home')}>
          {language === 'en' ? '🏠' : '🏠'} {/* Icono de inicio */}
        </button>
        <button onClick={() => handleClick('skills')}>
          {language === 'en' ? '🚀' : '🚀'} {/* Icono de habilidades */}
        </button>
        <button onClick={() => handleClick('Projects')}>
          {language === 'en' ? '💼' : '💼'} {/* Icono de proyectos */}
        </button>
        <button onClick={() => handleClick('writing')}>
          ✍️ {/* Icono de redacción técnica */}
        </button>
        <button onClick={() => handleClick('contact')}>
          {language === 'en' ? '✉️' : '✉️'} {/* Icono de contacto */}
        </button>
      </div>
    );
};

export default MobileMenu;
