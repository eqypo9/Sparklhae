import { useRouter } from 'next/router';
import Image from 'next/image';
import projectsData from '@/data/projects.json';
import { useState } from 'react';

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
      <h2 className='text-5xl font-extrabold mb-8 text-center tracking-wide text-cosmic_teal'>
        {project.name}
      </h2>

      {/* 프로젝트 이미지 */}
      <div className='flex flex-col items-center'>
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className='rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200'
          onClick={() => setIsModalOpen(true)}
        />

        {/* 프로젝트 유형 (한가운데) */}
        <div className='mt-4 text-lg text-gray-300 font-semibold text-center'>
          {project.team
            ? `팀 프로젝트 (${project.teamSize}명) - DE ${project.teamMembers.Designer} / FE ${project.teamMembers.Frontend} / BE ${project.teamMembers.Backend}`
            : '개인 프로젝트'}
        </div>

        {/* Github & Live Site (아래 가로 정렬) */}
        <div className='mt-4 w-full flex flex-wrap justify-center gap-6 text-gray-300 text-lg border-b border-gray-700 pb-4'>
          <div className='flex items-center space-x-2'>
            <span className='text-cosmic_teal font-semibold'>Github:</span>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-cosmic_teal underline decoration-gray-500'
            >
              {project.githubLink}
            </a>
          </div>

          <div className='flex items-center space-x-2'>
            <span className='text-cosmic_teal font-semibold'>Live Site:</span>
            <a
              href={project.deployLink}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-cosmic_teal underline decoration-gray-500'
            >
              {project.deployLink}
            </a>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
          onClick={() => setIsModalOpen(false)}
        >
          <div className='relative p-4 max-w-3xl w-full'>
            {/* 닫기 버튼 */}
            <button
              className='absolute top-4 right-4 text-white text-2xl'
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            {/* 이미지 */}
            <Image
              src={project.image}
              alt={project.name}
              width={1000}
              height={600}
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      )}

      {/* 기술 스택 */}
      {project.techStack?.length > 0 && (
        <div className='mt-12'>
          <h3 className='text-3xl font-bold text-cosmic_teal'>기술 스택</h3>
          <div className='flex flex-wrap gap-3 mt-4'>
            {project.techStack?.map((tech, index) => (
              <span
                key={index}
                className='bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 text-sm font-semibold rounded-full text-gray-300 shadow-lg transition-all duration-300 hover:scale-105 hover:from-cosmic_teal hover:to-cyan-500 hover:text-black'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 탭 메뉴 */}
      <div className='flex mt-12 border-b border-gray-700 justify-center space-x-8'>
        {[
          { key: 'overview', label: '프로젝트 소개' },
          { key: 'development', label: '개발 과정' },
          { key: 'troubleshooting', label: '트러블슈팅' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() =>
              setActiveTab(
                tab.key as 'overview' | 'development' | 'troubleshooting'
              )
            }
            className={`px-6 py-3 text-lg font-semibold transition-all ${
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
        {/* 프로젝트 소개 */}
        {activeTab === 'overview' && (
          <div>
            <p className='text-lg'>{project.description}</p>
            {project.overview?.content && (
              <>
                <h3 className='text-3xl font-bold mt-10 text-cosmic_teal'>
                  프로젝트 개요
                </h3>
                <ul className='list-disc list-inside mt-4 space-y-2 text-gray-400'>
                  {project.overview?.content?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* 주요 기능 */}
            {project.featuresDetail?.length ? (
              <>
                <h3 className='text-3xl font-bold mt-10 text-cosmic_teal'>
                  주요 기능
                </h3>
                <ul className='mt-6 space-y-12'>
                  {project.featuresDetail.map((feature, index) => (
                    <li key={index} className='flex flex-col'>
                      {/* 제목 */}
                      <strong className='text-xl font-semibold text-cosmic_teal text-center'>
                        {feature.title}:
                      </strong>

                      {/* 설명 */}
                      <p className='text-lg text-gray-300 mt-2 text-center w-full'>
                        {feature.description}
                      </p>

                      {/* 이미지 (가운데 정렬) */}
                      {feature.image && (
                        <div className='mt-6 w-full flex justify-center'>
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={700} // 크기 조정
                            height={400}
                            className='rounded-lg shadow-lg'
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className='text-gray-400 mt-4'>
                주요 기능이 제공되지 않았습니다.
              </p>
            )}
          </div>
        )}
        {/* 개발 과정 */}
        {activeTab === 'development' &&
          typeof project.development === 'object' && (
            <div>
              <h3 className='text-3xl font-bold text-cosmic_teal'>
                {project.development.title}
              </h3>
              {Array.isArray(project.development.sections) &&
                project.development.sections.map((section, index) => (
                  <div key={index} className='mt-8'>
                    <h4 className='text-2xl font-semibold text-cosmic_teal'>
                      {section.title}
                    </h4>
                    <ul className='list-disc list-inside mt-4 space-y-2 text-gray-400'>
                      {Array.isArray(section.content) &&
                        section.content.map((item, i) => (
                          <li key={i} className='text-lg text-gray-300'>
                            {item}
                          </li>
                        ))}
                    </ul>

                    {/* 코드 스니펫 표시 */}
                    {section.code?.snippet && (
                      <div className='mt-6'>
                        <h5 className='text-lg font-semibold text-cosmic_teal'>
                          코드 예제: {section.code.description}
                        </h5>
                        <pre className='bg-gray-900 text-gray-300 text-sm p-4 rounded-lg overflow-x-auto mt-3'>
                          <code className='whitespace-pre-wrap'>
                            {section.code.snippet}
                          </code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}

        {/* 트러블슈팅 */}
        {activeTab === 'troubleshooting' &&
          typeof project.troubleshooting === 'object' && (
            <div>
              <h3 className='text-3xl font-bold text-cosmic_teal'>
                {project.troubleshooting.title}
              </h3>
              {Array.isArray(project.troubleshooting.issues) &&
                project.troubleshooting.issues.map((issue, index) => (
                  <div key={index} className='mt-8'>
                    <h4 className='text-2xl font-semibold text-red-400'>
                      {issue.title}
                    </h4>
                    <p className='text-lg text-gray-400 mt-2'>
                      {issue.problem}
                    </p>
                    <h5 className='text-lg font-semibold text-cosmic_teal mt-4'>
                      해결 방법
                    </h5>
                    <ul className='list-disc list-inside mt-2 space-y-2'>
                      {Array.isArray(issue.solution) &&
                        issue.solution.map((solution, i) => (
                          <li key={i} className='text-lg text-gray-300'>
                            {solution}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          )}
      </div>
    </section>
  );
}
