import React from 'react';
import CTAButton from '../Button/CTAButton';

interface CardProps {
  image: string;
  href: string;
  text: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ image, text, href, className }) => {
  return (
    <div
      className={
        'relative max-h-[21.875em] h-full aspect-[0.88] overflow-hidden ' +
        className
      }
    >
      <div className="w-full h-full">
        <img
          src={image}
          alt="Architecture"
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className="absolute bottom-0 w-full max-h-[min(25.5%,6.1875rem)] h-full left-0 py-2"
        style={{
          background:
            'linear-gradient(360deg, #414042 0%, rgba(69, 68, 70, 0.580866) 53.41%, rgba(165, 163, 168, 0) 100%)',
        }}
      >
        <div className="text-white w-full h-full flex items-center justify-center flex-col">
          <h5>{text}</h5>
          <CTAButton href={href}>VIEW DETAILS</CTAButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
