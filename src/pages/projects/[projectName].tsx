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
      <h2 className='text-5xl font-extrabold mb-8 text-center tracking-wide text-cosmic_teal'>
        {project.name}
      </h2>

      <div className='flex flex-col items-center'>
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className='rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200'
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {isModalOpen && (
        <ImageModal
          imageUrl={project.image}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className='mt-10 font-light text-gray-300'>
        {activeTab === 'overview' && project.overview && (
          <OverviewTab
            overview={project.overview}
            featuresDetail={project.featuresDetail}
          />
        )}
        {activeTab === 'development' && project.development && (
          <DevelopmentTab development={project.development} />
        )}
        {activeTab === 'troubleshooting' &&
          typeof project.troubleshooting === 'object' &&
          project.troubleshooting.issues && (
            <TroubleshootingTab troubleshooting={project.troubleshooting} />
          )}
      </div>
    </section>
  );
}
