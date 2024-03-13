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
        <p>{language === 'en' ? 'Fullstack Developer ' : 'Desarrollador Fullstack '}</p>
      </div>
      <div className="homepage-text4">
        {language === 'en' ? 
          <div>
            <p>A fullstack developer with the goal of advancing in my career and participating in inspiring projects. Here I showcase my work and my passion for web development.</p>
            <p>Let's shape digital solutions together and pave the way for the future.</p>
          </div>
          : 
          <div>
            <p>Un desarrollador fullstack con el objetivo de avanzar en mi carrera y participar en proyectos inspiradores. Aquí muestro mi trabajo y mi pasión por el desarrollo web.</p>
            <p>Demos forma juntos a las soluciones digitales y allanemos el camino hacia el futuro.</p>
          </div>
        }
      </div>
      
      <div>
        <button onClick={() => goToSection('contact')} className='contact'>  <FontAwesomeIcon icon={faEnvelope} className="icon" /> {language === 'es' ? 'Contact me' : 'Contáctame'}</button>
        <button onClick={() => goToSection('proyects')} className='Proyect'> <FontAwesomeIcon icon={faFolderOpen} className="icon" /> {language === 'es' ? 'My Project' : 'Mis Proyectos'}</button>
      </div>
    </div>
  );
};

export default Home;
