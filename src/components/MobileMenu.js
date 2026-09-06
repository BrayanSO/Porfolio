import React from 'react';
import "../Styles/MobileMenu.css"
import ToggleButton from '../components/ToogleButton';

const MobileMenu = ({ goToPage, language, toggleLanguage, isMobileMenuVisible }) => {
    const handleClick = (section) => {
        goToPage(section);
        if (window.innerWidth <= 768) {
        let scrollOffset = 0;
        switch (section) {
            case 'home':
                scrollOffset = 0;
                break;
            case 'skills':
                scrollOffset = 835; // Ejemplo de desplazamiento diferente para 'skills'
                break;
            case 'Projects':
                scrollOffset = 1720; // Ejemplo de desplazamiento diferente para 'Projects'
                break;
            case 'contact':
                scrollOffset = 3870; // Ejemplo de desplazamiento diferente para 'contact'
                break;
            default:
                scrollOffset = 0;
        }
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
        <button onClick={() => handleClick('contact')}>
          {language === 'en' ? '✉️' : '✉️'} {/* Icono de contacto */}
        </button>
      </div>
    );
};

export default MobileMenu;
