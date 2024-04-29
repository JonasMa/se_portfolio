import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Job, { JobProps } from './job';

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
            description
            technologies
          }
        }
      }
    }
  `);
  const jobs: JobProps[] = jobsData.allJobsJson.edges.map(
    (edge: { node: JobProps }) => edge.node
  );

  return (
    <div className="grid lg:grid-cols-2 gap-8 px-4 lg:px-12 py-20 container mx-auto">
      <header>
        <h1 className="text-6xl font-bold text-yellow">Jonas Mattes</h1>
        <h2 className="font-mono text-blue-light">
          Software Engineer who loves to build intuitive web experiences.
        </h2>
      </header>
      <main className="font-mono text-sm text-white">
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
          {jobs && jobs.map((job) => <Job {...job} />)}
        </section>
      </main>
    </div>
  );
};

export default CV;
