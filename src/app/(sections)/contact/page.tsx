import React from 'react';
import './contact.css'; // Importa el archivo de estilos

import { IoPhonePortraitOutline } from 'react-icons/io5'; // Ícono de teléfono
import { AiOutlineMail } from 'react-icons/ai'; // Ícono de correo
import { AiFillLinkedin } from 'react-icons/ai'; // Ícono de LinkedIn

export default function ContactPage() {
  return (
    <section id="contact" className="contact-section">
      <div className='name'>Contacto</div>
      <div className="contact-info">
        <div className="contact-item">
          <IoPhonePortraitOutline className="contact-icon" />
          <span>+57 3207770283</span> {/* Tu número celular aquí */}
        </div>
        <div className="contact-item">
          <AiOutlineMail className="contact-icon" />
          <span>brandonprogram@gmail.com</span> {/* Tu correo aquí */}
        </div>
        <div className="contact-item">
          <AiFillLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

