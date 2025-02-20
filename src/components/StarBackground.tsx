import { useEffect, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function StarBackground({ numStars = 150 }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: numStars }, () => ({
      x: Math.random() * window.innerWidth, // 전체 화면 가로 범위
      y: Math.random() * window.innerHeight, // 전체 화면 세로 범위
      size: Math.random() * 3 + 1, // 별 크기 (1px ~ 4px)
      delay: Math.random() * 3, // 애니메이션 딜레이
    }));
    setStars(generatedStars);
  }, [numStars]);

  return (
    <div className='absolute inset-0 overflow-hidden'>
      {stars.map((star, index) => (
        <div
          key={index}
          className='absolute bg-white rounded-full animate-twinkle'
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`, 
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            opacity: Math.random() * 0.7 + 0.3, 
          }}
        />
      ))}
    </div>
  );
}
