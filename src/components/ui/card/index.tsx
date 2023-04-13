import Image from "next/image";

export interface CardProps {
  label: string;
  alt?: string;
  imgSize?: number;
  src?: string;
  imgStyle?: string;
  dark?: boolean;
}

const Card: React.FC<CardProps> = ({
  label,
  alt,
  imgSize = 24,
  imgStyle,
  src,
  dark = true,
}) => {
  return (
    <span
      className={`
        flex cursor-default 
        items-center gap-2 
        rounded-md px-2 
        py-1 
        ${dark ? "bg-neutral-800 text-white" : "bg-white text-[#101010]"}`}
    >
      {src && (
        <Image
          alt={`${alt} icon`}
          height={imgSize}
          width={imgSize}
          className={imgStyle}
          src={src}
        />
      )}
      <span>{label}</span>
    </span>
  );
};

export default Card;
