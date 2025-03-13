interface TroubleshootingTabProps {
  troubleshooting: {
    title: string;
    issues: {
      title: string;
      problem: string;
      solution: string[];
      lesson?: string;
      code?: {
        description?: string;
        snippet?: string;
      };
    }[];
  };
}

export default function TroubleshootingTab({
  troubleshooting,
}: TroubleshootingTabProps) {
  return (
    <div>
      <h3 className='text-3xl font-bold text-cosmic_teal'>
        {troubleshooting.title}
      </h3>
      {troubleshooting.issues.map((issue, index) => (
        <div key={index} className='mt-8'>
          <h4 className='text-2xl font-semibold text-red-400'>{issue.title}</h4>
          <p className='text-lg text-gray-400 mt-2'>{issue.problem}</p>

          <h5 className='text-lg font-semibold text-cosmic_teal mt-4'>
            해결 방법
          </h5>
          <ul className='list-disc list-inside mt-2 space-y-2'>
            {issue.solution.map((solution, i) => (
              <li key={i} className='text-lg text-gray-300'>
                {solution}
              </li>
            ))}
          </ul>

          {issue.lesson && (
            <div className='mt-6 p-4 bg-gray-800 rounded-lg border-l-4 border-cosmic_teal shadow-lg'>
              <h5 className='text-lg font-semibold text-cosmic_teal'>
                배운 점 (Lesson)
              </h5>
              <p className='text-gray-300 mt-2'>{issue.lesson}</p>
            </div>
          )}

          {issue.code?.snippet && (
            <div className='mt-6'>
              <h5 className='text-lg font-semibold text-cosmic_teal'>
                코드 예제
              </h5>
              <pre className='bg-gray-900 text-gray-300 text-sm p-4 rounded-lg overflow-x-auto mt-3'>
                <code className='whitespace-pre-wrap'>
                  {issue.code.snippet}
                </code>
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
