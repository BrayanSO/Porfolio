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
      <Carousel showThumbs={false} className="my-carousel" infiniteLoop={true}>
        <div className="proyect-container">
          <div className="proyect-info">
            <h2>{language === 'en' ? 'Carhalla' : 'Carhalla'}</h2>
            <p>{language === 'en' ? 'Application for selling cars with premium options, advanced data filtering, vehicle ad posting, and optional chat functionality for user inquiries.' : 'Aplicación de venta de autos con opciones premium, filtrado avanzado de datos, publicación de anuncios de vehículos y funcionalidad de chat opcional para consultas de usuarios.'}</p>
            <a href="https://github.com/BrayanSO/Carhalla" target="_blank" rel="noopener noreferrer" className="icono-link">
              <img src={icono2} alt="Icono Personalizado" className="icono" />
            </a>
          </div>
          <img src={proyecto1} alt="Imagen 1" className='img1' /> 
        </div>
        <div className="proyect-container">
          <div className="proyect-info">
            <h2>{language === 'en' ? 'NewCodecr' : 'NewCodecr'}</h2>
            <p>{language === 'en' ? 'Business personal page to sell the service of creating WordPress websites.' : 'Página personal empresarial para vender el servicio de creación de páginas web en WordPress.'}</p>
            <a href="https://www.NewCodecr.com" target="_blank" rel="noopener noreferrer">
              {language === 'en' ? 'Visit NewCodecr' : 'Visitar NewCodecr'}
              <img src={icono} alt="Icono Personalizado" className="icono" />
            </a>
          </div> 
          
          <img src={proyecto2} alt="Imagen 2" />
        </div>
      </Carousel>
    </div>
  );
};

export default Proyects;
