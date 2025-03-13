import { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    function drawBackground() {
      if (!canvas || !ctx) return;

      // 어두운 청록색 그라데이션 배경
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#003f5c'); // 상단 (어두운 청록)
      bgGradient.addColorStop(1, '#007f8c'); // 하단 (좀 더 밝은 청록)

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 모눈 크기 설정
      const gridSize = 70;

      // 모눈 선 그라데이션
      const lineGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      lineGradient.addColorStop(0, 'rgba(180, 220, 255, 0.3)'); // 상단 (연한 청록)
      lineGradient.addColorStop(1, 'rgba(180, 220, 255, 0.1)'); // 하단 (더 투명한 청록)

      ctx.strokeStyle = lineGradient;
      ctx.lineWidth = 1;

      // 가로 & 세로 선 그리기
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className='absolute inset-0 w-full h-full' />;
}
