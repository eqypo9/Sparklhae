import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'hellofit',
    name: 'HELLOFIT',
    description: '지도 기반 주변 인기 스포츠 시설을 탐색하는 서비스',
    image: '/images/projects/hellofit.png',
    techStack: ['Next.js', 'Recoil', 'TypeScript'],
    link: '/projects/hellofit',
  },
  {
    id: 'global-nomad',
    name: 'Global Nomad',
    description: '여행 시 체험 상품을 간편하게 예약하는 서비스',
    image: '/images/projects/global-nomad.png',
    techStack: ['Next.js', 'Tailwind CSS', 'React Query'],
    link: '/projects/global-nomad',
  },
  {
    id: 'the-julge',
    name: 'The Julge',
    description: '알바 구직자와 사장님을 연결하는 서비스',
    image: '/images/projects/the-julge.png',
    techStack: ['Next.js', 'Styled Components', 'Zustand'],
    link: '/projects/the-julge',
  },
];

export default function Projects() {
  const { scrollYProgress } = useScroll();

  // 지구본이 스크롤에 따라 올라오는 애니메이션
  const earthY = useTransform(scrollYProgress, [0.8, 1], ['100%', '50%']);

  return (
    <section
      id='projects'
      className='relative py-32 px-8 max-w-6xl mx-auto text-white min-h-screen space-bg'
    >
      <h2 className='text-5xl font-bold mb-12 uppercase tracking-wide text-center'>
        Projects
      </h2>

      <div className='relative grid grid-cols-1 sm:grid-cols-3 gap-8 z-10'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            initial={{ y: 10 * (index % 2 === 0 ? 1 : -1) }}
            animate={{
              y: [10, -10, 10],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            className='bg-gray-900/80 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer'
          >
            <Link href={project.link} passHref>
              <div>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={250}
                  className='rounded-md'
                />
                <h3 className='text-xl font-semibold mt-4'>{project.name}</h3>
                <p className='text-sm text-gray-400 mt-2'>
                  {project.description}
                </p>

                {/* 기술 스택 - 애니메이션 & 스타일 추가 */}
                <div className='flex flex-wrap justify-center gap-2 mt-4'>
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className='bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 text-xs font-semibold rounded-full text-gray-300 shadow-lg transition-all duration-300 hover:from-cosmic_teal hover:to-cyan-500 hover:text-black'
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 지구본 애니메이션 */}
      <motion.div
        style={{ y: earthY }}
        className='absolute bottom-0 w-full flex justify-center'
      >
        <Image src='/images/earth.png' alt='Earth' width={800} height={800} />
      </motion.div>

      {/* 우주 배경 스타일 */}
      <style jsx>{`
        .space-bg {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(0, 0, 0, 0.8) 60%,
            rgba(0, 0, 0, 1) 100%
          );
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
