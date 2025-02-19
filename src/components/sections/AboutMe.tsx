import { motion } from 'framer-motion';
import GridBackground from '@/components/GridBackground';

export default function AboutMe() {
  return (
    <section
      id='about'
      className='relative py-32 px-8 mx-auto text-center text-white'
    >
      <GridBackground /> 
      <div className='relative z-10'>
        <motion.h2
          className='text-6xl font-bold mb-8 text-white uppercase tracking-wider'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className='text-xl max-w-3xl mx-auto text-textMain leading-relaxed'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          저는{' '}
          <span className='text-highlight font-semibold'>
            사용자의 작은 경험까지 세심하게 고민하는 웹 프론트엔드 개발자 정성혜
          </span>
          입니다. 버튼의 위치, 색상, 애니메이션 효과 같은 사소한 요소들도 사용자
          경험에 큰 차이를 만듭니다. 저는 이런 작은 부분까지도 고민하며,{' '}
          <span className='text-emphasis font-semibold'>
            더 나은 웹 경험을 제공하는 것
          </span>
          에 큰 보람을 느낍니다.
        </motion.p>

        <motion.p
          className='text-xl max-w-3xl mx-auto text-textMain leading-relaxed mt-6'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          최근 Global Nomad 프로젝트에서{' '}
          <span className='text-highlight font-semibold'>체험 상세 페이지</span>{' '}
          개발을 맡으며
          <span className='text-emphasis font-semibold'>
            반응형 UI 설계, 성능 최적화, 코드 구조화
          </span>
          에 대한 고민을 깊이 할 수 있었습니다. 특히, 각 디바이스마다 다른 UI가
          필요했기에, 요소를 분리하고 최적화하는 과정을 거쳤습니다. 문제 해결
          과정에서 예상치 못한 오류가 반복되었지만,{' '}
          <span className='text-highlight font-semibold'>
            끈기와 논리적인 접근
          </span>
          으로 해결하며 개발자로서 한 단계 성장할 수 있었습니다.
        </motion.p>

        <motion.p
          className='text-xl max-w-3xl mx-auto text-textMain leading-relaxed mt-6'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          저는 항상{' '}
          <span className='text-highlight font-semibold'>
            PR을 가장 먼저 확인하고 코드 리뷰를 진행하는 개발자
          </span>
          입니다. "깃허브 지박령"이라는 별명을 들을 정도로, 협업 속에서 더 나은
          해결책을 고민하며 팀원들과 소통하는 것을 중요하게 생각합니다. 사용자
          중심의 개발을 최우선으로 하며,{' '}
          <span className='text-emphasis font-semibold'>
            기술로 실질적인 가치를 전하는 개발자
          </span>
          가 되기 위해 노력하고 있습니다.
        </motion.p>
      </div>
    </section>
  );
}
