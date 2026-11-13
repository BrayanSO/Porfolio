import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Projects.css';
import Autos360Media from './Autos360Media.js';
import citas from '../Images/citas.png';
import newcode from '../Images/newcode.png';
import forex from '../Images/forex.svg';
import  MobileProjects from '../components/MobileProjects.js'
import ReactIcon from '../icons/ReactIcon.png';
import python_icon from '../icons/python_icon.png';
import javascript  from '../icons/javascript.png';
import sql_servericon from '../icons/sql_servericon.png';




const Projects = ({ language }) => {
  // Se recalcula al cambiar el ancho; si no, al agrandar la ventana queda la vista móvil sin sus estilos
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  // Barra con los nombres: el carrusel muestra el proyecto elegido aquí
  const names = ['Forex ML Lab', 'Autos360', 'Citas', 'NewCode CR'];
  const [current, setCurrent] = useState(0);
  const go = (i) => setCurrent((i + names.length) % names.length);
  return (
    <div className='page'> 
        {!isMobile && <nav className="project-bar" aria-label={language === 'en' ? 'Projects' : 'Proyectos'}>
          <button onClick={() => go(current - 1)} className="project-arrow" aria-label={language === 'en' ? 'Previous project' : 'Proyecto anterior'}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
          {names.map((name, i) => (
            <button key={name} onClick={() => go(i)} className={'project-tab' + (i === current ? ' active' : '')} aria-current={i === current ? 'true' : undefined}>
              {name}
            </button>
          ))}
          <button onClick={() => go(current + 1)} className="project-arrow" aria-label={language === 'en' ? 'Next project' : 'Proyecto siguiente'}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
        </nav>}
    {isMobile ? ( // Renderiza MobileProjects solo en dispositivos móviles
        <MobileProjects language={language} />
      ) : (
      <Carousel
          selectedItem={current}
          onChange={setCurrent}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          useKeyboardArrows={true}
          infiniteLoop={true}  className="my-carousel" >
         
         
        <div className="proyect-container">
          <div className="proyect-info">
            <h2>{language === 'en' ? 'Forex ML Validation Lab' : 'Laboratorio de validación Forex ML'}</h2>
            <p>{language === 'en' ? "Tested 30+ trading strategies (machine learning, technical analysis and popular YouTube methods) against 347M real market ticks. I designed the validation method, directed an AI coding agent (Claude Code) to build it in Python, and verified every result, catching three bugs that made losing strategies look profitable. Includes paper and demo trading bots, a risk manager and 86 unit tests." : "Probé más de 30 estrategias de trading (machine learning, análisis técnico y métodos populares de YouTube) con 347 millones de ticks reales. Diseñé el método de validación, dirigí a un agente de IA (Claude Code) para construirlo en Python y verifiqué cada resultado, encontrando tres errores que hacían parecer rentables estrategias perdedoras. Incluye bots de paper y demo, gestor de riesgo y 86 pruebas unitarias."}</p>
            <div className='icoskill'>
            <img src={python_icon} alt="Python" title="Python" className='python' />
            <img src={sql_servericon} alt="SQL" title="SQL" className='sql' />
            <img src="https://cdn.simpleicons.org/pandas/FFFFFF" alt="pandas" title="pandas" className='postman' />
            <img src="https://cdn.simpleicons.org/streamlit/FF4B4B" alt="Streamlit" title="Streamlit" className='postman' />
            <img src="https://cdn.simpleicons.org/anthropic/FFFFFF" alt="Claude Code" title="Claude Code" className='postman' />
            </div>
            <a href="https://github.com/BrayanSO/Porfolio/blob/main/writing/01-case-study-trading-strategies.md" target="_blank" rel="noopener noreferrer" className="demo-link">
              {language === 'en' ? 'Case study ↗' : 'Caso de estudio ↗'}
            </a>
          </div>
          <img src={forex} alt="Forex ML Validation Lab results" className='img1' />
        </div>
        <div className="proyect-container">
          
          <div className="proyect-info">
            <h2>Autos360</h2>
            <p>{language === 'en' ? "B2B platform for car dealerships: the dealer records a short video walking around a car and the platform turns it into a real 3D model you can rotate (Gaussian Splatting with COLMAP and Brush), published in a catalog with filters, listing pages and WhatsApp contact. Includes a multi-dealer dashboard with invitations and server-side access checks on every request, automatic license-plate hiding with a detector I trained myself (YOLOX), and deployment on Cloudflare Workers, D1 and R2. I directed an AI coding agent (Claude Code) to build it and tested every flow on desktop and mobile, including the 3D viewer's performance on a real phone (from 26 to 38 fps)." : "Plataforma B2B para agencias de autos: la agencia graba un video corto dando la vuelta al auto y la plataforma lo convierte en un modelo 3D real que se puede girar (Gaussian Splatting con COLMAP y Brush), publicado en un catálogo con filtros, anuncios y contacto por WhatsApp. Incluye un panel para varias agencias con invitaciones y control de acceso en el servidor en cada petición, ocultado automático de placas con un detector que entrené yo mismo (YOLOX) y despliegue en Cloudflare Workers, D1 y R2. Dirigí a un agente de IA (Claude Code) para construirla y probé cada flujo en escritorio y móvil, incluido el rendimiento del visor 3D en un celular real (de 26 a 38 fps)."}</p>
            <div className='icoskill'>
            <img src={ReactIcon} alt="React" title="React" className='react' />
            <img src={javascript} alt="JavaScript" title="JavaScript" className='javascript' />
            <img src="https://cdn.simpleicons.org/threedotjs/FFFFFF" alt="three.js" title="three.js" className='postman' />
            <img src={python_icon} alt="Python" title="Python" className='python' />
            <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" title="Cloudflare" className='postman' />
            <img src="https://cdn.simpleicons.org/anthropic/FFFFFF" alt="Claude Code" title="Claude Code" className='postman' />
            </div>
            <a href="https://autos360.autos360.workers.dev/autos360/#auto/ca232863" target="_blank" rel="noopener noreferrer" className="demo-link">
              {language === 'en' ? 'Live demo ↗' : 'Ver demo ↗'}
            </a>
          </div>
          <Autos360Media language={language} className='img1' />
        </div>
        <div className="proyect-container">
          <div className="proyect-info">
            <h2>Citas</h2>
            <p>{language === 'en' ? "Booking SaaS for small businesses (clinics, salons, barbershops). Owners manage services, staff, hours and time-off blocks from a Svelte panel; customers book through a web-component widget that any site can embed with one tag. Supabase backend: Postgres with row-level security, edge functions for staff invites and booking emails, and 32 pgTAP database tests covering slots and double booking. Live inside the Sonríe dental demo. Built by directing Claude Code; I defined the rules and tested every flow on desktop and mobile." : "SaaS de reservas para negocios pequeños (consultorios, salones, barberías). El dueño administra servicios, personal, horarios y bloqueos desde un panel en Svelte; los clientes reservan con un widget (web component) que cualquier página inserta con una sola etiqueta. Backend en Supabase: Postgres con seguridad por filas, funciones para invitar personal y avisar por correo, y 32 pruebas de base de datos (pgTAP) sobre espacios libres y reservas dobles. Funciona en vivo en la demo dental Sonríe. Construido dirigiendo a Claude Code; definí las reglas y probé cada flujo en escritorio y móvil."}</p>
            <div className='icoskill'>
            <img src="https://cdn.simpleicons.org/svelte/FF3E00" alt="Svelte" title="Svelte" className='postman' />
            <img src="https://cdn.simpleicons.org/supabase/3FCF8E" alt="Supabase" title="Supabase" className='postman' />
            <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" title="PostgreSQL" className='postman' />
            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" className='postman' />
            <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" title="Cloudflare" className='postman' />
            <img src="https://cdn.simpleicons.org/anthropic/FFFFFF" alt="Claude Code" title="Claude Code" className='postman' />
            </div>
            <a href="https://dental.newcodecr.com/#agenda" target="_blank" rel="noopener noreferrer" className="demo-link">
              {language === 'en' ? 'Live demo ↗' : 'Ver demo ↗'}
            </a>
          </div>
          <img src={citas} alt="Citas booking widget inside the Sonríe dental demo" className='img1' />
        </div>
        <div className="proyect-container">
          <div className="proyect-info">
            <h2>NewCode CR</h2>
            <p>{language === 'en' ? "My web studio for small businesses in Costa Rica. newcodecr.com is plain HTML, CSS and JavaScript on Cloudflare Workers, with a test environment (test.newcodecr.com) where every change is checked before it reaches production. It showcases live demo businesses on their own subdomains: a restaurant with cart and WhatsApp ordering, a dental clinic booking through Citas, real-estate search with filters and a car dealer with a payment calculator. It also ships real client sites such as Javi Surf Lessons." : "Mi estudio web para negocios pequeños en Costa Rica. newcodecr.com está hecho en HTML, CSS y JavaScript sobre Cloudflare Workers, con un entorno de pruebas (test.newcodecr.com) donde reviso cada cambio antes de que llegue a producción. Muestra negocios de demostración en vivo, cada uno en su subdominio: restaurante con carrito y pedido por WhatsApp, clínica dental que agenda con Citas, buscador de propiedades con filtros y agencia de autos con calculadora de cuota. También entrega sitios de clientes reales como Javi Surf Lessons."}</p>
            <div className='icoskill'>
            <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" title="HTML5" className='postman' />
            <img src="https://cdn.simpleicons.org/css/1572B6" alt="CSS" title="CSS" className='postman' />
            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" className='postman' />
            <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" title="Cloudflare" className='postman' />
            <img src="https://cdn.simpleicons.org/anthropic/FFFFFF" alt="Claude Code" title="Claude Code" className='postman' />
            </div>
            <a href="https://newcodecr.com" target="_blank" rel="noopener noreferrer" className="demo-link">
              {language === 'en' ? 'Visit site ↗' : 'Ver sitio ↗'}
            </a>
          </div>
          <img src={newcode} alt="newcodecr.com home page" className='img1' />
        </div>

      </Carousel>
       )}
    </div>
    
  );
};

export default Projects;
