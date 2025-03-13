import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const astronautY = useTransform(scrollYProgress, [0, 1], ['50%', '-10%']);

  const smoothScrollTo = (targetY: number, duration = 1000) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * easeInOutCubic);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const targetY = aboutSection.offsetTop;
      smoothScrollTo(targetY, 2000);
    }
  };

  return (
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
        IGNITING THE WEB WITH A TOUCH OF SPARKLE <br /> AND TECHNOLOGY
      </motion.p>

      <motion.button
        className='mt-8 px-8 py-4 border border-white text-white text-lg uppercase tracking-wider rounded-lg 
                   hover:bg-white hover:text-black transition-all relative z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        onClick={handleScrollToAbout}
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
  );
}
