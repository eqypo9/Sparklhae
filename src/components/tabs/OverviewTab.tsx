import Image from 'next/image';

interface OverviewTabProps {
  overview: {
    title?: string;
    content?: string[];
  };
  featuresDetail?: {
    title: string;
    description: string;
    image?: string | string[];
  }[];
}

export default function OverviewTab({ overview, featuresDetail }: OverviewTabProps) {
  return (
    <div>
      {/* 프로젝트 개요 */}
      {overview?.title && (
        <h3 className="text-3xl font-bold mt-10 text-cosmic_teal">
          {overview.title}
        </h3>
      )}

      {overview?.content && overview.content.length > 0 && (
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
          {overview.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {/* 주요 기능 */}
      {featuresDetail && featuresDetail.length > 0 ? (
        <>
          <h3 className="text-3xl font-bold mt-10 text-cosmic_teal">주요 기능</h3>
          <ul className="mt-6 space-y-12">
            {featuresDetail.map((feature, index) => (
              <li key={index} className="flex flex-col items-center">
                <strong className="text-xl font-semibold text-cosmic_teal text-center">
                  {feature.title}
                </strong>
                <p className="text-lg text-gray-300 mt-2 text-center">{feature.description}</p>

                {/* 이미지 렌더링 (배열일 경우 설명 추가) */}
                {feature.image &&
                  (Array.isArray(feature.image) ? (
                    <div className="mt-6 flex flex-col items-center space-y-6">
                      {feature.image.map((imgSrc, imgIndex) => {
                        const deviceLabels = ["PC 버전", "Tablet 버전", "Mobile 버전"];
                        return (
                          <div key={imgIndex} className="flex flex-col items-center">
                            <span className="text-gray-400 text-sm mb-2">
                              {deviceLabels[imgIndex] || `버전 ${imgIndex + 1}`}
                            </span>
                            <Image
                              src={imgSrc}
                              alt={`${feature.title} - ${deviceLabels[imgIndex]}`}
                              width={700}
                              height={400}
                              className="rounded-lg shadow-lg"
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="mt-6 w-full flex justify-center">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={700}
                        height={400}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  ))}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-gray-400 mt-4">주요 기능이 제공되지 않았습니다.</p>
      )}
    </div>
  );
}
