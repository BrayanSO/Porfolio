import React from 'react';
import '../Styles/Home.css'; 
import pic from '../Images/pic.jpeg';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import RotateImage from './RotateImage';


const Home = ({ language }) => {
  const goToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
         <RotateImage imageUrl={pic} /> 
      <div className="homepage-text2">
        <p>{language === 'en' ? "Hi, I'm Brayan Solera" : '¡Hola! Soy Brayan Solera'}</p>
      </div>
      <div className="homepage-text3">
        <p>{language === 'en' ? 'QA Engineer & Web Developer' : 'Ingeniero de QA y Desarrollador Web'}</p>
      </div>
      <div className="homepage-text4">
        {language === 'en' ? 
          <div>
            <p>QA Engineer with hands-on experience in manual and automated testing (Cypress, Postman) who also builds and ships web products: a booking SaaS, a 3D car platform and my own web studio, built by directing AI coding agents and verified the way a tester would.</p>
            <p>Let's build reliable, well-tested digital solutions together.</p>
          </div>
          : 
          <div>
            <p>Ingeniero de QA con experiencia práctica en pruebas manuales y automatizadas (Cypress, Postman) que además construye y publica productos web: un SaaS de reservas, una plataforma de autos en 3D y mi propio estudio web, construidos dirigiendo agentes de IA y verificados como lo haría un tester.</p>
            <p>Construyamos juntos soluciones digitales confiables y bien probadas.</p>
          </div>
        }
      </div>
      
      <div>
        <button onClick={() => goToSection('contact')} className='contact'>  <FontAwesomeIcon icon={faEnvelope} className="icon" /> {language === 'en' ? 'Contact me' : 'Contáctame'}</button>
        <button onClick={() => goToSection('Projects')} className='Proyect'> <FontAwesomeIcon icon={faFolderOpen} className="icon" /> {language === 'en' ? 'My Projects' : 'Mis Proyectos'}</button>
      </div>
    </div>
  );
};

export default Home;
