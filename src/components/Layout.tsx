import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Navbar />
      </header>

      <main className='flex-1 w-full'>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
