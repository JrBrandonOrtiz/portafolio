// src/app/components/DarkModeToggle/DarkModeToggle.tsx
'use client'

import React from 'react';
import { useTheme } from './DarkModeToggle';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importa los íconos que desees
import './darkmode.css';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      onClick={toggleDarkMode} 
      className="dark-mode-toggle"
      aria-label="Toggle dark mode" // Accesibilidad
    >
      {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
