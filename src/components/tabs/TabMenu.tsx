interface TabMenuProps {
  activeTab: 'overview' | 'development' | 'troubleshooting';
  setActiveTab: (tab: 'overview' | 'development' | 'troubleshooting') => void;
}

export default function TabMenu({ activeTab, setActiveTab }: TabMenuProps) {
  const tabs = [
    { key: 'overview', label: '프로젝트 소개' },
    { key: 'development', label: '개발 과정' },
    { key: 'troubleshooting', label: '트러블슈팅' },
  ];

  return (
    <div className='flex mt-12 border-b border-gray-700 justify-center space-x-8'>
      {tabs.map((tab) => (
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
  );
}
