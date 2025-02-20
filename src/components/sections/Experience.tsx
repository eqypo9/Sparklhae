import { motion } from 'framer-motion';

const experiences = [
  {
    category: 'Education',
    icon: '🎓',
    description: '덕성여자대학교 IT미디어공학 전공 (졸업)',
  },
  {
    category: 'Bootcamp & Training',
    icon: '💻',
    description: '코드잇 프론트엔드 부트캠프 (6개월 과정)',
  },
  {
    category: 'Developer Community',
    icon: '🛠',
    description: 'GDSC 덕성 챕터 (Google Developer Student Club)',
  },
  {
    category: 'Internship Experience',
    icon: '🏢',
    description: '셈웨어 프론트엔드 인턴 (AlgeoMath UI 개선 및 성능 최적화)',
  },
  {
    category: 'Internship Experience',
    icon: '🏢',
    description: '코드잇 일경험 프로그램 (Next.js 기반 프로젝트 진행)',
  },
  {
    category: 'Projects & Competitions',
    icon: '🚀',
    description: '헬로핏 (스포츠 시설 추천 웹 서비스, Next.js)',
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='relative py-32 px-8 mx-auto text-center text-white overflow-hidden experience-section'
    >
      <div className='relative z-10'>
        <h2 className='text-5xl font-bold mb-12 text-white uppercase tracking-wide'>
          Experience
        </h2>

        <div className='grid grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className='relative bg-gray-900/80 backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col items-center justify-center experience-card'
            >
              <span className='text-4xl'>{exp.icon}</span>
              <h3 className='text-2xl font-semibold text-cosmic_teal mt-4'>
                {exp.category}
              </h3>
              <p className='text-lg text-gray-300 mt-2'>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          background: linear-gradient(to bottom, #011627, #003459, #011627);
          position: relative;
        }

        .experience-section::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 5%;
          width: 90%;
          height: 80%;
          background-image: url('/images/dotted-curve.svg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          opacity: 0.6;
        }

        .experience-card {
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: transf#05030319;
        }

        .experience-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
