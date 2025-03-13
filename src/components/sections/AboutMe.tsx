import { motion } from 'framer-motion';
import { useState } from 'react';
import GridBackground from '@/components/GridBackground';
import Image from 'next/image';
import astronautIcon from '../../../public/favicon.ico';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  User,
  Mail,
  Github,
  BookOpen,
} from 'lucide-react';
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
      className='relative py-32 px-8 mx-auto text-white overflow-hidden'
    >
      <GridBackground />

      <div className='relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto'>
        {/* 왼쪽 영역 - 프로필 + 상태 메시지 박스 */}
        <div
          className='relative flex flex-col items-center bg-gradient-to-b from-[#16213E] to-[#1B1D36] px-8 py-10 
                          rounded-2xl shadow-lg border border-white backdrop-blur-md w-full md:w-1/2'
        >
          {/* 우주비행사 아이콘 */}
          <div className='relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl'>
            <Image
              src={astronautIcon}
              alt='Astronaut Icon'
              layout='fill'
              objectFit='cover'
            />
          </div>

          {/* 프로필 정보 */}
          <h2 className='text-2xl font-bold mt-4 tracking-wide text-white'>
            정성혜
          </h2>
          <p className='text-sm text-gray-300 mt-1'>웹 프론트엔드 개발자</p>

          {/* 구분선 */}
          <div className='w-full border-t border-gray-500/50 my-6'></div>

          {/* 상태 메시지 */}
          <motion.h3
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-xl md:text-2xl font-bold mb-2 text-cosmic_teal tracking-wide text-center'
          >
            {messages[index].title}
          </motion.h3>
          <motion.p
            key={messages[index].content}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-md md:text-lg font-semibold text-gray-300 leading-snug text-center'
          >
            {messages[index].content}
          </motion.p>

          {/* 페이지 인디케이터 */}
          <div className='text-sm text-gray-400 mt-4'>
            {index + 1} / {messages.length}
          </div>

          {/* 이전 / 다음 버튼 */}
          <div className='flex justify-between items-center w-[250px] mt-4'>
            <button
              onClick={handlePrev}
              className='p-4 rounded-full shadow-md bg-white/20 backdrop-blur-md text-white 
                        hover:bg-white/40 transition duration-300 border border-white'
            >
              <ArrowLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              className='p-4 rounded-full shadow-md bg-white/20 backdrop-blur-md text-white 
                        hover:bg-white/40 transition duration-300 border border-white'
            >
              <ArrowRight size={28} />
            </button>
          </div>
        </div>

        {/* 오른쪽 영역 - 기본 정보 & 자격증 (한가운데 정렬) */}
        <div className='flex flex-col items-center justify-center w-full md:w-1/2 gap-8'>
          {/* 기본 정보 카드 */}
          <div
            className='bg-gradient-to-b from-[#1A1D2F] to-[#10121B] p-6 md:p-8 rounded-2xl shadow-md 
                          border border-white backdrop-blur-md max-w-lg self-center'
          >
            <h3 className='text-2xl font-bold text-cosmic_teal text-center mb-4 tracking-wide'>
              기본 정보
            </h3>
            <div className='text-lg text-gray-300 space-y-2'>
              <p className='flex items-center gap-2'>
                <User className='text-white' size={20} />
                <span className='font-semibold text-white'>Name</span>
                <span>정성혜 Jung Sunghae</span>
              </p>
              <p className='flex items-center gap-2'>
                <Mail className='text-white' size={20} />
                <span className='font-semibold text-white'>Email</span>
                <a
                  href='mailto:skyblue84411@gmail.com'
                  className='hover:text-gray-100 transition'
                >
                  skyblue84411@gmail.com
                </a>
              </p>
              <p className='flex items-center gap-2'>
                <Github className='text-white' size={20} />
                <span className='font-semibold text-white'>Github</span>
                <a
                  href='https://github.com/eqypo9'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-gray-100 transition'
                >
                  github.com/eqypo9
                </a>
              </p>
              <p className='flex items-center gap-2'>
                <BookOpen className='text-white' size={20} />
                <span className='font-semibold text-white'>Velog</span>
                <a
                  href='https://velog.io/@sparklhae'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-gray-100 transition'
                >
                  velog.io/@sparklhae
                </a>
              </p>
            </div>
          </div>

          {/* 자격증 카드 */}
          <div
            className='bg-gradient-to-b from-[#1B1D36] to-[#0D0F1B] p-6 md:p-8 rounded-2xl shadow-md 
                          border border-white backdrop-blur-md max-w-lg self-center'
          >
            <h3 className='text-2xl font-bold text-cosmic_teal text-center mb-4 tracking-wide'>
              보유 자격증
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className='bg-gradient-to-br from-[#2A2D45] to-[#1B1D36] p-4 rounded-lg shadow-md flex flex-col items-center 
                            border border-white backdrop-blur-md'
                >
                  <Award size={36} className='text-white' />
                  <h4 className='text-lg font-semibold text-white mt-2'>
                    {cert.name}
                  </h4>
                  <p className='text-sm text-gray-300'>{cert.description}</p>
                  <p className='text-xs text-gray-400'>{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
