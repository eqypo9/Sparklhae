import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const clouds = [
  { src: '/images/clouds/cloud1.png', y: 300, direction: 'left' },
  { src: '/images/clouds/cloud2.png', y: 400, direction: 'right' },
  { src: '/images/clouds/cloud3.png', y: 500, direction: 'left' },
  { src: '/images/clouds/cloud4.png', y: 600, direction: 'right' },
];

export default function Clouds() {
  const { scrollYProgress } = useScroll();

  const xTransformLeft = useTransform(scrollYProgress, [0, 1], ['0px', '-300px']);
  const xTransformRight = useTransform(scrollYProgress, [0, 1], ['0px', '300px']);

  // 크기 변화 
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // 투명도 조정 (스크롤 시 선명해짐)
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.7, 0.9, 1]
  );

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none flex justify-center'>
      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            x: cloud.direction === 'left' ? xTransformLeft : xTransformRight,
            top: `${cloud.y}px`,
            scale: scaleTransform,
            opacity: opacityTransform,
          }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          className='absolute left-[calc(50%-240px)]' // 구름이 정확히 중앙에서 시작
        >
          <Image
            src={cloud.src}
            alt={`Cloud ${index}`}
            width={480}
            height={300}
            className='blur-sm'
          />
        </motion.div>
      ))}
    </div>
  );
}
