import React, { useEffect } from 'react';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Residential</h2>
            <p className="text-gray-600 mb-4">
              Our residential projects showcase our commitment to creating beautiful, functional living spaces that reflect our clients' unique personalities and lifestyles.
            </p>
            <a href="#" className="text-[#FFC3C3] hover:underline">View Projects</a>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Hospitality</h2>
            <p className="text-gray-600 mb-4">
              Our hospitality projects demonstrate our ability to create inviting, memorable spaces that enhance the guest experience and support operational efficiency.
            </p>
            <a href="#" className="text-[#FFC3C3] hover:underline">View Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;