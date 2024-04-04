import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CustomPrompt from "../components/CustomPrompt"
import '../Styles/ContactMe.css'
import Joke from '../components/Joke.js'
import '../Styles/Joke.css'

export const ContactMe = ({ language }) => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowPrompt(true); // Mostrar el prompt al intentar enviar el mensaje
  };

  const handleConfirmSend = () => {
    emailjs
      .sendForm('service_zvl2b4i', 'template_57n56z6', form.current, {
        publicKey: 'Wj5HRydXlfZ134oue',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true); // Set the state to indicate message sent
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    setShowPrompt(false); // Ocultar el prompt después de enviar el mensaje
  };

  const handleCancelSend = () => {
    setShowPrompt(false); // Ocultar el prompt si se cancela el envío del mensaje
  };

  return (
    <div className="contact-me-container">
       
      {showPrompt && (
        <CustomPrompt
          message={language === 'es' ? '¿Estás seguro de que deseas enviar el mensaje?' : 'Are you sure you want to send the message?'}
          onConfirm={handleConfirmSend}
          onCancel={handleCancelSend}
        />
      )}
      <div className="contact-form">
      <h2>{language === 'es' ? 'Puedes encontrarme' : 'You can find me'}</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
          <label htmlFor="name">{language === 'es' ? 'Tu Nombre:' : 'Your Name:'}</label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
            />
          </div>
          <div className="form-group">
          <label htmlFor="email">{language === 'es' ? 'Tu Email:' : 'Your Email:'}</label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
            />
          </div>
          <div className="form-group">
          <label htmlFor="message">{language === 'es' ? 'Tu Mensaje:' : 'Your Message:'}</label>
            <textarea
              id="message"
              name="message"
              required
            />
            {messageSent && <div className="alert">{language === 'es' ? 'Mensaje enviado exitosamente!' : 'Message sent successfully!'}</div>}
          </div>
          <input className="send" type="submit" value={language === 'es' ? 'Enviar' : 'Send'} />
        </form>
      </div>
      <div className="code-example">
      <div>
     <code>
     <Joke></Joke>
       </code>
       </div>
      </div>
    </div>
    
  );
};

export default ContactMe;
