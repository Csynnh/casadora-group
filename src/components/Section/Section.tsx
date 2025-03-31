interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="mx-auto w-full">
      <div className="py-10">
        <h2 className="text-center">{title}</h2>
      </div>
      <div className=" w-full">{children}</div>
    </section>
  );
};

export default Section;
