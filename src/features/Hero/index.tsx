import React, { useEffect, useState } from 'react';
import hero_image_1 from '../../assets/images/hero/hero_image_1.png';
import CTAButton from '../../components/common/Button/CTAButton';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseRef = React.useRef<HTMLDivElement>(null);
  const heroImageRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);



  // Handle scroll event, if scrolled past the hero image, hide the mouse
  useEffect(() => {
    const handleScroll = () => {
      const heroImage = heroImageRef.current;
      const mouse = mouseRef.current;
      if (heroImage && mouse) {
        const heroImageRect = heroImage.getBoundingClientRect();
        const mouseRect = mouse.getBoundingClientRect();
        if (mouseRect.top) {
          if (
            heroImageRect.bottom * 0.8 < mouseRect.top &&
            heroImageRect.bottom > mouseRect.top
          ) {
            mouse.style.borderColor = 'rgba(255, 255, 255, 0)';
            mouse.style.opacity = '0';
          } else if (heroImageRect.bottom < mouseRect.top) {
            mouse.style.borderColor = 'transparent';
            mouse.style.opacity = '0';
          } else {
            mouse.style.borderColor = 'white';
            mouse.style.opacity = '1';
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded]);

  return (
    <>
      <section
        className="relative w-full h-screen overflow-hidden"
        ref={heroImageRef}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero_image_1}
            alt="Luxurious interior design by Casadora"
            className="object-cover object-center w-full h-full"
            onLoad={() => setIsLoaded(true)}
          />
          <div
            className="absolute max-h-[11.25rem] w-full h-full bottom-0 z-10"
            style={{
              background:
                'linear-gradient(0deg, #414042 0%, rgba(117, 115, 119, 0.484943) 70%, rgba(165, 163, 168, 0) 100%)',
            }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="absolute max-h-[11.25rem] bottom-0 z-20 h-full w-full flex flex-col justify-center items-center text-center px-4 md:px-8">
          <div
            className={
              'max-w-full transition-all duration-1000 transform ' + isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }
          >
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 tracking-wider font-[Playfair Display]">
              CASADORA
            </h1>

            {/* Subheading */}
            <p className="text-white mb-2">
              Managing every detail from concept to install, <br /> we offer
              5-star service for your living environment.
            </p>

            {/* CTA Buttons */}
            <CTAButton href="/about">ABOUT US</CTAButton>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div
        className={
          'fixed bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 w-[30px] h-[50px] '
        }
      >
        <div
          ref={mouseRef}
          className="w-[30px] h-[50px] border-2 border-white rounded-full flex justify-center  z-30 transition-all duration-1000"
        >
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-3  z-30 "></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
