import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    const path = '/';

    if (window.location.pathname !== path) {
      router.push(`${path}#${section}`);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <nav className='fixed top-0 w-full bg-darkBlue py-3 px-4 md:px-6 flex items-center shadow-lg z-50'>
      <Link href='/' className='text-lg md:text-xl font-bold text-cosmic_teal'>
        SparkleHae
      </Link>

      <div className='ml-auto flex gap-3 md:gap-6 text-xs md:text-base overflow-x-auto whitespace-nowrap'>
        {['About', 'Skills', 'Experience', 'Projects'].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className='text-white hover:text-cosmic_teal transition-colors duration-200 cursor-pointer'
            onClick={(e) => handleNavigation(e, section.toLowerCase())}
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}
