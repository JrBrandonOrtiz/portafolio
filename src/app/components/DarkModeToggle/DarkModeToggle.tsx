// src/app/context/ThemeContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define la estructura del contexto
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Crea el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Crea el ThemeProvider
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado para manejar el modo oscuro
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Verifica la preferencia guardada en localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  // Aplicar el tema al cargar la página
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Proveer el contexto
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
