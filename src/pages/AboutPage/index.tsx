import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Casadora is a leading furniture corporation dedicated to creating beautiful, functional spaces through innovative design and craftsmanship.
        </p>
        <p className="mb-6">
          Our mission is to blend aesthetics with functionality, creating spaces that inspire and enhance the quality of life for our clients.
        </p>
        <p className="mb-6">
          With a team of talented designers and craftsmen, we bring visions to life, transforming spaces into works of art that reflect our clients' unique personalities and needs.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;