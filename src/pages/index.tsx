import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sparkle | Home</title>
        <meta
          name='description'
          content='정성혜의 포트폴리오 홈 페이지입니다.'
        />
      </Head>

      {/* Hero Section */}
      <section className='relative flex flex-col items-center justify-center min-h-screen text-center bg-black text-white font-futuristic overflow-hidden'>
        <motion.h1
          className='text-[10vw] font-light tracking-widest text-white leading-[1.1] uppercase font-futuristic'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          JUNG SUNGHAE'S
          <br />
          PORTFOLIO
        </motion.h1>
        <motion.p
          className='mt-6 text-lg max-w-2xl text-gray-400 tracking-wider'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get ready to embark on a voyage of innovation, design, and technology.
        </motion.p>
        <motion.button
          className='mt-8 px-8 py-4 border border-white text-white text-lg uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Start Exploring
        </motion.button>
        {/* Astronaut Image */}
        <motion.img
          src='/images/astronaut.png'
          alt='Astronaut'
          className='mt-16 mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </section>
    </>
  );
}
