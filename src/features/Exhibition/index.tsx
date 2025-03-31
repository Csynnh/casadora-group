import OurServiceImage_1 from '../../assets/images/our_services/our_service_1.png';
import OurServiceImage_2 from '../../assets/images/our_services/our_service_2.png';
import OurServiceImage_3 from '../../assets/images/our_services/our_service_3.png';
import { Card } from '../../components/common';
import Section from '../../components/Section/Section';
import { CardItem } from '../../types/card';

const Exhibition = () => {
  const exhibitionItems: CardItem[] = [
    {
      image: OurServiceImage_1,
      text: 'Novaland Expo',
      href: '/exhibition/novaland-expo',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
    },
    {
      image: OurServiceImage_2,
      text: 'Hawa Expo',
      href: '/exhibition/hawa-expo',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
    },
    {
      image: OurServiceImage_3,
      text: 'MANUFACTURING',
      href: '/exhibition/manufacturing',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
    },
    {
      image: OurServiceImage_1,
      text: 'Architecture',
      href: '/exhibition/architecture',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
    },
    {
      image: OurServiceImage_2,
      text: 'Interior Design',
      href: '/exhibition/interior-design',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
    },
    {
      image: OurServiceImage_3,
      text: 'MANUFACTURING',
      href: '/exhibition/manufacturing',
      className:
        'max-w-[90%] sm:max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] xl:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full',
    },
  ];

  return (
    <Section title={'OUR EXHIBITION'}>
      <div className="flex items-center flex-wrap justify-center gap-[2rem] xl:gap-[min(4.375rem,3.75vw)] mb-14 px-[6.579dvw]">
        {exhibitionItems.map((item, index) => (
          <Card key={index} {...item}></Card>
        ))}
      </div>
    </Section>
  );
};

export default Exhibition;
