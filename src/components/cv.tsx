import React, { FC, lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Trans } from 'react-i18next';
import { useFocusedSection } from '../hooks/useFocusedSection';
import { useScrollSmooth } from '../hooks/useScrollSmooth';
import CvSection from './cv-section';
import Disclaimer from './disclaimer';
import Loader from './loader';
import { MenuItem } from './menu';

// Jobs does some JSON parsing and may block inital render.
const Jobs = lazy(() => import('./jobs'));
const Projects = lazy(() => import('./projects'));

const CV: FC<{
  scrollToSection?: MenuItem;
  onScrolledIntoView: (item: MenuItem) => void;
}> = ({ scrollToSection, onScrolledIntoView }) => {
  const sectionRefs: {
    [key in MenuItem]: React.MutableRefObject<HTMLElement | null>;
  } = {
    about: useRef(null),
    jobs: useRef(null),
    projects: useRef(null),
  };

  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [scrollSmooth] = useScrollSmooth();

  const scrollWrapper = async (section: MenuItem) => {
    const element = sectionRefs[section]?.current;
    if (!element) {
      throw new Error(`No section ref found for ${section}.`);
    }

    const top = section === 'about' ? 0 : element.offsetTop - 64;
    setIsAutoScrolling(true);
    await scrollSmooth(top);
    setIsAutoScrolling(false);
  };

  useEffect(() => {
    if (!scrollToSection) {
      return;
    }

    scrollWrapper(scrollToSection);
  }, [scrollToSection]);

  const [focusedSection, addSection, removeSection] = useFocusedSection();

  useEffect(() => {
    if (!focusedSection || isAutoScrolling) {
      return;
    }
    onScrolledIntoView(focusedSection);
  }, [focusedSection]);

  const onViewChange = (isVisible: boolean, item: MenuItem) => {
    if (isVisible) {
      addSection(item);
    } else {
      removeSection(item);
    }
  };

  return (
    <>
      <CvSection
        title="About"
        ref={sectionRefs.about}
        onViewChange={(isVisible) => onViewChange(isVisible, 'about')}
      >
        <Trans i18nKey="about" />
      </CvSection>
      <CvSection
        title="Experience"
        ref={sectionRefs.jobs}
        onViewChange={(isVisible) => onViewChange(isVisible, 'jobs')}
      >
        <Suspense fallback={<Loader />}>
          <Jobs />
        </Suspense>
      </CvSection>
      <CvSection
        title="Projects"
        ref={sectionRefs.projects}
        onViewChange={(isVisible) => onViewChange(isVisible, 'projects')}
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
