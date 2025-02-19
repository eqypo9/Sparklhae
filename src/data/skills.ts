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

export default skills;
