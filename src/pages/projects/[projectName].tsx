import { useRouter } from 'next/router';
import Image from 'next/image';
import projectsData from '@/data/projects.json';

export default function ProjectDetail() {
  const router = useRouter();
  const { projectName } = router.query;
  const project = projectsData.find((p) => p.id === projectName);

  if (!router.isReady || !project) {
    return (
      <div className='text-center py-20 text-white'>
        프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <section className='py-32 px-8 max-w-5xl mx-auto text-white'>
      <h2 className='text-5xl font-bold mb-8'>{project.name}</h2>
      <Image
        src={project.image}
        alt={project.name}
        width={800}
        height={400}
        className='rounded-lg'
      />

      <p className='text-lg mt-6'>{project.description}</p>

      <h3 className='text-2xl font-semibold mt-8'>기술 스택</h3>
      <div className='flex gap-3 mt-4'>
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className='bg-gray-700 px-3 py-1 text-sm rounded-md'
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className='text-2xl font-semibold mt-8'>주요 기능</h3>
      <ul className='list-disc list-inside mt-4'>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h3 className='text-2xl font-semibold mt-8'>프로젝트 링크</h3>
      <a
        href={project.deployLink}
        target='_blank'
        className='text-blue-400 underline mt-4 block'
      >
        배포 링크
      </a>
      <a
        href={project.githubLink}
        target='_blank'
        className='text-blue-400 underline'
      >
        GitHub 저장소
      </a>
    </section>
  );
}
