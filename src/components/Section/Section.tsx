interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="mx-auto w-full">
      <div className="py-10">
        <h2 className="text-center">{title}</h2>
      </div>
      <div className=" w-full">{children}</div>
    </div>
  );
};

export default Section;
