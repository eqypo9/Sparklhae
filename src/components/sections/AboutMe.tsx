import { motion } from 'framer-motion';
import { useState } from 'react';
import GridBackground from '@/components/GridBackground';
import Image from 'next/image';
import astronautIcon from '../../../public/favicon.ico';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BadgeDisplay from '@/components/BadgeDisplay';

const messages = [
  {
    title: '사용자 경험을 고민하는 개발자',
    content: '저는 사용자의 경험을 세심하게 고민하는 프론트엔드 개발자입니다!',
  },
  {
    title: '작은 요소가 큰 변화를 만든다',
    content: '버튼 하나의 색상도 사용자의 경험을 바꾼다고 생각합니다.',
  },
  {
    title: '코드 한 줄의 가치',
    content: '코드 한 줄이 사용자에게 더 나은 경험을 줄 수 있습니다.',
  },
];

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

      <div className='relative z-10 flex flex-col items-center gap-6'>
        <div className='flex gap-10 items-center'>
          {/* 우주 비행사 아이콘 */}
          <div className='relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg'>
            <Image
              src={astronautIcon}
              alt='Astronaut Icon'
              layout='fill'
              objectFit='cover'
            />
          </div>

          {/* 프로필 카드 */}
          <div className='relative bg-white text-black p-6 md:p-8 w-[500px] md:w-[500px] rounded-lg shadow-lg flex flex-col items-center'>
            <motion.h3
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-xl md:text-2xl font-bold mb-4'
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
          </div>
        </div>

        {/* 이전 / 다음 버튼 */}
        <div className='flex justify-between w-[500px] mt-4'>
          <button
            onClick={handlePrev}
            className='p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700'
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className='p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700'
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* 뱃지 컴포넌트 */}
        {/* <BadgeDisplay /> */}
      </div>
    </section>
  );
}
