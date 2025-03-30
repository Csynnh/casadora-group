import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, children, className }) => {
  return (
    <div
      className={
        'flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-5 py-3 ' +
        className
      }
    >
      <a
        href={href}
        className="!underline !font-medium text-sm leading-[1.571rem] !text-white"
      >
        {children}
      </a>
    </div>
  );
};

export default CTAButton;
