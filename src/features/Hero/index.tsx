import React, { useEffect, useState } from 'react';
import hero_image_1 from '../../assets/images/hero/hero_image_1.png';

interface HeroProps {
  fullScreen?: boolean;
  hasOverlay?: boolean;
  hasScrollIndicator?: boolean;
  className?: string;
  ctaButton?: React.ReactNode;
  image?: string;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  imagePosition?: string;
}

const Hero: React.FC<HeroProps> = ({
  fullScreen = false,
  className = '',
  ctaButton,
  image = hero_image_1,
  title,
  subTitle,
  hasOverlay = true,
  imagePosition = 'center',
}) => {
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
        className={
          `relative w-full ${fullScreen ? 'h-screen' : 'h-full'} overflow-hidden ` +
          className
        }
        ref={heroImageRef}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt="Luxurious interior design by Casadora"
            className={`object-cover object-center w-full h-full`}
            onLoad={() => setIsLoaded(true)}
            style={{
              objectPosition: imagePosition,
            }}
          />
          {hasOverlay && (
            <div
              className="absolute max-h-[11.25rem] w-full h-full bottom-0 z-10"
              style={{
                background:
                  'linear-gradient(0deg, #414042 0%, rgba(117, 115, 119, 0.484943) 70%, rgba(165, 163, 168, 0) 100%)',
              }}
            ></div>
          )}
        </div>

        <div className="absolute max-h-[11.25rem] bottom-0 z-20 h-full w-full flex flex-col justify-center items-center text-center px-4 md:px-8">
          <div
            className={
              'max-w-full transition-all duration-1000 transform ' + isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 tracking-wider font-[Playfair Display]">
              {title}
            </h1>

            <p className="text-white mb-2">{subTitle}</p>

            {ctaButton}
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
