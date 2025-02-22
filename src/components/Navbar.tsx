import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full bg-darkBlue py-4 px-6 flex justify-between items-center shadow-lg z-50'>
      <Link href='/' className='text-xl font-bold text-cosmic_teal'>
        SparkleHae
      </Link>
      <div className='flex gap-6'>
        {['About', 'Skills', 'Experience', 'Projects'].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className='text-white hover:text-cosmic_teal transition-colors duration-200'
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}
