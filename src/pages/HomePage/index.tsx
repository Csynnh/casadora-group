import React, { useEffect } from 'react';
import Hero from '../../features/Hero';
import OurServices from '../../features/OurServices';
import OurProjects from '../../features/OurProjects';
import Exhibition from '../../features/Exhibition';
import Contact from '../../features/Contact';
import CTAButton from '../../components/common/Button/CTAButton';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        fullScreen
        ctaButton={<CTAButton href="/about">ABOUT US</CTAButton>}
        title="CASADORA"
        subTitle={
          <>
            Managing every detail from concept to install, <br /> we offer
            5-star service for your living environment.
          </>
        }
      />
      <OurServices />
      <OurProjects />
      <Exhibition />
      <Contact />
    </>
  );
};

export default HomePage;
