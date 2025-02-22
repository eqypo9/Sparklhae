import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import projectsData from '@/data/projects.json';

export default function ProjectDetail() {
  const router = useRouter();
  const { projectName } = router.query;
  const project = projectsData.find((p) => p.id === projectName);

  const [activeTab, setActiveTab] = useState<
    'overview' | 'retrospective' | 'troubleshooting'
  >('overview');

  if (!router.isReady || !project) {
    return (
      <div className='text-center py-20 text-gray-300 text-xl font-light'>
        🚀 프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <section className='py-32 px-8 max-w-5xl mx-auto text-gray-200'>
      {/* 프로젝트 제목 */}
      <h2 className='text-5xl font-extrabold mb-8 text-center tracking-wide text-cosmic_teal'>
        {project.name}
      </h2>

      {/* 프로젝트 이미지 */}
      <div className='flex justify-center'>
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className='rounded-lg shadow-lg'
        />
      </div>

      {/* 탭 메뉴 */}
      <div className='flex mt-12 border-b border-gray-700 justify-center space-x-8'>
        {[
          { key: 'overview', label: '소개' },
          { key: 'retrospective', label: '회고록' },
          { key: 'troubleshooting', label: '트러블슈팅' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() =>
              setActiveTab(
                tab.key as 'overview' | 'retrospective' | 'troubleshooting'
              )
            }
            className={`px-6 py-3 text-lg font-semibold font-poppins transition-all ${
              activeTab === tab.key
                ? 'border-b-4 border-cosmic_teal text-cosmic_teal'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 내용 */}
      <div className='mt-10 font-light text-gray-300'>
        {activeTab === 'overview' && (
          <div>
            <p className='text-lg'>{project.description}</p>

            <h3 className='text-2xl font-bold mt-10 text-cosmic_teal'>
              기술 스택
            </h3>
            <div className='flex gap-3 mt-4'>
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className='bg-gray-800 px-3 py-1 text-sm rounded-md text-gray-300 shadow-md'
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className='text-2xl font-bold mt-10 text-cosmic_teal'>
              주요 기능
            </h3>
            <ul className='list-disc list-inside mt-4 space-y-2'>
              {project.features.map((feature, index) => (
                <li key={index} className='text-gray-400'>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'retrospective' && (
          <div>
            <h3 className='text-2xl font-bold text-cosmic_teal'>
              프로젝트 회고
            </h3>
            <p className='text-lg mt-4 text-gray-400'>
              📝 프로젝트 진행 과정에서 배운 점과 개선할 점을 정리할 공간입니다.
            </p>
          </div>
        )}

        {activeTab === 'troubleshooting' && (
          <div>
            <h3 className='text-2xl font-bold text-cosmic_teal'>트러블슈팅</h3>
            <p className='text-lg mt-4 text-gray-400'>
              🐞 프로젝트에서 해결했던 문제들과 해결 방법을 정리할 공간입니다.
            </p>
          </div>
        )}
      </div>

      {/* 프로젝트 링크 */}
      <div className='mt-12'>
        <h3 className='text-2xl font-bold text-cosmic_teal'>프로젝트 링크</h3>
        <a
          href={project.deployLink}
          target='_blank'
          className='text-cosmic_teal underline mt-4 block text-lg hover:text-cosmic_teal'
        >
          🔗 배포 링크
        </a>
        <a
          href={project.githubLink}
          target='_blank'
          className='text-cosmic_teal underline text-lg hover:text-cosmic_teal'
        >
          🖥️ GitHub 저장소
        </a>
      </div>
    </section>
  );
}
