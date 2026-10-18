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
        <p>{language === 'en' ? 'QA Engineer & Technical Writer' : 'Ingeniero de QA y Redactor Técnico'}</p>
      </div>
      <div className="homepage-text4">
        {language === 'en' ? 
          <div>
            <p>QA Engineer with hands-on experience in manual and automated testing (Cypress, Postman), backed by a full-stack development foundation in React and SQL.</p><p> I also write technical content: case studies, explainers and step-by-step guides, including a research project I built by directing an AI coding agent and documented end to end.</p>
            <p>Let's build reliable, well-tested digital solutions together.</p>
          </div>
          : 
          <div>
            <p>Ingeniero de QA con experiencia práctica en pruebas manuales y automatizadas (Cypress, Postman), respaldada por una base en desarrollo full-stack con React y SQL.</p><p>También escribo contenido técnico: casos de estudio, artículos explicativos y guías paso a paso, incluido un proyecto de investigación que construí dirigiendo a un agente de IA y documenté de principio a fin.</p>
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
