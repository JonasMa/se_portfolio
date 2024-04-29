import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Jobs, { Job } from './job';
import SocialMediaIcons from './social';

const CV: React.FC = () => {
  const jobsData = useStaticQuery(graphql`
    query {
      allJobsJson {
        edges {
          node {
            company
            duration {
              from
              to
            }
            descriptionBullets
            technologies
          }
        }
      }
    }
  `);
  const jobs: Job[] = jobsData.allJobsJson.edges.map(
    (edge: { node: Job }) => edge.node
  );

  return (
    <div className="lg:flex gap-8 px-4 lg:px-12 container mx-auto min-h-screen">
      <header className="flex flex-col gap-4 lg:w-1/2 lg:justify-between lg:min-h-screen py-20 lg:sticky lg:top-0 lg:self-start">
        <div>
          <h1 className="text-6xl font-bold text-yellow">Jonas Mattes</h1>
          <h2 className="font-mono text-blue-light">
            Software Engineer who loves to build intuitive web experiences.
          </h2>
        </div>
        <SocialMediaIcons />
      </header>
      <main className="lg:py-36 lg:w-1/2 font-mono text-sm text-white overflow-y-auto flex-shrink-0">
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
          <Jobs jobs={jobs} />
        </section>
      </main>
    </div>
  );
};

export default CV;