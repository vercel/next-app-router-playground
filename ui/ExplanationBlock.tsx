export const ExplanationBlock = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section>
      <div className="mb-4 text-2xl font-bold text-white">{title}</div>
      <div className="text-white/70">{description}</div>
    </section>
  );
};
