import React, { useState, useRef } from 'react';
import '../Styles/Home.css';

const RotateImage = ({ imageUrl }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startRotation, setStartRotation] = useState(0);
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    setStartX(event.clientX);
    setStartRotation(rotation);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  

  const handleMouseMove = (event) => {
    if (isMouseDown) {
      const deltaX = event.clientX - startX;
      const maxDeltaX = 100; // Ajusta esto para cambiar la amplitud del movimiento
      const maxRotation = 90; // Ajusta esto para cambiar la cantidad de rotación máxima
      const newRotation = startRotation + (Math.sin(deltaX / maxDeltaX * Math.PI) * maxRotation);
      setRotation(newRotation);
    }
  };

  return (
    <img
    src={imageUrl}
    alt="Imagen de muestra"
    className={`homepage-image ${isMouseDown ? 'coin-rotation' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={imageRef}
    />
  );
};

export default RotateImage;
