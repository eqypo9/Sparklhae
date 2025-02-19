import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const astronautY = useTransform(scrollYProgress, [0, 1], ['50%', '-10%']);

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
      <section
        ref={ref}
        className='relative flex flex-col items-center justify-center min-h-screen text-center bg-black text-white font-futuristic overflow-hidden'
      >
        <motion.h1
          className='text-[10vw] font-light tracking-widest text-white leading-[1.1] uppercase font-futuristic relative z-10'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          JUNG SUNGHAE'S
          <br />
          PORTFOLIO
        </motion.h1>

        <motion.p
          className='mt-6 text-lg max-w-2xl text-gray-400 tracking-wider relative z-10'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Illuminating the web with precision and creativity.
        </motion.p>

        <motion.button
          className='mt-8 px-8 py-4 border border-white text-white text-lg uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all relative z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Start Exploring
        </motion.button>

        <motion.img
          src='/images/astronaut.png'
          alt='Astronaut'
          className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 z-0'
          style={{ y: astronautY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </section>

      {/* Sections */}
      <section
        id='about'
        className='py-20 px-8 max-w-4xl mx-auto text-center text-white'
      >
        <h2 className='text-4xl font-bold mb-6 text-purpleAccent'>About Me</h2>
        <p className='text-lg'>정성혜의 프론트엔드 개발 여정과 철학</p>
      </section>

      <section
        id='skills'
        className='py-20 px-8 max-w-4xl mx-auto text-center text-white'
      >
        <h2 className='text-4xl font-bold mb-6 text-purpleAccent'>Skills</h2>
        <p className='text-lg'>
          React, Next.js, TypeScript, Tailwind CSS, Zustand
        </p>
      </section>

      <section
        id='experience'
        className='py-20 px-8 max-w-4xl mx-auto text-center text-white'
      >
        <h2 className='text-4xl font-bold mb-6 text-purpleAccent'>
          Experience
        </h2>
        <p className='text-lg'>셈웨어 인턴, 코드잇 일경험 인턴</p>
      </section>

      <section
        id='projects'
        className='py-20 px-8 max-w-4xl mx-auto text-center text-white'
      >
        <h2 className='text-4xl font-bold mb-6 text-purpleAccent'>Projects</h2>
        <p className='text-lg'>헬로핏, 글로벌 노마드, 더 줄게</p>
      </section>
    </>
  );
}
