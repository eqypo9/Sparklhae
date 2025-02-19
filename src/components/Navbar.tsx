import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className='fixed top-0 w-full bg-darkBlue py-4 px-6 flex justify-between items-center shadow-lg z-50'>
      <Link href='/' className='text-xl font-bold text-purpleAccent'>
        Sparkle
      </Link>
      <div className='flex gap-4'>
        <a
          href='#about'
          className='text-white hover:text-purpleAccent transition-all'
        >
          About
        </a>
        <a
          href='#skills'
          className='text-white hover:text-purpleAccent transition-all'
        >
          Skills
        </a>
        <a
          href='#experience'
          className='text-white hover:text-purpleAccent transition-all'
        >
          Experience
        </a>
        <a
          href='#projects'
          className='text-white hover:text-purpleAccent transition-all'
        >
          Projects
        </a>
      </div>
      {/* {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all'
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      )} */}
    </nav>
  );
}
