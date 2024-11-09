import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';  // Assurez-vous de créer un fichier Contact.css pour appliquer les styles

const Contact = () => {
  const [state, handleSubmit] = useForm("mbljoaga");
  if (state.succeeded) {
    return <p>Merci pour votre message !</p>;
  }
  
  return (
    
      <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Votre adresse e-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Entrez votre adresse e-mail"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <label htmlFor="message">Votre message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Écrivez votre message ici..."
          rows="6"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
      <div className="linkedin-link">
        <a href="https://www.linkedin.com/in/florian-bernadet-6a1129259/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/vecteezy_linkedin-png-icon_16716470.png" 
            alt="LinkedIn" 
            className="linkedin-icon"
          />
          Mon profil LinkedIn
        </a>
      </div>

      {/* Lien d'attribution en bas */}
      <p className="attribution">
        <a href="https://fr.vecteezy.com/png-gratuit/linkedin">Linkedin PNGs par Vecteezy</a>
      </p>
    </div>
  );
};

export default Contact;
