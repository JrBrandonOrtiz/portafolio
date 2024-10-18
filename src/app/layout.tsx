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
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  );
}