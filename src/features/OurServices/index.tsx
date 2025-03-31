import OurServiceImage_1 from '../../assets/images/our_services/our_service_1.png';
import OurServiceImage_2 from '../../assets/images/our_services/our_service_2.png';
import OurServiceImage_3 from '../../assets/images/our_services/our_service_3.png';
import { Card } from '../../components/common';
import Section from '../../components/Section/Section';
import { CardItem } from '../../types/card';

const OurServices = () => {
  const serviceItems: CardItem[] = [
    {
      image: OurServiceImage_1,
      text: 'Architecture',
      href: '/services/novaland-expo',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
    },
    {
      image: OurServiceImage_2,
      text: 'Interior Design',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
      href: '/services/interior-design',
    },
    {
      image: OurServiceImage_3,
      text: 'MANUFACTURING',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
      href: '/services/manufacturing',
    },
  ];
  return (
    <Section title={'OUR SERVICES'} id="casadora-services">
      <div className="flex items-center flex-wrap justify-center gap-[2rem] xl:gap-[min(4.375rem,3.75vw)] mb-10 px-[6.579dvw]">
        {serviceItems.map((item, index) => (
          <Card key={index} {...item}></Card>
        ))}
      </div>
    </Section>
  );
};

export default OurServices;
