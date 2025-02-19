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

      // 배경 그라데이션
      // TO DO: 색상 수정하기
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#174035'); // 상단
      bgGradient.addColorStop(1, '#2c766f'); // 하단

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 모눈 크기 설정
      const gridSize = 70;

      // 모눈 선 그라데이션
      const lineGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      lineGradient.addColorStop(0, 'rgba(246, 239, 239, 0.5)'); // 상단
      lineGradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)'); // 하단

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
