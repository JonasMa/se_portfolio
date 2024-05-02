import * as React from 'react';
import { Link } from 'gatsby';
import SocialMediaIcons from './social';
import Loader from './loader';

// Jobs does some JSON parsing and may block inital render.
const Jobs = React.lazy(() => import('./jobs'));

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
        <h3 className="lg:hidden font-sans text-yellow mb-5 text-base">
          About
        </h3>
        <section className="mb-16">
          Some text about me and what I do. What do I like about my work and
          what are my preferences? What is my niche? Also some private stuff
          will be apprecialted
        </section>
        <h3 className="lg:hidden font-sans text-yellow mb-5 text-base">
          Experience
        </h3>
        <section>
          <React.Suspense fallback={<Loader />}>
            <Jobs />
          </React.Suspense>
        </section>
        <section className="mt-16 font-sans text-blue-light">
          This website is 100% self built in <strong>React</strong> with <strong>Gatsby</strong> and <strong>Tailwind CSS</strong>. Check it out on my <strong className="underline"><a href="https://github.com/JonasMa/se_portfolio" target="_blank">GitHub</a></strong> if you're interested.<br/>
          The website design and functionality is heavily inspired by <a href="https://brittanychiang.com/" target="blank" className="underline">Brittany Chiang</a>.
        </section>
      </main>
    </div>
  );
};

export default CV;
