import React, { useEffect } from 'react';
import Hero from '../../features/Hero';
import AboutMainSection from '../../features/About';
import AboutImage from '../../assets/about/about_1.jpeg';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        className="w-screen aspect-[3.94]"
        hasOverlay={false}
        imagePosition="bottom"
      />
      <AboutMainSection />
      <Hero
        className="w-screen aspect-[4.25]"
        hasOverlay={false}
        imagePosition="center"
        image={AboutImage}
      />
    </>
  );
};

export default AboutPage;
