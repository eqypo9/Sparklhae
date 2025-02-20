import { useEffect, useState } from 'react';

interface StarType {
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function StarBackground({ numStars = 50 }) {
  const [stars, setStars] = useState<StarType[]>([]); 

  useEffect(() => {
    const generatedStars: StarType[] = Array.from({ length: numStars }).map(
      () => ({
        x: Math.random() * 100, // 0 ~ 100vw 랜덤 위치
        y: Math.random() * 100, // 0 ~ 100vh 랜덤 위치
        size: Math.random() * 3 + 1, // 1 ~ 4px 크기
        delay: Math.random() * 3, // 0 ~ 3s 랜덤 딜레이
      })
    );

    setStars(generatedStars); // ✅ 타입 일치!
  }, [numStars]);

  return (
    <div className='absolute inset-0 overflow-hidden'>
      {stars.map((star, index) => (
        <div
          key={index}
          className='absolute bg-white rounded-full animate-twinkle'
          style={{
            top: `${star.y}vh`,
            left: `${star.x}vw`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
