import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGithub,
  FaGit,
  FaDiscord,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
  SiStyledcomponents,
  SiSass,
} from 'react-icons/si';

const skills = [
  {
    category: 'Framework',
    items: [
      { name: 'HTML/CSS', icon: FaHtml5, tag: 'Framework' },
      { name: 'JavaScript', icon: FaJs, tag: 'Framework' },
      { name: 'TypeScript', icon: SiTypescript, tag: 'Framework' },
      { name: 'React', icon: FaReact, tag: 'Framework' },
      { name: 'Next.js', icon: SiNextdotjs, tag: 'Framework' },
      { name: 'React Query', icon: SiReactquery, tag: 'Framework' },
    ],
  },
  {
    category: 'Styling',
    items: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, tag: 'Styling' },
      { name: 'styled-components', icon: SiStyledcomponents, tag: 'Styling' },
      { name: 'SCSS', icon: SiSass, tag: 'Styling' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'GitHub', icon: FaGithub, tag: 'Tools' },
      { name: 'Git', icon: FaGit, tag: 'Tools' },
      { name: 'Discord', icon: FaDiscord, tag: 'Tools' },
      { name: 'Figma', icon: FaFigma, tag: 'Tools' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id='skills'
      className='py-32 px-8 max-w-5xl mx-auto text-center text-white'
    >
      <h2 className='text-5xl font-bold mb-12 text-white uppercase tracking-wide'>
        Skills
      </h2>

      <div className='flex flex-col gap-12'>
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className='text-3xl font-semibold text-cosmic_teal mb-6'>
              {category.category}
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
              {category.items.map((skill) => {
                const IconComponent = skill.icon as React.ElementType;
                return (
                  <div
                    key={skill.name}
                    className='bg-gray-800/60 p-6 rounded-lg flex flex-col items-center justify-center shadow-md transition-all hover:scale-105 hover:bg-gray-700'
                  >
                    <IconComponent className='text-5xl text-white mb-4' />{' '}
                    <p className='text-lg font-semibold'>{skill.name}</p>
                    <span className='text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300 mt-2'>
                      {skill.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
