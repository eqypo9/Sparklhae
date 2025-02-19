import Head from 'next/head';
import HeroSection from '@/components/sections/HeroSection';
import AboutMe from '@/components/sections/AboutMe';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sparkle | Home</title>
      </Head>

      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}
