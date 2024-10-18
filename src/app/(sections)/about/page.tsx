"use client"; // Marca este componente como un componente del cliente

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../about/about.css';

const AboutPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/Imagen_de_WhatsApp_2024-10-17_a_las_08.54.16_7e02b7a4-removebg-preview.png',
    '/images/Imagen_de_WhatsApp_2024-10-17_a_las_08.55.27_98862423-removebg-preview.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
  }, [images.length]); // Agrega `images.length` como dependencia

  return (
    <section id="about">
      <div className="bitmoji-container">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Bitmoji ${index + 1}`}
            className={`bitmoji ${currentImage === index ? 'active' : ''}`}
            style={{ display: currentImage === index ? 'block' : 'none' }} // Mostrar solo la imagen activa
            width={100} // Ajusta el ancho según lo necesites
            height={100} // Ajusta la altura según lo necesites
          />
        ))}
      </div>
      <h1>Jr Brandon Ortiz</h1>
      <h2>Desarrollador Front-End</h2>
      <p>Apasionado por crear experiencias de usuario atractivas y funcionales, disfruto resolver problemas complejos con soluciones creativas.</p>
    </section>
  );
};

export default AboutPage;
