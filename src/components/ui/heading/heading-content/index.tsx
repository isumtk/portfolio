interface SubHeadingWithContentProps {
  subheading?: string;
  content?: string;
}

const SubHeadingWithContent: React.FC<SubHeadingWithContentProps> = ({
  subheading,
  content,
}) => {
  return (
    <div className="flex flex-wrap items-center text-sm text-slate-500 md:text-base lg:text-xl">
      <p>{subheading}</p>
      <span className="mx-2 h-1 w-1 animate-pulse rounded-full bg-white" />
      <p className="text-slate-600">{content}</p>
    </div>
  );
};

export default SubHeadingWithContent;
