import React, { useEffect, Suspense, lazy, FC, useRef } from 'react';
import Loader from './loader';
import Disclaimer from './disclaimer';
import { MenuItem } from './menu';
import Projects from './projects';
import CvSection from './cv-section';

// Jobs does some JSON parsing and may block inital render.
const Jobs = lazy(() => import('./jobs'));

const CV: FC<{
  scrollToSection?: MenuItem;
  onScrolledIntoView: (item: MenuItem) => void;
}> = ({ scrollToSection, onScrolledIntoView }) => {
  const sectionRefs: { [key in MenuItem]: any } = {
    about: useRef(null),
    jobs: useRef(null),
    projects: useRef(null),
  };

  useEffect(() => {
    if (!scrollToSection) return;

    const top =
      scrollToSection === 'about'
        ? 0
        : sectionRefs[scrollToSection].current?.offsetTop - 64;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }, [scrollToSection]);

  return (
    <>
      <CvSection
        title="About"
        ref={sectionRefs.about}
        onInView={() => onScrolledIntoView('about')}
      >
        With a journey that began somewhat by chance in computer science, I
        quickly found my passion in the user-centered realm of web development.
        Over the past five years, I've honed my skills, specializing in crafting
        beautiful, functional, and accessible websites that prioritize user
        experience. Comfortable navigating the entire stack, I thrive on
        bringing together design and functionality to create digital experiences
        that delight users.
      </CvSection>
      <CvSection
        title="Experience"
        ref={sectionRefs.jobs}
        onInView={() => onScrolledIntoView('jobs')}
      >
        <Suspense fallback={<Loader />}>
          <Jobs />
        </Suspense>
      </CvSection>
      <CvSection
        title="Projects"
        ref={sectionRefs.projects}
        onInView={() => onScrolledIntoView('projects')}
      >
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
      </CvSection>
      <section className="mt-16 font-sans text-blue-light">
        <Disclaimer />
      </section>
    </>
  );
};

export default CV;
