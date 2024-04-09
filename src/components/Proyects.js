import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Proyects.css';
import proyecto1 from '../Images/proyecto1.png'; 
import proyecto2 from '../Images/proyecto2.png';
import icono2 from '../Images/icono2.png';
import icono from '../Images/icono.png';

const Proyects = ({ language }) => {
  return (
    <div className='page'> 
      <Carousel showThumbs={false} className="my-carousel" >
        <div className="proyect-container">
          <div className="proyect-info">
            <h2>{language === 'en' ? 'Carhalla' : 'Carhalla'}</h2>
            <p>{language === 'en' ? 'I developed a web platform for car sales using JavaScript, React, Python, Flux, and API, ensuring an outstanding user experience. I implemented advanced data filters, premium post highlighting options, and a chat function to enhance functionality and user interaction. I achieved optimal performance with fast loading times and high data security.' : 'Desarrollé una plataforma web para la venta de automóviles con JavaScript, React, Python, Flux y API, ofreciendo una experiencia de usuario destacada. Incluí filtros avanzados, resaltado de publicaciones premium y chat para mejorar la funcionalidad y la interacción. Logré un rendimiento óptimo con tiempos de carga rápidos y alta seguridad de datos.'}</p>
            <a href="https://github.com/BrayanSO/Carhalla" target="_blank" rel="noopener noreferrer" className="icono-link">
              <img src={icono2} alt="Icono Personalizado" className="icono" />
            </a>
          </div>
          <img src={proyecto1} alt="Imagen 1" className='img1' /> 
        </div>
        <div className="proyect-container">
          <div className="proyect-info">
            <h2>{language === 'en' ? 'NewCodecr' : 'NewCodecr'}</h2>
            <p>{language === 'en' ? 'I led the development of NewCodecr, a freelance website offering specialized services in WordPress web development. I used WordPress and PHP to create a range of functionalities, from simple informative sites to complex platforms with integrated SEO, appointment scheduling, blogs, and ads. Implemented strong security measures resulting in a high security rating and safeguarded user data. Ensured responsive design and a seamless user experience, including messaging, contact section, meeting booking, and blog functionality..' : 'Lideré el desarrollo de NewCodecr, una plataforma freelance en WordPress y PHP. Implementamos funcionalidades variadas como SEO, citas, blogs y publicidad. Destacamos por nuestras sólidas medidas de seguridad y protección de datos. Ofrecemos diseño responsive y una experiencia de usuario optimizada con mensajería, sección de contacto, reserva de reuniones y blog. Nuestra plataforma garantiza una navegación fluida y efectiva para usuarios y clientes.'}</p>
            <a href="https://www.NewCodecr.com" target="_blank" rel="noopener noreferrer">
              {language === 'en' ? 'Visit NewCodecr' : 'Visita NewCodecr'}
              <img src={icono} alt="Icono Personalizado" className="icono" />
            </a>
          </div> 
          
          <img src={proyecto2} alt="Imagen 2" className='img2' />
        </div>
      </Carousel>
    </div>
  );
};

export default Proyects;
