import React, { useEffect } from 'react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
            <p className="text-gray-600">
              Our architectural services blend form and function to create
              spaces that inspire. From concept to completion, we work closely
              with clients to bring their vision to life.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Interior Design</h2>
            <p className="text-gray-600">
              Our interior design services transform spaces into beautiful,
              functional environments that reflect our clients' unique style and
              meet their specific needs.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Manufacturing</h2>
            <p className="text-gray-600">
              Our manufacturing capabilities allow us to create custom furniture
              and fixtures that perfectly complement our architectural and
              interior design services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
