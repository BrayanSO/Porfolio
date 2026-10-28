import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Projects.css';
import autos360 from '../Images/autos360.png';
import autos360Video from '../Images/autos360.mp4';
import proyecto2 from '../Images/proyecto2.png';
import forex from '../Images/forex.svg';
import icono2 from '../Images/icono2.png';
import  MobileProjects from '../components/MobileProjects.js'
import ReactIcon from '../icons/ReactIcon.png';
import python_icon from '../icons/python_icon.png';
import javascript  from '../icons/javascript.png';
import sql_servericon from '../icons/sql_servericon.png';
import Wordpress from '../icons/wordpress.png'
import php from '../icons/php.png'




const Projects = ({ language }) => {
  // Se recalcula al cambiar el ancho; si no, al agrandar la ventana queda la vista móvil sin sus estilos
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
   // Referencia para controlar el carrusel manualmente
  const carouselRef = useRef(null);

  // Funciones controladoras de las flechas personalizadas
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.onClickPrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.onClickNext();
    }
  };
  return (
    <div className='page'> 
     {/* NUEVOS BOTONES DE REGRESAR Y SIGUIENTE (solo con el carrusel) */}
        {!isMobile && <div className="custom-carousel-controls">
          <button onClick={handlePrev} className="carousel-custom-btn prev-btn">
            {language === 'en' ? '' : ''}
             ←
          </button>
          <button onClick={handleNext} className="carousel-custom-btn next-btn">
            {language === 'en' ? '' : ''}
             →
          </button>
        </div>}
    {isMobile ? ( // Renderiza MobileProjects solo en dispositivos móviles
        <MobileProjects language={language} />
      ) : (
      <Carousel  ref={carouselRef} 
          showThumbs={false} 
          showArrows={false}
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
            <a href="https://github.com/BrayanSO/Forex-ML-System/tree/validacion-estrategias" target="_blank" rel="noopener noreferrer" className="icono-link">
              <img src={icono2} alt="GitHub" className="icono" />
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
            <a href="https://autos360.autos360.workers.dev/autos360/#auto/e2ae0dc1" target="_blank" rel="noopener noreferrer" className="demo-link">
              {language === 'en' ? 'Live demo ↗' : 'Ver demo ↗'}
            </a>
          </div>
          <video src={autos360Video} poster={autos360} autoPlay muted loop playsInline aria-label="Autos360 3D model of a car rotating" className='img1' />
        </div>
        <div className="proyect-container">
          <div className="proyect-info">
            <h2>NewCodecr</h2>
            <p>{language === 'en' ? "Freelance WordPress studio. I built client sites with WordPress and PHP (contact forms, appointment booking, blogs and basic SEO) and tested each one before launch: functional tests on forms and booking, responsive checks across devices, and acceptance testing with the client. (Site no longer online.)" : "Estudio freelance de WordPress. Construí sitios para clientes con WordPress y PHP (formularios de contacto, reserva de citas, blogs y SEO básico) y probé cada uno antes de publicarlo: pruebas funcionales de formularios y reservas, revisión responsive en varios dispositivos y pruebas de aceptación con el cliente. (El sitio ya no está en línea.)"}</p>
            <div className='iconew'>
          <img src={Wordpress} alt="WordPress" title="WordPress" className='wordpress' />
          <img src={php} alt="PHP" title="PHP" className='php' />
          </div>

            
          </div> 
        <div className='my-carousel2'>
          <img src={proyecto2} alt="NewCodecr home page" className='img2' />
          </div>
        </div>

      </Carousel>
       )}
    </div>
    
  );
};

export default Projects;
