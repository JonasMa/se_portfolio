import React, { useEffect, Suspense, lazy, FC, useRef } from 'react';
import Loader from './loader';
import Disclaimer from './disclaimer';
import { MenuItem } from './menu';
import CvSection from './cv-section';
import { Trans } from 'react-i18next';
import { useFocusedSection } from '../hooks/useFocusedSection';

// Jobs does some JSON parsing and may block inital render.
const Jobs = lazy(() => import('./jobs'));
const Projects = lazy(() => import('./projects'));

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
  
  const [focusedSection, addSection, removeSection] = useFocusedSection();


  useEffect(()=>{
    if(!focusedSection) return;
    onScrolledIntoView(focusedSection);
  }, [focusedSection]);

  const onViewChange = (isVisible: boolean, item: MenuItem) => {
    if(isVisible){
      addSection(item);
    } else {
      removeSection(item);
    }
  }

  return (
    <>
      <CvSection
        title="About"
        ref={sectionRefs.about}
        onInView={() => onScrolledIntoView('about')}
        onViewChange={(isVisible) => onViewChange(isVisible,'about')}
      >
        <Trans i18nKey="about"/>
      </CvSection>
      <CvSection
        title="Experience"
        ref={sectionRefs.jobs}
        onInView={() => onScrolledIntoView('jobs')}
        onViewChange={(isVisible) => onViewChange(isVisible,'jobs')}
      >
        <Suspense fallback={<Loader />}>
          <Jobs />
        </Suspense>
      </CvSection>
      <CvSection
        title="Projects"
        ref={sectionRefs.projects}
        onInView={() => onScrolledIntoView('projects')}
        onViewChange={(isVisible) => onViewChange(isVisible,'projects')}
      >
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
      </CvSection>
      <section className="my-16 font-sans text-blue-light">
        <Disclaimer />
      </section>
    </>
  );
};

export default CV;
