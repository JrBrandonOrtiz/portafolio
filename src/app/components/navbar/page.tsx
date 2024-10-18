"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { CiUser } from 'react-icons/ci'; 
import { GrTechnology } from 'react-icons/gr'; 
import { GrProjects } from 'react-icons/gr'; 
import { MdOutlineContactPage } from 'react-icons/md'; 

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); 
      let scrollPos = window.scrollY + 50; 

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveLink(section.id); 
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link href="#about" onClick={() => scrollToSection('about')} className={activeLink === 'about' ? styles.active : ''}>
        <CiUser />
      </Link>
      <Link href="#technologies" onClick={() => scrollToSection('technologies')} className={activeLink === 'technologies' ? styles.active : ''}>
        <GrTechnology />
      </Link>
      <Link href="#projects" onClick={() => scrollToSection('projects')} className={activeLink === 'projects' ? styles.active : ''}>
        <GrProjects />
      </Link>
      <Link href="#contact" onClick={() => scrollToSection('contact')} className={activeLink === 'contact' ? styles.active : ''}>
        <MdOutlineContactPage />
      </Link>
    </nav>
  );
};

export default Navbar;
