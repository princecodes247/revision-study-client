import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen">
        <section className="flex items-center h-screen">
          <div className=" flex flex-col items-center justify-center flex-1">
            <h1 className="text-7xl font-bold">RevisionStudy</h1>
            <p className="text-xl">
              A simple app to help you revise your vocabulary.
            </p>
            <button className="my-4 text-white py-3 px-6 rounded bg-blue-600">
              Get Started!
            </button>
            <button className="py-3 px-6 rounded border border-gray-200">
              Get Started!
            </button>
          </div>
          <div className="hero_img flex-1">djsosdfo</div>
        </section>
        <section className="flex gap-4 w-full p-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-12 flex-1 text-center bg-gray-100">
              Features
            </div>
          ))}
        </section>
        <div className="flex p-8 items-center justify-center">
          We are 1% for something
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
