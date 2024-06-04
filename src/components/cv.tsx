import React, { lazy, Suspense } from 'react';
import { Trans } from 'react-i18next';
import Disclaimer from './disclaimer';
import Loader from './loader';
import IconAngular from './icons/angular';
import IconReact from './icons/react';
import IconHtml from './icons/html';
import IconCss from './icons/css';
import IconTypeScript from './icons/typescript';
import Button from './button';

// Jobs does some JSON parsing and may block inital render.
const Jobs = lazy(() => import('./jobs'));
const Projects = lazy(() => import('./projects'));

const CV = () => (
  <>
    <h3 className="flex justify-between mb-5 mt-16 ">
      <span className="relative text-base text-blue-light w-[max-content] before:absolute before:inset-0 before:bg-blue-light before:animate-typewriter-6">
        tl;dr;
      </span>
      <span className="flex">
        <IconAngular />
        <IconReact />
        <IconHtml />
        <IconCss />
        <IconTypeScript />
      </span>
    </h3>
    <section>
      I&apos;m a software engineer with five years of experience. I particularly
      enjoy working with frontend technologies like Angular and React.
      <div className="flex gap-4">
        <Button href="mailto:contact@jmattes.de">Contact me</Button>

        <Button href="/resume.pdf" color="blue-light">
          Download resume
        </Button>
      </div>
    </section>

    <h3 className="font-sans text-yellow mb-5 mt-16 text-base">About</h3>
    <section id="about">
      <Trans i18nKey="about" />
    </section>
    <h3 className="font-sans text-yellow mb-5 mt-16 text-base">Experience</h3>
    <section id="jobs">
      <Suspense fallback={<Loader />}>
        <Jobs />
      </Suspense>
    </section>
    <h3 className="font-sans text-yellow mb-5 mt-16 text-base">Projects</h3>
    <section id="projects">
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
    </section>
    <section className="mt-16 font-sans text-blue-light">
      <Disclaimer />
    </section>
  </>
);

export default CV;
