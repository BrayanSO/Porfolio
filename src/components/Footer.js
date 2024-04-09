import React from 'react';
import '../Styles/Footer.css'
import { IonIcon } from '@ionic/react';
import { logoGithub, logoTwitter, logoLinkedin, mailOutline } from 'ionicons/icons';


const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li><a href="https://github.com/BrayanSO" target='_blank' rel="noopener noreferrer"><IonIcon icon={logoGithub} /></a></li>
        <li><a href="https://www.linkedin.com/in/brayanso/" target='_blank' rel="noopener noreferrer"><IonIcon icon={logoLinkedin} /></a></li>
        <li><a href="mailto:briansolera@gmail.com" target='_blank' rel="noopener noreferrer"><IonIcon icon={mailOutline} /></a></li>
        <li><a href="https://twitter.com/BrayanSole25744" target='_blank' rel="noopener noreferrer"><IonIcon icon={logoTwitter} /></a></li>

      </ul>
      <p>&copy;2024 Brayan Solera | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
