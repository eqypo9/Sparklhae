export default function Projects() {
  return (
    <section
      id='projects'
      className='py-32 px-8 max-w-5xl mx-auto text-center text-white'
    >
      <h2 className='text-5xl font-bold mb-8 text-white uppercase tracking-wide'>
        Projects
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg'>
        {[
          { name: '헬로핏', link: '/projects/hellofit' },
          { name: '글로벌 노마드', link: '/projects/global-nomad' },
          { name: '더 줄게', link: '/projects/the-julge' },
        ].map((project) => (
          <a
            key={project.name}
            href={project.link}
            className='bg-gray-700/60 text-neon p-4 rounded-lg hover:bg-gray-600'
          >
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
}
