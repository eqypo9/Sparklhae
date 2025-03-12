import { useRouter } from 'next/router';
import Image from 'next/image';
import projectsData from '@/data/projects.json';
import { useState } from 'react';

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
        프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <section className='py-32 px-8 max-w-5xl mx-auto text-gray-200'>
      <h2 className='text-5xl font-extrabold mb-8 text-center tracking-wide text-cosmic_teal'>
        {project.name}
      </h2>

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
          { key: 'retrospective', label: '리팩토링' },
          { key: 'troubleshooting', label: '트러블슈팅' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() =>
              setActiveTab(
                tab.key as 'overview' | 'retrospective' | 'troubleshooting'
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
        {/* 소개 (overview) */}
        {activeTab === 'overview' && (
          <div>
            <p className='text-lg'>{project.description}</p>

            {/* 프로젝트 개요 (overview 존재 여부 확인) */}
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
                <ul className='list-disc list-inside mt-4 space-y-4'>
                  {project.featuresDetail.map((feature, index) => (
                    <li key={index} className='mt-2'>
                      <strong className='text-xl font-semibold text-cosmic_teal'>
                        {feature.title}:
                      </strong>
                      <span className='text-lg text-gray-300'>
                        {' '}
                        {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className='text-gray-400 mt-4'>
                주요 기능이 제공되지 않았습니다.
              </p>
            )}

            {/* 기술 스택 */}
            {project.techStack?.length > 0 && (
              <>
                <h3 className='text-3xl font-bold mt-10 text-cosmic_teal'>
                  기술 스택
                </h3>
                <div className='flex gap-3 mt-4'>
                  {project.techStack?.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-gray-800 px-3 py-1 text-sm rounded-md text-gray-300 shadow-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* 리팩토링 과정 (retrospective) */}
        {activeTab === 'retrospective' &&
          typeof project.retrospective === 'object' && (
            <div>
              <h3 className='text-3xl font-bold text-cosmic_teal'>
                {project.retrospective.title}
              </h3>
              {Array.isArray(project.retrospective.sections) &&
                project.retrospective.sections.map((section, index) => (
                  <div key={index} className='mt-8'>
                    <h4 className='text-2xl font-semibold text-cosmic_teal'>
                      {section.title}
                    </h4>
                    <p className='text-lg text-gray-400 mt-2'>
                      {section.problem}
                    </p>
                    <h5 className='text-lg font-semibold text-green-400 mt-4'>
                      ✅ 해결 방법
                    </h5>
                    <ul className='list-disc list-inside mt-2 space-y-2'>
                      {Array.isArray(section.solution) &&
                        section.solution.map((item, i) => (
                          <li key={i} className='text-lg text-gray-300'>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          )}

        {/* 트러블슈팅 (troubleshooting) */}
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
                    <h5 className='text-lg font-semibold text-green-400 mt-4'>
                      ✅ 해결 방법
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
