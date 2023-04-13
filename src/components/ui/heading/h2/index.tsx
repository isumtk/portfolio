interface H2Props {
  text: string;
}
const H2: React.FC<H2Props> = ({ text }) => {
  return (
    <h2 className="text-base font-medium md:text-lg lg:text-2xl">{text}</h2>
  );
};

export default H2;
