import { motion } from 'framer-motion';
import { useState } from 'react';
import GridBackground from '@/components/GridBackground';
import Image from 'next/image';
import astronautIcon from '../../../public/favicon.ico';
import { ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { messages, certifications } from '@/data/aboutData';

export default function AboutMe() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % messages.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <section
      id='about'
      className='relative py-32 px-8 mx-auto text-center text-white overflow-hidden'
    >
      <GridBackground />

      <div className='relative z-10 flex flex-col items-center gap-10'>
        {/* 우주 비행사 + 말풍선 컨테이너 */}
        <div className='relative flex flex-col items-center gap-6'>
          {/* 우주 비행사 아이콘 */}
          <div className='relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg'>
            <Image
              src={astronautIcon}
              alt='Astronaut Icon'
              layout='fill'
              objectFit='cover'
            />
          </div>

          {/* 말풍선 */}
          <div className='relative bg-white text-black p-6 md:p-8 w-[500px] rounded-lg shadow-lg flex flex-col items-center'>
            <motion.h3
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-xl md:text-2xl font-bold mb-2'
            >
              {messages[index].title}
            </motion.h3>
            <motion.p
              key={messages[index].content}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-lg md:text-xl font-semibold leading-snug text-center'
            >
              {messages[index].content}
            </motion.p>

            {/* 말풍선 꼬리 */}
            <div
              className='absolute -top-5 left-1/2 transform -translate-x-1/2 w-0 h-0 
                          border-l-[20px] border-l-transparent 
                          border-b-[30px] border-b-white 
                          border-r-[20px] border-r-transparent'
            ></div>
          </div>

          {/* 페이지 인디케이터 */}
          <div className='text-sm text-gray-300 mt-2'>
            {index + 1} / {messages.length}
          </div>
        </div>

        {/* 이전 / 다음 버튼 */}
        <div className='flex justify-between items-center w-[500px] mt-4'>
          <button
            onClick={handlePrev}
            className='p-4 rounded-full shadow-md bg-white/10 backdrop-blur-md text-white 
                      hover:bg-white/20 transition duration-300'
          >
            <ArrowLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className='p-4 rounded-full shadow-md bg-white/10 backdrop-blur-md text-white 
                      hover:bg-white/20 transition duration-300'
          >
            <ArrowRight size={28} />
          </button>
        </div>

        {/* 자격증 섹션 (경험 카드 스타일) */}
        <div className='flex flex-col items-center gap-6 mt-10'>
          <h3 className='text-2xl font-bold text-white'>보유 자격증</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className='bg-gray-900/80 p-6 w-[280px] md:w-[320px] rounded-lg shadow-lg 
                           flex flex-col items-center border border-gray-700'
              >
                <Award size={40} className='text-blue-400' />
                <h4 className='text-xl font-semibold text-white mt-4'>
                  {cert.name}
                </h4>
                <p className='text-sm text-gray-300 mt-2'>{cert.description}</p>
                <p className='text-xs text-gray-400 mt-1'>{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
