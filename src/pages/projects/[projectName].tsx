import { useRouter } from 'next/router';
import Image from 'next/image';
import projectsData from '@/data/projects.json';
import { useState } from 'react';
import TabMenu from '@/components/tabs/TabMenu';
import OverviewTab from '@/components/tabs/OverviewTab';
import DevelopmentTab from '@/components/tabs/DevelopmentTab';
import TroubleshootingTab from '@/components/tabs/TroubleShootingTab';
import ImageModal from '@/components/ImageModal';

export default function ProjectDetail() {
  const router = useRouter();
  const { projectName } = router.query;
  const project = projectsData.find((p) => p.id === projectName);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'development' | 'troubleshooting'
  >('overview');

  if (!router.isReady || !project) {
    return (
      <div className='text-center py-20 text-gray-300 text-xl font-light'>
        프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <section className='py-32 px-8 max-w-5xl mx-auto text-gray-200'>
      {/* 프로젝트 제목 */}
      <h2 className='text-5xl font-extrabold mb-8 text-center tracking-wide text-cosmic_teal'>
        {project.name}
      </h2>

      {/* 프로젝트 대표 이미지 */}
      <div className='flex flex-col items-center'>
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className='rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200 cursor-pointer'
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* 이미지 모달 */}
      {isModalOpen && (
        <ImageModal
          imageUrl={project.image}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* 프로젝트 정보 (배포 링크 & 팀 구성) */}
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
        {/* 배포 & GitHub 링크 */}
        <div className='flex flex-col w-full'>
          <h3 className='text-xl font-semibold text-cosmic_teal'>
            프로젝트 링크
          </h3>
          <div className='mt-3 flex flex-col gap-2 w-full'>
            {project.deployLink && (
              <a
                href={project.deployLink}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full px-4 py-3 bg-cosmic_teal hover:bg-blue-400 text-white rounded-md text-center shadow-md flex-1'
              >
                배포 사이트 방문
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full px-4 py-3 bg-gray-800 hover:bg-gray-600 text-white rounded-md text-center shadow-md flex-1'
              >
                GitHub 저장소
              </a>
            )}
          </div>
        </div>

        {/* 팀 구성 & 개발 기간 */}
        {project.team && (
          <div className='flex flex-col w-full'>
            <h3 className='text-xl font-semibold text-cosmic_teal'>팀 구성</h3>
            <p className='mt-2 text-gray-400'>총 {project.teamSize}명</p>
            <ul className='mt-2 flex flex-wrap gap-3 w-full'>
              {project.teamMembers &&
                Object.entries(project.teamMembers).map(([role, count]) => (
                  <li
                    key={role}
                    className='text-sm bg-gray-800 px-4 py-3 rounded-md shadow-md flex-1 text-center'
                  >
                    {role}: {count}명
                  </li>
                ))}
            </ul>

            {/* 개발 기간 */}
            <div className='mt-6 flex flex-col md:flex-row items-start md:items-center gap-2'>
              <h3 className='text-xl font-semibold text-cosmic_teal'>
                개발 기간
              </h3>
              <p className='text-gray-400'>
                {project.startDate && project.endDate
                  ? `${project.startDate} ~ ${project.endDate}`
                  : '미정'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 기술 스택 */}
      <div className='mt-10'>
        <h3 className='text-xl font-semibold text-cosmic_teal'>기술 스택</h3>
        <ul className='mt-3 flex flex-wrap gap-2'>
          {project.techStack?.map((tech, index) => (
            <li
              key={index}
              className='px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-md'
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* 탭 메뉴 */}
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 탭 콘텐츠 */}
      <div className='mt-10 font-light text-gray-300'>
        {activeTab === 'overview' && project.overview && (
          <OverviewTab
            overview={project.overview}
            featuresDetail={project.featuresDetail}
          />
        )}

        {activeTab === 'development' && project.development && (
          <div className='space-y-6'>
            {' '}
            <DevelopmentTab development={project.development} />
          </div>
        )}

        {activeTab === 'troubleshooting' &&
          project.troubleshooting &&
          project.troubleshooting.issues?.length > 0 && (
            <div className='space-y-6'>
              {' '}
              <TroubleshootingTab troubleshooting={project.troubleshooting} />
            </div>
          )}
      </div>
    </section>
  );
}
