import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white'>
      {/* Header */}
      <header className='fixed top-0 left-0 w-full flex justify-between px-8 py-4 bg-black/70 backdrop-blur-md z-50'>
        <h1 className='text-neon text-3xl font-bold tracking-wide'>정성혜</h1>
        <nav>
          <ul className='flex space-x-6 text-gray-300'>
            <li>
              <a href='#projects' className='hover:text-neon transition'>
                Projects
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-neon transition'>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-neon transition'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center min-h-screen pt-16 text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='relative w-[320px] h-[200px] bg-gradient-to-b from-[#f4f4f4] to-[#d9d9d9] rounded-lg shadow-2xl'
        >
          {/* 릴 */}
          <div className='absolute top-[40px] left-[30px] w-[60px] h-[60px] bg-[#222] rounded-full flex items-center justify-center'>
            <div className='w-[24px] h-[24px] bg-gray-300 rounded-full animate-spin-slow'></div>
          </div>
          <div className='absolute top-[40px] right-[30px] w-[60px] h-[60px] bg-[#222] rounded-full flex items-center justify-center'>
            <div className='w-[24px] h-[24px] bg-gray-300 rounded-full animate-spin-slow'></div>
          </div>
          {/* 레이블 */}
          <div className='absolute top-[110px] left-1/2 transform -translate-x-1/2 w-[240px] h-[50px] bg-[#d91e18] text-center text-white font-bold leading-[50px] shadow-md'>
            Hi, I'm 정성혜 👩‍💻
          </div>
        </motion.div>
        <p className='mt-8 text-lg text-gray-300'>
          Passionate Frontend Developer | Inspired by Retro
        </p>
        <div className='mt-6 flex gap-6'>
          <motion.a
            href='#projects'
            whileHover={{ scale: 1.1 }}
            className='px-6 py-3 bg-[#d91e18] text-white rounded-full shadow-lg hover:shadow-red-600/40 transition'
          >
            View My Work
          </motion.a>
          <motion.a
            href='#contact'
            whileHover={{ scale: 1.1 }}
            className='px-6 py-3 bg-[#181818] text-white border border-[#d91e18] rounded-full hover:bg-[#d91e18] transition'
          >
            Contact Me
          </motion.a>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 bg-[#0f0f0f]'>
        <h2 className='text-center text-4xl font-bold mb-12 text-neon'>
          Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8'>
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              className='relative w-full bg-gradient-to-b from-[#1a1a1a] to-[#333] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition'
            >
              <div className='flex items-center justify-between'>
                <div className='w-[50px] h-[50px] bg-[#222] rounded-full flex items-center justify-center'>
                  <div className='w-[20px] h-[20px] bg-gray-300 rounded-full'></div>
                </div>
                <h3 className='text-lg font-bold'>Project {project}</h3>
                <div className='w-[50px] h-[50px] bg-[#222] rounded-full flex items-center justify-center'>
                  <div className='w-[20px] h-[20px] bg-gray-300 rounded-full'></div>
                </div>
              </div>
              <p className='mt-4 text-gray-400'>
                Description of project {project}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id='about' className='py-20 bg-[#1a1a1a] text-white text-center'>
        <h2 className='text-4xl font-bold mb-8 text-neon'>About Me</h2>
        <div className='max-w-3xl mx-auto'>
          <p className='text-lg'>
            Hello! I'm 정성혜, a passionate frontend developer with a love for
            creating user-friendly, responsive, and visually stunning websites.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-[#0f0f0f] text-center'>
        <h2 className='text-4xl font-bold mb-8 text-neon'>Contact Me</h2>
        <form className='w-full max-w-md mx-auto'>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full mb-4 px-4 py-2 rounded border border-gray-700 bg-[#1a1a1a] text-white'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='w-full mb-4 px-4 py-2 rounded border border-gray-700 bg-[#1a1a1a] text-white'
          />
          <textarea
            placeholder='Your Message'
            className='w-full mb-4 px-4 py-2 rounded border border-gray-700 bg-[#1a1a1a] text-white'
          />
          <button className='w-full py-2 bg-[#d91e18] text-white rounded-full hover:bg-red-700 transition'>
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className='bg-[#0d0d0d] py-4 text-center text-gray-500 text-sm'>
        <p>© 2025 정성혜. Built with Next.js & Tailwind CSS.</p>
        <div className='flex justify-center mt-2 gap-4'>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
