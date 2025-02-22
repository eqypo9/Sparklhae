import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const clouds = [
  {
    src: '/images/clouds/cloud1.png',
    y: 300,
    direction: 'left',
    xEnd: '-200px',
  },
  {
    src: '/images/clouds/cloud2.png',
    y: 400,
    direction: 'right',
    xEnd: '220px',
  },
  {
    src: '/images/clouds/cloud3.png',
    y: 500,
    direction: 'left',
    xEnd: '-320px',
  },
  {
    src: '/images/clouds/cloud4.png',
    y: 600,
    direction: 'right',
    xEnd: '330px',
  },
];

export default function Clouds() {
  const { scrollYProgress } = useScroll();

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none flex justify-center'>
      {clouds.map((cloud, index) => {
        // 구름마다 다른 x 이동값 적용
        const xTransform = useTransform(
          scrollYProgress,
          [0, 1],
          ['0px', cloud.xEnd]
        );

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              x: xTransform,
              top: `${cloud.y}px`,
            }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className='absolute left-[calc(50%-240px)]'
          >
            <Image
              src={cloud.src}
              alt={`Cloud ${index}`}
              width={480}
              height={300}
              className='blur-sm'
            />
          </motion.div>
        );
      })}
    </div>
  );
}
