import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container relative mb-2 lg:hidden">
        <span className="flex cursor-default select-none items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded bg-green-400" /> Open
          to new opportunities
        </span>
      </div>
      <hr className="container h-1 rounded bg-white" />
      <div className="container flex h-16 items-center justify-between bg-inherit">
        <span className="flex-1 font-medium">
          <Link href={"/"}>Sumit Kumar Rajput</Link>
        </span>
        <span className="hidden flex-1 cursor-default select-none items-center justify-center gap-2 lg:flex">
          <span className="h-2 w-2 animate-pulse rounded bg-green-400" /> Open
          to new opportunities
        </span>
        <div className="flex flex-1 items-center justify-end gap-1 overflow-x-auto font-medium md:gap-6 ">
          <Link href={"/me"}>
            <span className="hidden md:inline-block">Me</span>
          </Link>
          <Link href={"/blog"}>
            <span>Blog</span>
          </Link>
          <Link href={"/docs/SumitKumarRajput.pdf"}>
            <span className="hidden md:inline-block">Resume</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
