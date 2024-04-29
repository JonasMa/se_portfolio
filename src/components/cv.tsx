import * as React from 'react';
import Experience, { ExperienceProps } from './experience';

const experiences: ExperienceProps[] = [
  {
    company: 'Google',
    duration: { from: '2022', to: '2023' },
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    technologies: ['TypeScript', 'Angular', 'VSCode API'],
  },
];

const CV: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 px-4 lg:px-12 py-20 container mx-auto">
      <header>
        <h1 className="text-7xl font-bold text-yellow">Jonas Mattes</h1>
        <h2 className="font-mono text-blue-light">
          Software Engineer who loves to build intuitive web experiences.
        </h2>
      </header>
      <main className="font-mono text-sm text-white">
        <h3 className="lg:hidden font-sans text-yellow mb-5 text-base">About</h3>
        <section className="mb-16">
          Some text about me and what I do. What do I like about my work and
          what are my preferences? What is my niche? Also some private stuff
          will be apprecialted
        </section>
        <h3 className="lg:hidden font-sans text-yellow mb-5 text-base">
          Experience
        </h3>
        <section>
          {experiences.map((experience) => (
            <Experience {...experience} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default CV;
