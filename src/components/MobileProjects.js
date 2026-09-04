import React from 'react';
import '../Styles/MobileProjects.css';
import proyecto1 from '../Images/proyecto1.png'; 
import proyecto2 from '../Images/proyecto2.png';
import icono2 from '../Images/icono2.png';
import icono from '../Images/icono.png';
import ReactIcon from '../icons/ReactIcon.png';
import python_icon from '../icons/python_icon.png';
import javascript  from '../icons/javascript.png';
import sql_servericon from '../icons/sql_servericon.png';
import css from '../icons/css.png';
import api from '../icons/api.png';
import Wordpress from '../icons/wordpress.png'
import php from '../icons/php.png'


const MobileProjects = ({ language }) => {
  return (
    <div className='mobile-projects'>
      <div className="mobile-proyect">
        <h2>{language === 'en' ? 'Carhalla' : 'Carhalla'}</h2>
        <img src={proyecto1} alt="Imagen 1" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? 'I developed a web platform for car sales using JavaScript, React, Python, Flux, and API, ensuring an outstanding user experience. I implemented advanced data filters, premium post highlighting options, and a chat function to enhance functionality and user interaction. I achieved optimal performance with fast loading times and high data security. I also designed and executed manual test cases for the authentication and filtering flows, and performed API testing with Postman to validate the app\'s functionality.' : 'Desarrollé una plataforma web de venta de autos usando JavaScript, React, Python, Flux y APIs, asegurando una experiencia de usuario excepcional. Implementé filtros de datos avanzados, opciones de destacado premium para publicaciones y una función de chat para mejorar la funcionalidad y la interacción del usuario. Logré un rendimiento óptimo con tiempos de carga rápidos y alta seguridad de datos. También diseñé y ejecuté casos de prueba manuales para los flujos de autenticación y filtrado, y realicé pruebas de API con Postman para validar el funcionamiento de la aplicación.'}</p>
          <div className="technologies">
          <img src={ReactIcon} alt="React" title="React" className='icono' />
          <img src={python_icon} alt="React" title="React" className='icono' />
          <img src={javascript} alt="React" title="React" className='icono' />
          <img src={sql_servericon} alt="React" title="React" className='icono' />
          <img src={css} alt="React" title="React" className='icono' />
          <img src={api} alt="React" title="React" className='icono' />
          <img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" title="Postman" className='icono' />
          </div>
        </div>
      </div>
      <a href="https://github.com/BrayanSO/Carhalla" target="_blank" rel="noopener noreferrer" className="icono-link">
      <img src={icono2} alt="Icono Personalizado" className="iconogit" /> </a>


      <div className="mobile-proyect2">
        <h2>{language === 'en' ? 'NewCodecr' : 'NewCodecr'}</h2>
        <img src={proyecto2} alt="Imagen 2" className='mobile-img' />
        <div className="mobile-proyect-info">
          <p>{language === 'en' ? 'I led the development of NewCodecr, a freelance website offering specialized services in WordPress web development. I used WordPress and PHP to create a range of functionalities, from simple informative sites to complex platforms with integrated SEO, appointment scheduling, blogs, and ads. Implemented strong security measures resulting in a high security rating and safeguarded user data. Ensured responsive design and a seamless user experience, including messaging, contact section, meeting booking, and blog functionality. I also tested the platform extensively — conducting functional testing on core features (forms, scheduling, messaging), verifying responsive behavior across devices, and performing acceptance testing before production deployment.' : 'Lideré el desarrollo de NewCodecr, un sitio freelance que ofrece servicios especializados en desarrollo web con WordPress. Usé WordPress y PHP para crear una variedad de funcionalidades, desde sitios informativos simples hasta plataformas complejas con SEO integrado, agendamiento de citas, blogs y anuncios. Implementé medidas de seguridad robustas que resultaron en una alta calificación de seguridad y protección de los datos de usuario. Aseguré un diseño responsive y una experiencia de usuario fluida, incluyendo mensajería, sección de contacto, agendamiento de reuniones y funcionalidad de blog. También probé la plataforma de forma exhaustiva, realizando pruebas funcionales sobre las funciones principales (formularios, agendamiento, mensajería), verificando el comportamiento responsive en varios dispositivos, y realizando pruebas de aceptación antes del despliegue a producción.'}</p>
          <div className="technologies">
          <img src={Wordpress} alt="React" title="React" className='icono' />
          <img src={php} alt="React" title="React" className='icono' />
          </div>
         
        </div>
      </div>
      <a href="https://www.NewCodecr.com" target="_blank" rel="noopener noreferrer">
      <img src={icono} alt="Icono Personalizado" className="icono2" />
      </a>
    </div>
  );
};

export default MobileProjects;