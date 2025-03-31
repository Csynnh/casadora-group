import Section from '../../components/Section/Section';
import AboutImage from '../../assets/about/about_1.jpeg';

const About = () => {
  return (
    <Section title="ABOUT US">
      <div className="px-[min(4rem,_4.21875vw)] max-w-screen">
        <div className="grid grid-cols-1 lg:grid-cols-[48.55%_1fr] gap-[3vw] lg:gap-[min(4.375rem,_5.4vw)] mb-14 lg:mb-10">
          <div className="leading-[1.625] text-[#414042] font-[Raleway]">
            Founded in 2013, initially as manufacturer of classical luxury
            furniture for export to Europe, Russia and China, the Company later
            evolved into a full-service, bespoke interior designer with a
            professional all-under-one-roof production facility located near Ho
            Chi Minh City, Vietnam.
            <br />
            <br />
            Our Design Office works along some world-known architects and
            designers to transform their unique ideas into reality. From Concept
            to 3D visualization, ID drawings to shop drawings, Casadora Design
            Services constantly delivers the results the project owners’ demand.
          </div>
          <div className="aspect-[1.775]">
            <img
              src={AboutImage}
              alt="AboutImage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:hidden gap-[3vw] lg:gap-[min(4.375rem,_5.4vw)]  mb-14 lg:mb-10">
          <div className="leading-[1.625] text-[#414042] font-[Raleway]">
            Founded in 2013, initially as manufacturer of classical luxury
            furniture for export to Europe, Russia and China, the Company later
            evolved into a full-service, bespoke interior designer with a
            professional all-under-one-roof production facility located near Ho
            Chi Minh City, Vietnam.
            <br />
            <br />
            Our Design Office works along some world-known architects and
            designers to transform their unique ideas into reality. From Concept
            to 3D visualization, ID drawings to shop drawings, Casadora Design
            Services constantly delivers the results the project owners' demand.
          </div>
          <div className="aspect-[1.775]">
            <img
              src={AboutImage}
              alt="AboutImage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[1fr_48.55%] gap-[min(4.375rem,_5.4vw)] mb-10">
          <div className="aspect-[1.775]">
            <img
              src={AboutImage}
              alt="AboutImage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-[1.625] text-[#414042] font-[Raleway]">
            Founded in 2013, initially as manufacturer of classical luxury
            furniture for export to Europe, Russia and China, the Company later
            evolved into a full-service, bespoke interior designer with a
            professional all-under-one-roof production facility located near Ho
            Chi Minh City, Vietnam.
            <br />
            <br />
            Our Design Office works along some world-known architects and
            designers to transform their unique ideas into reality. From Concept
            to 3D visualization, ID drawings to shop drawings, Casadora Design
            Services constantly delivers the results the project owners' demand.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
