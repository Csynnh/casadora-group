import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  hideFooter = false,
  className = '',
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
