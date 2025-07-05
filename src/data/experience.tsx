import { GraduationCap, Rocket, Users, Briefcase, Laptop2 } from 'lucide-react';

const experienceData = [
  {
    category: 'Education',
    icon: <GraduationCap size={32} className='text-white' />,
    period: '2020.03 - 2025.02',
    description: '덕성여자대학교 IT미디어공학 전공 (졸업)',
    details: `전공 지식을 바탕으로 웹 개발에 대한 깊은 이해를 쌓음. 
특히 UX/UI 설계 및 성능 최적화에 관심을 가지며, 
프론트엔드 기술을 실무적으로 활용하는 법을 학습.`,
  },
  {
    category: 'Developer Community',
    icon: <Users size={32} className='text-white' />,
    period: '2023.08 - 2024.07',
    description: 'GDSC 덕성 챕터 (Google Developer Student Club)',
    details: `React 및 머신러닝 관련 스터디 진행하며 기술 역량 강화. 
또래 개발자들과 네트워킹을 통해 다양한 개발 경험 공유. 
2024 New Year 해커톤에서 백엔드·머신러닝 개발자와의 협업을 경험.`,
  },
  {
    category: 'Internship Experience',
    icon: <Briefcase size={32} className='text-white' />,
    period: '2023.09 - 2023.12',
    description: '셈웨어 R&D 인턴 (AlgeoMath UI 개선 및 성능 최적화)',
    details: `React & TypeScript 기반으로 AlgeoMath 3D UI 유지보수 수행. 
고객 요청에 맞춰 큐브 테두리 가시성 조절 및 동적 색상 변경 기능 추가. 
Mathcore API를 활용하여 인터랙티브 디지털 교과서 제작. 
성능 개선 및 유지보수를 통해 사용자 경험 향상에 기여.`,
  },
  {
    category: 'Bootcamp & Training',
    icon: <Laptop2 size={32} className='text-white' />,
    period: '2024.02 - 2024.08',
    description: '코드잇 프론트엔드 부트캠프 (6개월 과정)',
    details: `Next.js, TypeScript 등 최신 웹 기술을 집중적으로 학습. 
프로젝트 기반 실습을 통해 실무 코드 작성 및 코드 리뷰 경험 축적.`,
  },
  {
    category: 'Projects & Competitions',
    icon: <Rocket size={32} className='text-white' />,
    period: '2024.11 - 2024.12',
    description: '헬로핏 - 스포츠 시설 추천 웹 서비스 (Next.js, TypeScript)',
    details: `공공데이터 API를 활용한 스포츠 시설 탐색 서비스 개발. 
지도 기반 UI/UX 개선 및 최적화 수행. 
필터링 및 인기 시설 추천 기능 추가하여 사용자 편의성 증대.`,
  },
  {
    category: 'Internship Experience',
    icon: <Briefcase size={32} className='text-white' />,
    period: '2024.12 - 2025.02',
    description: '코드잇 일경험 프로그램 (Next.js 기반 프로젝트 진행)',
    details: `사내 리소스 관리 서비스 Codeit Resources의 유지보수, 성능 개선 및 추가 기능 개발.
Next.js 기반 프로젝트 개발 및 성능 최적화 경험. 
구글 캘린더 API를 연동하여 일정 유무에 따른 회의실 예약 관리. 
URL Shortener 개발을 통해 사용자 편의성을 크게 향상시킴.`,
  },
  {
    category: 'Current Job',
    icon: <Briefcase size={32} className='text-white' />,
    period: '2025.05 - 재직 중',
    description: '제로투원파트너스 | 프론트엔드 엔지니어',
    details: `Daily.co 기반 화상 상담 기능 설계 및 구현  
Zotai로 미디어 설정 상태를 페이지 간 연동  
디자이너와 UI 흐름 개선 협업 및 UX 제안  
API 누락 및 중복 호출 정리로 구조 개선 및 성능 최적화`,
  },
];

export default experienceData;
