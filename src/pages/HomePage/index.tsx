import React, { useEffect } from 'react';
import Hero from '../../features/Hero';
import OurServices from '../../features/OurServices';
import OurProjects from '../../features/OurProjects';
import Exhibition from '../../features/Exhibition';
import Contact from '../../features/Contact';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <OurServices />
      <OurProjects />
      <Exhibition />
      <Contact />
    </>
  );
};

export default HomePage;
