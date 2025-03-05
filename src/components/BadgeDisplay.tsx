// TO DO
// 뱃지 스타일링 변경하기

const badges = [
  { number: '1', color: '#ff4d4d', text: '🔥 열정' },
  { number: '2', color: '#4db8ff', text: '💪 끈기' },
  { number: '3', color: '#5eff5e', text: '🎯 노력' },
  { number: '4', color: '#ffbf4d', text: '🚀 창의성' },
];

export default function BadgeDisplay() {
  return (
    <div className='flex flex-wrap gap-6 justify-center'>
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className='relative w-24 h-28 bg-gray-900 flex flex-col items-center justify-center rounded-md'
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: `linear-gradient(145deg, ${badge.color}, #222)`,
            boxShadow:
              '0px 4px 6px rgba(0,0,0,0.4), inset 0px 2px 4px rgba(255,255,255,0.2)',
          }}
        >
          <span className='text-white text-3xl font-bold drop-shadow-lg'>
            {badge.number}
          </span>
          <span className='text-gray-200 text-xs mt-1'>{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
