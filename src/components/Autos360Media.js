import React, { useState } from 'react';
import autos360 from '../Images/autos360.png';
import autos360Video from '../Images/autos360.mp4';

// El visor 3D (~7 MB: modelo + three.js/Spark) se carga solo al tocar el botón; antes se ve el video de 1 MB.
const EMBED_URL = 'https://autos360.autos360.workers.dev/autos360/#embed/ca232863';

const Autos360Media = ({ language, className }) => {
  const [show3d, setShow3d] = useState(false);
  return (
    <div className={className + ' media3d'}>
      {show3d ? (
        <iframe src={EMBED_URL} title={language === 'en' ? 'Autos360 3D viewer' : 'Visor 3D de Autos360'} className="media3d-view" />
      ) : (
        <>
          <video src={autos360Video} poster={autos360} autoPlay muted loop playsInline aria-label="Autos360 3D model of a car rotating" className="media3d-view" />
          <button type="button" className="demo-link media3d-btn" onClick={() => setShow3d(true)}>
            {language === 'en' ? 'Rotate in 3D ↻' : 'Girar en 3D ↻'}
          </button>
        </>
      )}
    </div>
  );
};

export default Autos360Media;
