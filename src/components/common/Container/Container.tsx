import React, { JSX, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  fluid = false,
  as: Component = 'div',
  id,
}) => {
  const containerClass = fluid
    ? 'w-full px-4'
    : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <Component id={id} className={`${containerClass} ${className}`.trim()}>
      {children}
    </Component>
  );
};

export default Container;
