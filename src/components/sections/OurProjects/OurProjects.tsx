import Section from '../Section/Section';
import OurProjectImage_1 from '../../../assets/our_projects/our_project_1.png';
import OurProjectImage_2 from '../../../assets/our_projects/our_project_2.jpeg';
import { Card } from '../../common';

const OurProjects = () => {
  return (
    <Section title={'OUR PROJECTS'}>
      <div className="flex items-center flex-wrap justify-center gap-6 mb-10">
        <Card
          image={OurProjectImage_1}
          text="Architecture"
          href="#"
          className="max-h-[100%] max-w-[100%] md:max-w-[calc(50%-calc(var(--spacing)*6))]  w-full aspect-[0.795]"
        ></Card>

        <Card
          image={OurProjectImage_2}
          text="Architecture"
          href="#"
          className="max-h-[100%] max-w-[100%] md:max-w-[calc(50%-calc(var(--spacing)*6))]  w-full aspect-[0.795]"
        ></Card>
      </div>
    </Section>
  );
};

export default OurProjects;
