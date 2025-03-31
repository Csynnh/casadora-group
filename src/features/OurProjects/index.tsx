import OurProjectImage_1 from '../../assets/our_projects/our_project_1.png';
import OurProjectImage_2 from '../../assets/our_projects/our_project_2.jpeg';
import { Card } from '../../components/common';
import Section from '../../components/Section/Section';
import { CardItem } from '../../types/card';

const OurProjects = () => {
  const projectItems: CardItem[] = [
    {
      image: OurProjectImage_1,
      text: 'RESIDENTIAL',
      href: 'projects/residential',
      className:
        'max-h-[100%] max-w-[100%] md:max-w-[calc(50%-calc(var(--spacing)*6))]  w-full aspect-[0.795]',
    },
    {
      image: OurProjectImage_2,
      text: 'HOSPITALITY',
      href: 'projects/hospitality',
      className:
        'max-h-[100%] max-w-[100%] md:max-w-[calc(50%-calc(var(--spacing)*6))]  w-full aspect-[0.795]',
    },
  ];
  return (
    <Section title={'OUR PROJECTS'} id="casadora-projects">
      <div className="flex items-center flex-wrap justify-center gap-6 mb-10">
        {projectItems.map((item, index) => (
          <Card key={index} {...item}></Card>
        ))}
      </div>
    </Section>
  );
};

export default OurProjects;
