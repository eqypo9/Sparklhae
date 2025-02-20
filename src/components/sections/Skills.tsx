import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import skills from '@/data/skills';
import StarBackground from '@/components/StarBackground';

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yPosition = useTransform(scrollYProgress, [0, 1], ['-50vh', '120vh']);
  const xPosition = useTransform(scrollYProgress, [0, 1], ['-40vw', '60vw']);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '720deg']);

  // ✅ 배경 그라데이션 변경 (소행성 이동에 따라 색감 변화)
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 1],
    [
      'linear-gradient(to bottom, #071e3d, #0c2a48, #021015)',
      'linear-gradient(to bottom, #021015, #0c2a48, #071e3d)',
    ]
  );

  return (
    <section
      ref={ref}
      id='skills'
      className='relative py-32 px-8 mx-auto text-center text-white overflow-hidden'
    >
      <motion.div
        className='absolute inset-0'
        style={{ background: bgGradient }}
      >
        <StarBackground numStars={100} />

        <motion.div
          className='absolute'
          style={{ x: xPosition, y: yPosition, scale, opacity, rotate }}
        >
          <Image
            src='/images/asteroid.png'
            alt='Asteroid'
            width={300}
            height={300}
            className='mix-blend-screen'
          />
        </motion.div>
      </motion.div>

      <div className='relative z-10'>
        <h2 className='text-5xl font-bold mb-12 text-white uppercase tracking-wide'>
          Skills
        </h2>

        <div className='flex flex-col gap-12'>
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className='text-3xl font-semibold text-cosmic_teal mb-6'>
                {category.category}
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
                {category.items.map((skill) => {
                  const IconComponent = skill.icon as React.ElementType;
                  return (
                    <div
                      key={skill.name}
                      className='bg-gray-800/60 p-6 rounded-lg flex flex-col items-center justify-center shadow-md transition-all hover:scale-105 hover:bg-gray-700'
                    >
                      <IconComponent className='text-5xl text-white mb-4' />
                      <p className='text-lg font-semibold'>{skill.name}</p>
                      <span className='text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300 mt-2'>
                        {skill.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
