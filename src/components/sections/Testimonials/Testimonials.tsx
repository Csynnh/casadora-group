import React from 'react';
import { Container, Card } from '../../common';

interface Testimonial {
  content: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
  id?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = 'What Our Customers Say',
  subtitle = 'Hear from our satisfied customers about their experience with our product',
  testimonials = [
    {
      content:
        'This product has completely transformed how we operate. The interface is intuitive and the features are exactly what we needed.',
      author: 'Jane Smith',
      role: 'CEO',
      company: 'Company A',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      content:
        "I was skeptical at first, but after using it for a month, I can't imagine working without it. The support team is also incredibly helpful.",
      author: 'John Doe',
      role: 'Marketing Director',
      company: 'Company B',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      content:
        'The attention to detail and the quality of the product exceeded our expectations. Highly recommended for anyone looking for a reliable solution.',
      author: 'Emily Johnson',
      role: 'Product Manager',
      company: 'Company C',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  ],
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`py-16 bg-white ${className}`}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full" elevation="low" bordered>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg
                    className="h-8 w-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 flex-grow">{testimonial.content}</p>
                <div className="mt-6 flex items-center">
                  {testimonial.avatar && (
                    <div className="flex-shrink-0 mr-3">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    {(testimonial.role || testimonial.company) && (
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                        {testimonial.role && testimonial.company && ', '}
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
