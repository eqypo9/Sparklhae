import { motion } from 'framer-motion';
import Clouds from '../Clouds';
import experienceData from '@/data/experience';

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

        <div className='relative flex flex-col items-center max-w-5xl mx-auto gap-24'>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className='relative bg-gray-900/80 py-8 px-6 w-[350px] md:w-[450px] rounded-lg shadow-lg 
                         flex flex-col items-center justify-center border border-gray-700 experience-card'
            >
              {/* 아이콘 및 제목 */}
              <div className='flex items-center gap-2'>
                {exp.icon}
                <h3 className='text-xl font-semibold text-white uppercase tracking-wider'>
                  {exp.category}
                </h3>
              </div>

              {/* 기간 */}
              <p className='text-sm text-gray-400 mt-1'>{exp.period}</p>

              {/* 설명 */}
              <p className='text-sm text-cosmic_teal mt-2'>{exp.description}</p>

              {/* 상세 내용 */}
              <p className='text-xs text-gray-400 mt-2 italic whitespace-pre-line'>
                {exp.details}
              </p>

              {/* 타임라인 선 연결 */}
              {index !== experienceData.length - 1 && (
                <div
                  className='absolute bottom-[-85px] left-1/2 transform -translate-x-1/2 
                                w-0 h-[72px] border-l-2 border-dashed border-gray-400'
                ></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
