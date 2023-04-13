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
          <div className="flex w-full flex-col flex-wrap justify-start gap-8 bg-inherit font-normal uppercase leading-relaxed tracking-wide md:w-3/4 md:flex-row md:justify-end lg:text-2xl">
            <div>LinkedIn</div>
            <div>Twitter</div>
            <div>Github</div>
            <div>Email</div>
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
