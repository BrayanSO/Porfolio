import React, { useState, useRef } from 'react';
import "../Styles/RotateImage.css";

const RotateImage = ({ imageUrl }) => {
  const [startX, setStartX] = useState(null);
  const [startRotation, setStartRotation] = useState(0);
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef(null);

  const handleStart = (clientX) => {
    setStartX(clientX);
    setStartRotation(rotation);
  };

  const handleMove = (clientX) => {
    const deltaX = clientX - startX;
    const maxDeltaX = 100; // Ajusta esto para cambiar la amplitud del movimiento
    const maxRotation = 90; // Ajusta esto para cambiar la cantidad de rotación máxima
    const newRotation = startRotation + (Math.sin(deltaX / maxDeltaX * Math.PI) * maxRotation);
    setRotation(newRotation);
  };

  const handleTouchStart = (event) => {
    event.preventDefault();
    handleStart(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    handleMove(event.touches[0].clientX);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    handleStart(event.clientX);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();
    handleMove(event.clientX);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleResetRotation = () => {
    setRotation(0);
  };

  return (
    <img
      src={imageUrl}
      alt="Imagen de muestra"
      className={`homepage-image ${rotation !== 0 ? 'coin-rotation' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleResetRotation}
      ref={imageRef}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default RotateImage;
