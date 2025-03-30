import React from 'react';
import { Container, Card } from '../../common';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
  id?: string;
}

const Features: React.FC<FeaturesProps> = ({
  title = 'Features',
  subtitle = 'Discover what makes our product special',
  features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1 and its benefits to the user.',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'Feature 2',
      description: 'Description of feature 2 and its benefits to the user.',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: 'Feature 3',
      description: 'Description of feature 3 and its benefits to the user.',
      icon: (
        <svg
          className="w-12 h-12 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
  ],
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`py-16 bg-gray-50 ${className}`}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {features.map((feature, index) => (
            <Card 
              key={index}
              className="text-center h-full"
              elevation="low"
              hoverEffect
            >
              <div className="flex flex-col items-center">
                {feature.icon && (
                  <div className="mb-4 text-primary-600">
                    {feature.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))} */}
        </div>
      </Container>
    </section>
  );
};

export default Features;
