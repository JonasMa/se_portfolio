import * as React from 'react';
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
    <>
      <SectionHeader>About</SectionHeader>
      <section className="mb-16">
        With a journey that began somewhat by chance in computer science, I
        quickly found my passion in the user-centered realm of web development.
        Over the past five years, I've honed my skills, specializing in crafting
        beautiful, functional, and accessible websites that prioritize user
        experience. Comfortable navigating the entire stack, I thrive on
        bringing together design and functionality to create digital experiences
        that delight users.
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
    </>
  );
};

export default CV;
