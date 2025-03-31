import React, { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FFC3C3] text-black py-3 px-8 rounded-md font-medium hover:bg-[#ffaaaa] transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;