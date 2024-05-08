import React, { useEffect, useRef, lazy, FC } from 'react';
import Loader from './loader';
import Disclaimer from './disclaimer';
import { MenuItem } from './menu';
import Projects from './projects';

// Jobs does some JSON parsing and may block inital render.
const Jobs = lazy(() => import('./jobs'));

const CV: FC<{ selectedSection: MenuItem }> = ({ selectedSection }) => {
  const sectionRefs: { [key in MenuItem]: any } = {
    about: useRef<HTMLElement>(),
    jobs: useRef<HTMLElement>(),
    projects: useRef<HTMLElement>(),
  };

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: sectionRefs[selectedSection].current.offsetTop - 32,
        behavior: 'smooth',
      });
    });
  }, [selectedSection]);

  return (
    <>
      <h3
        ref={sectionRefs.about}
        className="font-sans text-yellow mb-5 text-base"
      >
        About
      </h3>
      <section>
        With a journey that began somewhat by chance in computer science, I
        quickly found my passion in the user-centered realm of web development.
        Over the past five years, I've honed my skills, specializing in crafting
        beautiful, functional, and accessible websites that prioritize user
        experience. Comfortable navigating the entire stack, I thrive on
        bringing together design and functionality to create digital experiences
        that delight users.
      </section>
      <h3
        ref={sectionRefs.jobs}
        className="font-sans text-yellow mb-5 mt-16 text-base"
      >
        Experience
      </h3>
      <section>
        <React.Suspense fallback={<Loader />}>
          <Jobs />
        </React.Suspense>
      </section>
      <h3
        ref={sectionRefs.projects}
        className="font-sans text-yellow mb-5 mt-16 text-base"
      >
        Projects
      </h3>
      <section>
        <React.Suspense fallback={<Loader />}>
          <Projects />
        </React.Suspense>
      </section>
      <section className="mt-16 font-sans text-blue-light">
        <Disclaimer />
      </section>
    </>
  );
};

export default CV;
