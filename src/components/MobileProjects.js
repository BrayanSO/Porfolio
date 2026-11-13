import React from 'react';
import '../Styles/MobileProjects.css';
import Autos360Media from './Autos360Media.js';
import citas from '../Images/citas.png';
import newcode from '../Images/newcode.png';
import forex from '../Images/forex.svg';
import ReactIcon from '../icons/ReactIcon.png';
import python_icon from '../icons/python_icon.png';
import javascript  from '../icons/javascript.png';
import sql_servericon from '../icons/sql_servericon.png';


const MobileProjects = ({ language }) => {
  return (
    <div className='mobile-projects'>
      <div className="mobile-proyect mobile-card">
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
      <a href="https://github.com/BrayanSO/Porfolio/blob/main/writing/01-case-study-trading-strategies.md" target="_blank" rel="noopener noreferrer" className="demo-link">
      {language === 'en' ? 'Case study ↗' : 'Caso de estudio ↗'}</a>
      </div>

      <div className="mobile-proyect2 mobile-card">
        <h2>Autos360</h2>
        <Autos360Media language={language} className='mobile-img' />
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
      <a href="https://autos360.autos360.workers.dev/autos360/#auto/ca232863" target="_blank" rel="noopener noreferrer" className="demo-link">
      {language === 'en' ? 'Live demo ↗' : 'Ver demo ↗'}</a>
      </div>


      <div className="mobile-proyect2 mobile-card">
        <h2>Citas</h2>
        <img src={citas} alt="Citas booking widget inside the Sonríe dental demo" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? "Booking SaaS for small businesses: Svelte owner panel, embeddable widget and a Supabase backend with row-level security and 32 pgTAP tests. Live in the dental demo." : "SaaS de reservas para negocios pequeños: panel en Svelte, widget que se inserta en cualquier página y backend en Supabase con seguridad por filas y 32 pruebas pgTAP. En vivo en la demo dental."}</p>
          <div className="technologies">
          <img src="https://cdn.simpleicons.org/svelte/FF3E00" alt="Svelte" title="Svelte" className='icono' />
          <img src="https://cdn.simpleicons.org/supabase/3FCF8E" alt="Supabase" title="Supabase" className='icono' />
          <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" title="PostgreSQL" className='icono' />
          <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" className='icono' />
          <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" title="Cloudflare" className='icono' />
          <img src="https://cdn.simpleicons.org/anthropic/FFFFFF" alt="Claude Code" title="Claude Code" className='icono' />
          </div>
        </div>
      <a href="https://dental.newcodecr.com/#agenda" target="_blank" rel="noopener noreferrer" className="demo-link">
      {language === 'en' ? 'Live demo ↗' : 'Ver demo ↗'}</a>
      </div>

      <div className="mobile-proyect2 mobile-card">
        <h2>NewCode CR</h2>
        <img src={newcode} alt="newcodecr.com home page" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? "My web studio: newcodecr.com on Cloudflare Workers with a test environment, live demo businesses on their own subdomains and real client sites." : "Mi estudio web: newcodecr.com en Cloudflare Workers con entorno de pruebas, negocios de demostración en vivo con subdominio propio y sitios de clientes reales."}</p>
          <div className="technologies">
          <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" title="HTML5" className='icono' />
          <img src="https://cdn.simpleicons.org/css/1572B6" alt="CSS" title="CSS" className='icono' />
          <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" className='icono' />
          <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" title="Cloudflare" className='icono' />
          <img src="https://cdn.simpleicons.org/anthropic/FFFFFF" alt="Claude Code" title="Claude Code" className='icono' />
          </div>
        </div>
      <a href="https://newcodecr.com" target="_blank" rel="noopener noreferrer" className="demo-link">
      {language === 'en' ? 'Visit site ↗' : 'Ver sitio ↗'}</a>
      </div>

    </div>
  );
};

export default MobileProjects;