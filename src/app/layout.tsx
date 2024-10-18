import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import React from 'react';

export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Portafolio Jorge Brandon Ortiz Arango',
  keywords: ['Next.js', 'Develop', 'Desarrollo', 'Desarrollador', 'TypeScript', 'Brandon Ortiz Arango'],
  viewport: 'width=device-width, initial-scale=1.0',
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={`${raleway.className} bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300`}>
        <header className="flex justify-between items-center p-4">
        </header>
        <main>{children}</main>
        <footer className="p-4 text-center">
          © 2024 Jorge Brandon Ortiz Arango
        </footer>
      </body>
    </html>
  );
}
