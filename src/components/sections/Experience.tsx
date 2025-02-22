import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Users, Briefcase, Laptop2 } from 'lucide-react';
import Clouds from '../Clouds';

const experiences = [
  {
    category: 'Education',
    icon: <GraduationCap size={28} className='text-white' />,
    description: '덕성여자대학교 IT미디어공학 전공 (졸업)',
  },
  {
    category: 'Bootcamp & Training',
    icon: <Laptop2 size={28} className='text-white' />,
    description: '코드잇 프론트엔드 부트캠프 (6개월 과정)',
  },
  {
    category: 'Developer Community',
    icon: <Users size={28} className='text-white' />,
    description: 'GDSC 덕성 챕터 (Google Developer Student Club)',
  },
  {
    category: 'Internship Experience',
    icon: <Briefcase size={28} className='text-white' />,
    description: '셈웨어 프론트엔드 인턴 (AlgeoMath UI 개선 및 성능 최적화)',
  },
  {
    category: 'Internship Experience',
    icon: <Briefcase size={28} className='text-white' />,
    description: '코드잇 일경험 프로그램 (Next.js 기반 프로젝트 진행)',
  },
  {
    category: 'Projects & Competitions',
    icon: <Rocket size={28} className='text-white' />,
    description: '헬로핏 - 스포츠 시설 추천 웹 서비스 (Next.js, Zustand)',
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='relative py-32 px-8 mx-auto text-center text-white overflow-hidden 
                 bg-gradient-to-b from-[#0a0a0a] via-[#00423f] via-[#2e5b70] to-[#998fc6]'
    >
      <Clouds />
      <div className='relative z-10'>
        <h2 className='text-5xl font-bold mb-16 text-white uppercase tracking-wide'>
          Experience
        </h2>

        <div className='relative flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className='relative bg-gray-900/80 p-6 w-[300px] md:w-[400px] rounded-lg shadow-lg 
                         flex flex-col items-center justify-center border border-gray-700 experience-card'
            >
              {exp.icon}
              <h3 className='text-xl font-semibold text-white mt-4 uppercase tracking-wider'>
                {exp.category}
              </h3>
              <p className='text-sm text-gray-300 mt-2'>{exp.description}</p>

              {index !== experiences.length - 1 && (
                <div className='absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-0 h-10 border-l-2 border-dashed border-gray-400'></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
