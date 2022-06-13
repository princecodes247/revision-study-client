import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex justify-center items-center">
        <section className='flex'>
          <div className="flex-1">
          <h1 className="text-4xl font-bold">RevisionStudy</h1>
          <p className="text-xl">
            A simple app to help you revise your vocabulary.
          </p>
          </div>
          <div className="hero_img flex-1">

          </div>
        </section>
        <section className='flex'>
          <div className="">Features</div>
          <div className="">Features</div>
          <div className="">Features</div>
          <div className="">Features</div>
          <div className="">Features</div>
        </section>
        <div className="banner_sect">
          We are 1% for something
        </div>
      </main>
    </div>
  )
}

export default Home
