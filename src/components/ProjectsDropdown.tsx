import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import projectsData from '@/data/projects.json';
import { motion } from 'framer-motion';

const dropdownStyles =
  'absolute top-20 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-60 border border-cosmic_teal backdrop-blur-md';
const projectItemStyles =
  'block px-3 py-2 hover:bg-gray-700 rounded text-center';

export default function FloatingProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (buttonRef.current?.contains(event.target as Node)) return;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className='relative w-full flex justify-center mb-6'>
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='relative flex items-center justify-center'
        whileHover={{ rotate: 20, scale: 1.1 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <Image
          src='/images/moon.png'
          alt='Moon Image'
          width={80}
          height={80}
          className='w-20 h-20'
        />
      </motion.button>

      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className={dropdownStyles}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className='text-center text-lg font-bold mb-2 text-cosmic_teal'>
            Projects
          </h3>
          <ul className='space-y-2'>
            {projectsData.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  className={projectItemStyles}
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
