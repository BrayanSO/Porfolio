import React from 'react';
import '../Styles/MobileProjects.css';
import autos360 from '../Images/autos360.png';
import autos360Video from '../Images/autos360.mp4';
import proyecto2 from '../Images/proyecto2.png';
import forex from '../Images/forex.svg';
import icono2 from '../Images/icono2.png';
import ReactIcon from '../icons/ReactIcon.png';
import python_icon from '../icons/python_icon.png';
import javascript  from '../icons/javascript.png';
import sql_servericon from '../icons/sql_servericon.png';
import Wordpress from '../icons/wordpress.png'
import php from '../icons/php.png'


const MobileProjects = ({ language }) => {
  return (
    <div className='mobile-projects'>
      <div className="mobile-proyect">
        <h2>{language === 'en' ? 'Forex ML Validation Lab' : 'Laboratorio Forex ML'}</h2>
        <img src={forex} alt="Forex ML Validation Lab results" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? "Tested 30+ trading strategies against 347M real market ticks. I designed the validation method, directed an AI coding agent (Claude Code) to build it in Python and verified every result, catching 3 bugs that faked profits." : "Probé más de 30 estrategias de trading con 347 millones de ticks reales. Diseñé el método de validación, dirigí a un agente de IA (Claude Code) para construirlo en Python y verifiqué cada resultado, encontrando 3 errores que fingían ganancias."}</p>
          <div className="technologies">
          <img src={python_icon} alt="Python" title="Python" className='icono' />
          <img src={sql_servericon} alt="SQL" title="SQL" className='icono' />
          <img src="https://cdn.simpleicons.org/pandas/FFFFFF" alt="pandas" title="pandas" className='icono' />
          <img src="https://cdn.simpleicons.org/streamlit/FF4B4B" alt="Streamlit" title="Streamlit" className='icono' />
          </div>
        </div>
      </div>
      <a href="https://github.com/BrayanSO/Forex-ML-System/tree/validacion-estrategias" target="_blank" rel="noopener noreferrer" className="icono-link">
      <img src={icono2} alt="GitHub" className="iconogit" /> </a>

      <div className="mobile-proyect2">
        <h2>Autos360</h2>
        <video src={autos360Video} poster={autos360} autoPlay muted loop playsInline aria-label="Autos360 3D model of a car rotating" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? "Car dealers record a short video and get a real 3D model of the car to sell online (Gaussian Splatting), with catalog, listings and a multi-dealer dashboard on Cloudflare. Built by directing Claude Code; I tested every flow on desktop and mobile." : "Las agencias graban un video corto y obtienen un modelo 3D real del auto para venderlo en línea (Gaussian Splatting), con catálogo, anuncios y panel para varias agencias en Cloudflare. Construida dirigiendo a Claude Code; probé cada flujo en escritorio y móvil."}</p>
          <div className="technologies">
          <img src={ReactIcon} alt="React" title="React" className='icono' />
          <img src={javascript} alt="JavaScript" title="JavaScript" className='icono' />
          <img src="https://cdn.simpleicons.org/threedotjs/FFFFFF" alt="three.js" title="three.js" className='icono' />
          <img src={python_icon} alt="Python" title="Python" className='icono' />
          <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" title="Cloudflare" className='icono' />
          <img src="https://cdn.simpleicons.org/anthropic/FFFFFF" alt="Claude Code" title="Claude Code" className='icono' />
          </div>
        </div>
      </div>
      <a href="https://autos360.autos360.workers.dev/autos360/#auto/e2ae0dc1" target="_blank" rel="noopener noreferrer" className="demo-link">
      {language === 'en' ? 'Live demo ↗' : 'Ver demo ↗'}</a>


      <div className="mobile-proyect2">
        <h2>NewCodecr</h2>
        <img src={proyecto2} alt="NewCodecr home page" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? "Freelance WordPress studio: client sites with WordPress and PHP (forms, booking, blogs), each tested before launch: functional, responsive and acceptance testing. (Site no longer online.)" : "Estudio freelance de WordPress: sitios para clientes con WordPress y PHP (formularios, reservas, blogs), cada uno probado antes de publicarse: pruebas funcionales, responsive y de aceptación. (El sitio ya no está en línea.)"}</p>
          <div className="technologies">
          <img src={Wordpress} alt="WordPress" title="WordPress" className='icono' />
          <img src={php} alt="PHP" title="PHP" className='icono' />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default MobileProjects;