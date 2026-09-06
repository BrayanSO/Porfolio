import React from 'react';
import '../Styles/MobileProjects.css';
import proyecto1 from '../Images/proyecto1.png'; 
import proyecto2 from '../Images/proyecto2.png';
import icono2 from '../Images/icono2.png';
import icono from '../Images/icono.png';
import ReactIcon from '../icons/ReactIcon.png';
import python_icon from '../icons/python_icon.png';
import javascript  from '../icons/javascript.png';
import sql_servericon from '../icons/sql_servericon.png';
import css from '../icons/css.png';
import api from '../icons/api.png';
import Wordpress from '../icons/wordpress.png'
import php from '../icons/php.png'


const MobileProjects = ({ language }) => {
  return (
    <div className='mobile-projects'>
      <div className="mobile-proyect">
        <h2>{language === 'en' ? 'Carhalla' : 'Carhalla'}</h2>
        <img src={proyecto1} alt="Imagen 1" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? 'Car sales platform built with React, Python, and Flux — advanced filters, premium listings, and live chat. I also tested it: manual test cases for login and filtering, plus API testing with Postman.' : 'Plataforma de venta de autos con React, Python y Flux — filtros avanzados, publicaciones premium y chat en vivo. También la probé: casos de prueba manuales para login y filtros, más pruebas de API con Postman.'}</p>
          <div className="technologies">
          <img src={ReactIcon} alt="React" title="React" className='icono' />
          <img src={python_icon} alt="React" title="React" className='icono' />
          <img src={javascript} alt="React" title="React" className='icono' />
          <img src={sql_servericon} alt="React" title="React" className='icono' />
          <img src={css} alt="React" title="React" className='icono' />
          <img src={api} alt="React" title="React" className='icono' />
          <img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" title="Postman" className='icono' />
          </div>
        </div>
      </div>
      <a href="https://github.com/BrayanSO/Carhalla" target="_blank" rel="noopener noreferrer" className="icono-link">
      <img src={icono2} alt="Icono Personalizado" className="iconogit" /> </a>


      <div className="mobile-proyect2">
        <h2>{language === 'en' ? 'NewCodecr' : 'NewCodecr'}</h2>
        <img src={proyecto2} alt="Imagen 2" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? 'Freelance website built with WordPress and PHP — from simple sites to complex platforms with SEO, scheduling, and blogs. I also tested it thoroughly: functional, responsive, and acceptance testing before launch.' : 'Sitio freelance con WordPress y PHP — desde sitios simples hasta plataformas complejas con SEO, agendamiento y blogs. También lo probé a fondo: pruebas funcionales, de responsive y de aceptación antes del lanzamiento.'}</p>
          <div className="technologies">
          <img src={Wordpress} alt="React" title="React" className='icono' />
          <img src={php} alt="React" title="React" className='icono' />
          </div>
         
        </div>
      </div>
      <a href="https://www.NewCodecr.com" target="_blank" rel="noopener noreferrer">
      <img src={icono} alt="Icono Personalizado" className="icono2" />
      </a>
    </div>
  );
};

export default MobileProjects;