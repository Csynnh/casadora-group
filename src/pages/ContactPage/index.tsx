import React, { useEffect } from 'react';
import Contact from '../../features/Contact';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Contact fullScreen={true} />;
};

export default ContactPage;
