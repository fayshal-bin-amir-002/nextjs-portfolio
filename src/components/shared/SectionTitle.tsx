const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-4xl md:text-5xl font-semibold text-main text-center mb-8 md:mb-10 lg:mb-12">
      {title}
    </h1>
  );
};

export default SectionTitle;
