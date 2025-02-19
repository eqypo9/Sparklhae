import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Footer from '@/components/Footer';

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
        className='relative flex flex-col items-center justify-center min-h-screen text-center 
                   text-white font-futuristic overflow-hidden'
      >
        <motion.h1
          className='text-[10vw] font-light tracking-widest leading-[1.1] uppercase font-futuristic relative z-10'
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
          Pushing the boundaries of design and technology, one pixel at a time.
        </motion.p>

        <motion.button
          className='mt-8 px-8 py-4 border border-white text-white text-lg uppercase tracking-wider rounded-lg 
                     hover:bg-white hover:text-black transition-all relative z-10'
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

      {/* About Me */}
      <section
        id='about'
        className='relative py-32 px-8 max-w-5xl mx-auto text-center text-white'
      >
        <motion.h2
          className='text-6xl font-bold mb-8 text-purpleAccent uppercase tracking-wider'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className='text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Exploring the intersection of creativity and code. Passionate about
          building user-centric, visually captivating web experiences.
        </motion.p>
      </section>

      {/* Skills */}
      <section
        id='skills'
        className='py-32 px-8 max-w-5xl mx-auto text-center text-white'
      >
        <h2 className='text-5xl font-bold mb-8 text-purpleAccent uppercase tracking-wide'>
          Skills
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg'>
          <span className='bg-gray-700/60 px-6 py-3 rounded-lg text-neon'>
            React
          </span>
          <span className='bg-gray-700/60 px-6 py-3 rounded-lg text-neon'>
            Next.js
          </span>
          <span className='bg-gray-700/60 px-6 py-3 rounded-lg text-neon'>
            TypeScript
          </span>
          <span className='bg-gray-700/60 px-6 py-3 rounded-lg text-neon'>
            Tailwind CSS
          </span>
          <span className='bg-gray-700/60 px-6 py-3 rounded-lg text-neon'>
            Zustand
          </span>
        </div>
      </section>

      {/* Experience */}
      <section
        id='experience'
        className='py-32 px-8 max-w-5xl mx-auto text-center text-white'
      >
        <h2 className='text-5xl font-bold mb-8 text-purpleAccent uppercase tracking-wide'>
          Experience
        </h2>
        <p className='text-lg'>셈웨어 인턴, 코드잇 일경험 인턴</p>
      </section>

      {/* Projects */}
      <section
        id='projects'
        className='py-32 px-8 max-w-5xl mx-auto text-center text-white'
      >
        <h2 className='text-5xl font-bold mb-8 text-purpleAccent uppercase tracking-wide'>
          Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg'>
          <a
            href='/projects/hellofit'
            className='bg-gray-700/60 text-neon p-4 rounded-lg hover:bg-gray-600'
          >
            헬로핏
          </a>
          <a
            href='/projects/global-nomad'
            className='bg-gray-700/60 text-neon p-4 rounded-lg hover:bg-gray-600'
          >
            글로벌 노마드
          </a>
          <a
            href='/projects/the-give'
            className='bg-gray-700/60 text-neon p-4 rounded-lg hover:bg-gray-600'
          >
            더 줄게
          </a>
        </div>
      </section>
      <div className='relative w-full h-[50vh] flex items-center justify-center overflow-hidden'>
        {/* 지구 이미지 */}
        <motion.img
          src='/images/earth.png'
          alt='Earth'
          className='absolute top-[-20%] left-1/2 transform -translate-x-1/2 max-w-lg'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <Footer />
    </>
  );
}
