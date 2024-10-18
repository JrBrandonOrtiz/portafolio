import React, { ReactNode } from 'react';
import Navbar from '../components/navbar/page'; 

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
