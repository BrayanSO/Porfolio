import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Proyects.css';
import proyecto1 from '../Images/proyecto1.png'; // Importa la imagen directamente

const Proyects = () => {
  return (
  <div className='page'> 
    <Carousel showThumbs={false} className="my-carousel">
      <div className="proyect-container">
        <div className="proyect-info">
          <h2>Información 1</h2>
          <p>Descripción 1</p>
        </div>
        <img src={proyecto1} alt="Imagen 1" className='img1' /> 
      </div>
      <div className="proyect-container">
        <div className="proyect-info">
          <h2>Información 2</h2>
          <p>Descripción 2</p>
        </div>
        <img src="https://via.placeholder.com/600x400" alt="Imagen 2" />
      </div>
      <div className="proyect-container">
        <div className="proyect-info">
          <h2>Información 3</h2>
          <p>Descripción 3</p>
        </div>
        <img src="https://via.placeholder.com/600x400" alt="Imagen 3" />
      </div>
    </Carousel>
    </div>
  );
};

export default Proyects;
