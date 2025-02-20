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
    description: '헬로핏 - 스포츠 시설 추천 웹 서비스 (Next.js, Zustand)',
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='relative py-32 px-8 mx-auto text-center text-white overflow-hidden experience-section'
    >
      {/* 배경 그라데이션 */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#001f3f] to-[#5e548e] z-[-1]' />

      <div className='relative z-10'>
        <h2 className='text-5xl font-bold mb-16 text-white uppercase tracking-wide'>
          Experience
        </h2>

        {/* 카드 컨테이너 */}
        <div className='flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className='relative experience-card p-6 w-[300px] md:w-[400px]'
            >
              <span className='text-3xl'>{exp.icon}</span>
              <h3 className='text-xl font-semibold text-white mt-4 uppercase tracking-wider'>
                {exp.category}
              </h3>
              <p className='text-sm text-gray-300 mt-2'>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          position: relative;
        }

        /* 카드 스타일 (픽셀 느낌) */
        .experience-card {
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid white;
          font-family: 'Courier New', Courier, monospace;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease-in-out;
          position: relative;
        }

        /* 카드 사이 연결선 추가 */
        .experience-card::after {
          content: '';
          position: absolute;
          bottom: -25px;
          left: 50%;
          width: 2px;
          height: 50px;
          background: white;
          opacity: 0.5;
        }

        /* 마지막 카드에는 연결선 없애기 */
        .experience-card:last-child::after {
          display: none;
        }

        /* 카드 호버 효과 */
        .experience-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
