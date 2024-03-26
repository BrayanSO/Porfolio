import '../Styles/ContactMe.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CustomPrompt from "../components/CustomPrompt"

export const ContactMe = () => {
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
       {messageSent && <div className="alert">Message sent successfully!</div>}
      {showPrompt && (
        <CustomPrompt
          message="Are you sure you want to send the message?"
          onConfirm={handleConfirmSend}
          onCancel={handleCancelSend}
        />
      )}
      <div className="contact-form">
        <h2>You can find me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              required
            />
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="code-example">
      <div>
        
     <code>
     def simular_contacto(): <br></br>
    print("Iniciando proceso de contacto...")<br></br>
    for i in range(3):<br></br>
        print("...", end=" ")<br></br>
    print("\n¡Éxito! Han contactado contigo.") <br></br>

      simular_contacto()

       </code>
       </div>
      </div>
    </div>
    
  );
};

export default ContactMe;
