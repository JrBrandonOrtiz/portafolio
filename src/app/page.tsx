// src/app/page.tsx

'use client';

import Navbar from './components/navbar/page'; // Ajusta la ruta si es necesario
import Footer from './components/footer/page'; // Ajusta la ruta si es necesario
import AboutPage from './(sections)/about/page'; // Ruta del componente About
import ProjectsPage from './(sections)/projects/page'; // Ruta del componente Projects
import Contactpage from './(sections)/contact/page'; // Ruta del componente Contact
import './styles/globals.css';
import TechnologiesPage from './(sections)/technologies/page';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
        <TechnologiesPage />
        <ProjectsPage />
        <Contactpage />
      </main>
      <Footer />
    </>
  );
};

export default Home;
