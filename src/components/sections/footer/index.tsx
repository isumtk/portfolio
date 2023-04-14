import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <section
        className="container flex
          bg-inherit pb-16 pt-8 
          font-sans font-semibold
          leading-none tracking-tighter
          md:items-center md:px-0 lg:px-8 lg:py-12"
      >
        <div className="flex h-full flex-1 flex-col gap-8 md:flex-row">
          <div className="w-full items-start text-2xl uppercase text-neutral-600 md:w-1/4 md:text-lg">
            / let &apos; s connect
          </div>
          <div className="flex w-full flex-col flex-wrap justify-start gap-8 bg-inherit font-normal capitalize leading-relaxed tracking-wide md:w-3/4 md:flex-row md:justify-end">
            <Link
              href={"https://www.linkedin.com/in/isumtk/"}
              target={"_blank"}
              className="flex items-center gap-2"
            >
              <Image
                alt="linkedin icon"
                src={"/icons/linkedin.svg"}
                width={24}
                height={24}
              />
              LinkedIn
            </Link>

            <Link
              href={"https://github.com/isumtk"}
              target={"_blank"}
              className="flex items-center gap-2"
            >
              <Image
                alt="github icon"
                src={"/icons/github.svg"}
                width={24}
                height={24}
              />
              Github
            </Link>
            <Link
              href={"mailto:krrsumit@outlook.com"}
              target={"_blank"}
              className="flex items-center gap-2 lowercase"
            >
              <Image
                alt="email icon"
                src={"/icons/email.svg"}
                width={24}
                height={24}
              />
              krrsumit@outlook.com
            </Link>
          </div>
        </div>
      </section>
      <div className="container flex items-end justify-center">
        <Image
          alt="footer icon"
          width={48}
          height={48}
          src={"/icons/footer-icon.svg"}
          className="animate-bounce"
        />
      </div>
    </div>
  );
};

export default Footer;
