import React, { useEffect } from 'react';

const ExhibitionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Exhibitions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Novaland Expo</h2>
            <p className="text-gray-600 mb-4">
              Our participation in the Novaland Expo showcased our latest
              designs and innovations in furniture and interior design.
            </p>
            <a href="#" className="text-[#FFC3C3] hover:underline">
              Learn More
            </a>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Hawa Expo</h2>
            <p className="text-gray-600 mb-4">
              At the Hawa Expo, we presented our commitment to sustainable
              design and manufacturing practices, highlighting our eco-friendly
              furniture collections.
            </p>
            <a href="#" className="text-[#FFC3C3] hover:underline">
              Learn More
            </a>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Maison & Objet Paris
            </h2>
            <p className="text-gray-600 mb-4">
              Our presence at Maison & Objet Paris allowed us to showcase our
              designs on an international stage and connect with designers and
              clients from around the world.
            </p>
            <a href="#" className="text-[#FFC3C3] hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionPage;
