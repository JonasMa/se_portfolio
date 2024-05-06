import * as React from 'react';
import { Link } from 'gatsby';
import SocialMediaIcons from './social';
import Loader from './loader';
import Disclaimer from './disclaimer';

// Jobs does some JSON parsing and may block inital render.
const Jobs = React.lazy(() => import('./jobs'));

// Seaction header disappears on small screens
const SectionHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h3 className="lg:hidden font-sans text-yellow mb-5 text-base">{children}</h3>
);

const CV: React.FC = () => {
  return (
    <div className="lg:flex gap-8 px-4 container mx-auto min-h-screen">
      <div className="py-20 lg:pt-32 lg:sticky lg:top-0 lg:self-start lg:w-1/2 lg:min-h-screen flex flex-col gap-4 lg:justify-between">
        <header>
          <h1 className="text-6xl font-bold text-yellow">Jonas Mattes</h1>
          <h2 className="font-mono text-blue-light">
            Software Engineer who loves to build intuitive web experiences.
          </h2>
        </header>
        <footer className="flex gap-12 font-mono text-blue-light ">
          <SocialMediaIcons />
          <Link to="/impressum">Impressum</Link>
        </footer>
      </div>
      <main className="lg:pt-36 lg:pb-20 lg:w-1/2 font-mono text-sm text-white overflow-y-auto flex-shrink-0">
        <SectionHeader>About</SectionHeader>
        <section className="mb-16">
          With a journey that began somewhat by chance in computer science, I
          quickly found my passion in the user-centered realm of web
          development. Over the past five years, I've honed my skills,
          specializing in crafting beautiful, functional, and accessible
          websites that prioritize user experience. Comfortable navigating the
          entire stack, I thrive on bringing together design and functionality
          to create digital experiences that delight users.
        </section>
        <SectionHeader>Experience</SectionHeader>
        <section>
          <React.Suspense fallback={<Loader />}>
            <Jobs />
          </React.Suspense>
        </section>
        <section className="mt-16 font-sans text-blue-light">
          <Disclaimer />
        </section>
      </main>
    </div>
  );
};

export default CV;
