interface DevelopmentTabProps {
  development: {
    title: string;
    sections: {
      title: string;
      content: string[];
      code?: { snippet?: string };
    }[];
  };
}

export default function DevelopmentTab({ development }: DevelopmentTabProps) {
  return (
    <div>
      <h3 className='text-3xl font-bold text-cosmic_teal'>
        {development.title}
      </h3>

      {development.sections.map((section, index) => (
        <div key={index} className='mt-8'>
          <h4 className='text-2xl font-semibold text-cosmic_teal'>
            {section.title}
          </h4>
          <ul className='list-disc list-inside mt-4 space-y-2 text-gray-400'>
            {section.content.map((item, i) => (
              <li key={i} className='text-lg text-gray-300'>
                {item}
              </li>
            ))}
          </ul>

          {section.code?.snippet && (
            <div className='mt-6'>
              <h5 className='text-lg font-semibold text-cosmic_teal'>
                코드 예제
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
  );
}
