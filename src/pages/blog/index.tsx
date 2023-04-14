import { Navbar } from "@/components/ui";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Sumit Kumar</title>
        <meta
          name="description"
          content="Check out my blog wherein I hightlight the things I am learning and things I have built."
        />
      </Head>
      <main className="flex min-h-screen select-none snap-y flex-col items-center scroll-smooth px-8 pb-16 pt-8 md:py-16 ">
        <Navbar />

        <div>Coming Soon !</div>
      </main>
    </>
  );
};

export default Blog;
