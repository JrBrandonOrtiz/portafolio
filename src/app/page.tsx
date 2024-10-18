// src/app/page.tsx

'use client';

import { ThemeProvider } from './components/DarkModeToggle/DarkModeToggle'; // Asegúrate de que la ruta sea correcta
import Navbar from './components/navbar/page';
import Footer from './components/footer/page';
import AboutPage from './(sections)/about/page';
import ProjectsPage from './(sections)/projects/page';
import Contactpage from './(sections)/contact/page';
import './styles/globals.css';
import TechnologiesPage from './(sections)/technologies/page';
import DarkModeToggle from './components/DarkModeToggle/DarkModeButton';

const Home = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <DarkModeToggle /> {/* Aquí colocas el botón para alternar el modo oscuro */}
      <main>
        <AboutPage />
        <TechnologiesPage />
        <ProjectsPage />
        <Contactpage />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
