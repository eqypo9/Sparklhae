import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import skills from '@/data/skills';

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Y축 이동
  const yPosition = useTransform(scrollYProgress, [0, 1], ['-50vh', '100vh']);

  // X축 이동
  const xPosition = useTransform(scrollYProgress, [0, 1], ['-50vw', '50vw']);

  // 크기 변화
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2]);

  // 투명도 변화
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // 회전 속도
  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '1080deg']);

  return (
    <section
      ref={ref}
      id='skills'
      className='relative py-32 px-8 mx-auto text-center text-white overflow-hidden'
    >
      <div className='absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0c2a48] to-black'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.3)_0%,rgba(0,0,0,0)_80%)] opacity-50'></div>

        <motion.div
          className='absolute'
          style={{ x: xPosition, y: yPosition, scale, opacity, rotate }}
        >
          <Image
            src='/images/globe-outline.png'
            alt='Globe Outline'
            width={500}
            height={500}
            className='mix-blend-screen'
          />
        </motion.div>
      </div>

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
