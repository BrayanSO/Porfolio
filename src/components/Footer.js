import React from 'react';
import '../Styles/Footer.css'
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoLinkedin, logoInstagram } from 'ionicons/icons';


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
        <li><a href="/"><IonIcon icon={logoFacebook} /></a></li>
        <li><a href="/"><IonIcon icon={logoTwitter} /></a></li>
        <li><a href="/"><IonIcon icon={logoLinkedin} /></a></li>
        <li><a href="/"><IonIcon icon={logoInstagram} /></a></li>
      </ul>
      <p>&copy;2024 Brayan Solera | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
