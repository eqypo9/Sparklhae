import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen flex flex-col text-white'>
      <Navbar />
      <main className='flex-1 container mx-auto px-6 py-12'>{children}</main>
      <Footer />
    </div>
  );
}
