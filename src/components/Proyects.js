import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Proyects.css'

const MyCarousel = () => {
  return (
    <Carousel showThumbs={false} className="my-carousel">
      <div>
        <img src="https://via.placeholder.com/600x400" alt="Imagen 1" />
        <p className="legend">Descripción 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400" alt="Imagen 2" />
        <p className="legend">Descripción 2</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400" alt="Imagen 3" />
        <p className="legend">Descripción 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
