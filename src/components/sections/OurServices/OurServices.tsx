import Section from '../Section/Section';
import OurServiceImage_1 from '../../../assets/images/our_services/our_service_1.png';
import OurServiceImage_2 from '../../../assets/images/our_services/our_service_2.png';
import OurServiceImage_3 from '../../../assets/images/our_services/our_service_3.png';
import { Card } from '../../common';

const OurServices = () => {
  return (
    <Section title={'OUR SERVICES'}>
      <div className="flex items-center flex-wrap justify-center gap-[2rem] xl:gap-[4.375rem] mb-10 px-[6.75em]">
        <Card
          image={OurServiceImage_1}
          text="Architecture"
          href="#"
          className="max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] lg:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full"
        ></Card>
        <Card
          image={OurServiceImage_2}
          text="Interior Design"
          className="max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] lg:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full"
          href="#"
        ></Card>
        <Card
          image={OurServiceImage_3}
          text="MANUFACTURING"
          className="max-w-[60%] md:max-w-[calc(50%-4.375rem/2)] lg:max-w-[calc(33.33%-4.375rem/3*2)] w-full aspect-[0.88] max-h-full"
          href="#"
        ></Card>
      </div>
    </Section>
  );
};

export default OurServices;
