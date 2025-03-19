import { motion } from 'framer-motion';
import { useState } from 'react';
import GridBackground from '@/components/GridBackground';
import Image from 'next/image';
import astronautIcon from '../../../public/favicon.ico';
import myPhoto from '../../../public/images/my-photo.png';
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
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);

  const toggleImage = () => {
    setIsPhotoVisible((prev) => !prev);
  };

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

      <div className='relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-12 max-w-5xl mx-auto'>
        {/* 왼쪽 영역 - 프로필 + 상태 메시지 박스 */}
        <div
          className='relative flex flex-col items-center bg-gray-900/70 px-8 py-10 
                rounded-2xl shadow-lg w-full md:w-1/2 md:h-full flex-grow'
        >
          {/* 우주비행사 (클릭 시 내 프로필 사진으로 변경) */}
          <div
            className='relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-400 shadow-xl cursor-pointer'
            onClick={toggleImage}
          >
            <motion.div
              className='absolute inset-0 w-full h-full'
              animate={{ opacity: isPhotoVisible ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={astronautIcon}
                alt='Astronaut Image'
                layout='fill'
                objectFit='cover'
              />
            </motion.div>

            <motion.div
              className='absolute inset-0 w-full h-full rounded-full overflow-hidden'
              animate={{ opacity: isPhotoVisible ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={myPhoto}
                alt='My Photo'
                layout='fill'
                objectFit='cover'
              />
            </motion.div>
          </div>

          {/* 클릭 안내 텍스트 */}
          {!isPhotoVisible && (
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className='absolute top-[15px] left-[43%] translate-x-[-60px]
               text-white text-sm font-semibold 
               whitespace-nowrap z-20 text-center'
            >
              Click Me !
            </motion.div>
          )}

          {/* 프로필 정보 */}
          <h2 className='text-2xl font-bold mt-4 tracking-wide text-white'>
            정성혜
          </h2>
          <p className='text-sm text-gray-300 mt-1'>웹 프론트엔드 개발자</p>
          <p className='text-sm text-gray-200 mt-1'>1999.06.13</p>

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
            <button onClick={handlePrev}>
              <ArrowLeft size={28} />
            </button>
            <button onClick={handleNext}>
              <ArrowRight size={28} />
            </button>
          </div>
        </div>

        {/* 오른쪽 영역 - 기본 정보 & 자격증 */}
        <div className='flex flex-col items-center justify-center w-full md:w-1/2 md:h-full flex-grow gap-8'>
          {/* 기본 정보 카드 */}
          <div className='bg-gray-900/70 p-6 md:p-8 rounded-2xl shadow-md max-w-lg w-full'>
            <h3 className='text-2xl font-bold text-cosmic_teal text-center mb-4 tracking-wide'>
              INFORMATION
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
          <div className='bg-gray-900/70 p-6 md:p-8 rounded-2xl shadow-md max-w-lg w-full'>
            <h3 className='text-2xl font-bold text-cosmic_teal text-center mb-4 tracking-wide'>
              CERTIFICATIONS
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className='p-4 rounded-lg shadow-md flex flex-col items-center border border-gray-400'
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
