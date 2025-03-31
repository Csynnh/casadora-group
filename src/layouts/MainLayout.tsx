import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/layout';

interface MainLayoutProps {
  hideFooter?: boolean;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  hideFooter = false,
  className = '',
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
