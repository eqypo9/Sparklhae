import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='relative min-h-screen flex flex-col text-white overflow-hidden'>
      {/* 🌌 전체 페이지에 적용되는 부드러운 그라데이션 */}
      <div className='absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-300'></div>

      <Navbar />
      <main className='relative flex-1 container mx-auto px-6 py-12'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
