// App.js
import React from 'react';
import '../Styles/Header.css';
import ToggleButton from '../components/ToogleButton';
import Skills from "../components/Skills";
import Proyects from './Proyects.js';
import Home from './Home.js';
import ContactMe from './ContactMe.js';
import MobileMenu from './MobileMenu.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en' // Establecer el idioma predeterminado como inglés
    };
  }

  toggleLanguage = (isActive) => {
    const newLanguage = isActive ? 'es' : 'en'; // Alternar entre inglés y español
    this.setState({ language: newLanguage });
  }

  goToPage = (pageId) => {
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const menuContainer = document.querySelector('.button-container');
    if (window.scrollY > 0) {
      menuContainer.classList.add('large');
      menuContainer.classList.remove('small'); // Asegúrate de quitar la clase "small" si el menú está en la parte superior
    } else {
      menuContainer.classList.remove('large');
      menuContainer.classList.add('small'); // Agrega la clase "small" cuando el menú está en la parte superior
    }
  }

  render() {
    const { language } = this.state;

    return (
      <div>
        <div className="button-container col-md-12 col-xs-12">
          <button onClick={() => this.goToPage('home')}>{language === 'es' ? 'Home' : 'Inicio'}</button>
          <button onClick={() => this.goToPage('skills')}>{language === 'es' ? 'Habilidades' : 'Skills'}</button>
          <button onClick={() => this.goToPage('proyects')}>{language === 'es' ? 'Proyectos' : 'Proyects'}</button>
          <button onClick={() => this.goToPage('contact')}>{language === 'es' ? 'Contactame' : 'Contact'}</button>
          <ToggleButton label={language === 'es' ? 'Eng' : 'Esp'} onChange={this.toggleLanguage} />
        </div>
        <div className="content">
          <div id="home" className="page1">
            <h2 className='thome'>{language === 'en' ? 'Home' : 'Inicio'}</h2>
            <Home language={language}></Home>
          </div>
          <div id="skills" className="page2">
            <h2 className='tskills'>{language === 'en' ? 'habilidades' : 'skills'}</h2>
            <Skills></Skills>
          </div>
          <div id="proyects" className="page3">
            <h2 className='tproyects'>{language === 'en' ? 'Proyectos' : 'Proyects'}</h2>
            <Proyects></Proyects>
          </div>
          <div id="contact" className="page4">
            <h2 className='tcontact'>{language === 'en' ? 'Contactame' : 'contact'}</h2>
            <ContactMe></ContactMe>
          </div>
          {/* Nuevo menú móvil */}
          <MobileMenu goToPage={this.goToPage} language={language} toggleLanguage={this.toggleLanguage} />
        </div>
      </div>
    );
  }
}

export default App;
