import Link from 'next/link';
import { useState } from 'react';
import projectsData from '@/data/projects.json';

const dropdownStyles =
  'absolute bg-gray-900 text-white rounded-lg shadow-lg p-3 w-44 border border-cosmic_teal backdrop-blur-md';
const projectItemStyles =
  'block px-3 py-2 hover:bg-gray-700 rounded text-center';

export default function ProjectsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        onMouseEnter={() => setIsOpen(true)}
        className='text-white font-medium hover:text-cosmic_teal transition'
      >
        Projects
      </button>

      {isOpen && (
        <div className={dropdownStyles} onMouseLeave={() => setIsOpen(false)}>
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
        </div>
      )}
    </div>
  );
}
