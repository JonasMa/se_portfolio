import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Trans } from 'react-i18next';
import Chips from './chips';

export interface CompanyExperience {}

export interface Job {
  company: string;
  duration: { from: string; to: string };
  description: string;
  technologies: string[];
}

const Jobs: React.FC = () => {
  // TODO: do this server side
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

  const jobs: Job[] = jobsData.allJobsJson.edges.map(
    (edge: { node: Job }) => edge.node
  );

  return (
    <div className="flex flex-col md:grid md:grid-cols-2-auto gap-x-8 gap-y-4">
      {jobs.map(({ company, duration, description, technologies }, index) => [
        <div
          key={`${index}-0`}
          className="whitespace-nowrap flex justify-between md:block"
        >
          <h4 className="font-sans font-bold">{company}</h4>
          <p className="text-blue-light">
            {duration.from}
            {duration.to && ' - ' + duration.to}
          </p>
        </div>,
        <div
          key={`${index}-1`}
          className="text-m list-disc marker:text-blue-light"
        >
          <Trans i18nKey={`jobs.${description}`} />
        </div>,
        <Chips
          key={`${index}-2`}
          className="col-start-2"
          chips={technologies}
        />,
      ])}
      <a
        className="hidden md:block font-sans text-blue-light justify-self-end"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        &rarr;
      </a>
      <a
        className="font-sans text-blue-light underline col-start-2"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Trans i18nKey="jobs.resume" />
      </a>
    </div>
  );
};

export default Jobs;
