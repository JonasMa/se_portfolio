import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Chips from './chips';
import { Trans } from 'react-i18next';

export interface CompanyExperience {}

export interface Job {
  company: string;
  duration: { from: string; to: string };
  descriptionBullets: string[];
  technologies: string[];
}

const Jobs: React.FC = () => {
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
    <div className="flex flex-col md:grid md:grid-cols-2-auto gap-x-8 gap-y-4">
      {jobs.map(
        ({ company, duration, descriptionBullets, technologies }, index) => [
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
          <ul
            key={`${index}-1`}
            className="text-m list-disc marker:text-blue-light"
          >
            {descriptionBullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>
                <Trans i18nKey={bullet} />
              </li>
            ))}
          </ul>,
          <Chips
            key={`${index}-2`}
            className="col-start-2"
            chips={technologies}
          />,
        ]
      )}
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
        <Trans i18nKey="resume" />
      </a>
    </div>
  );
};

export default Jobs;
