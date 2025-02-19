export default function Skills() {
  return (
    <section
      id='skills'
      className='py-32 px-8 max-w-5xl mx-auto text-center text-white'
    >
      <h2 className='text-5xl font-bold mb-8 text-cosmic_teal uppercase tracking-wide'>
        Skills
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg'>
        {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'].map(
          (skill) => (
            <span
              key={skill}
              className='bg-gray-700/60 px-6 py-3 rounded-lg text-neon'
            >
              {skill}
            </span>
          )
        )}
      </div>
    </section>
  );
}
