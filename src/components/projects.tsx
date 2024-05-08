import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

export interface CompanyExperience {}

export interface Project {
  company: string;
  title: string;
  duration: { from: string; to: string };
  descriptionBullets: string[];
  technologies: string[];
  link: string;
}

const Projects: React.FC = () => {
  const jobsData = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            company
            title
            duration {
              from
              to
            }
            descriptionBullets
            technologies
            link
          }
        }
      }
    }
  `);

  const projects: Project[] = jobsData.allProjectsJson.edges.map(
    (edge: { node: Project }) => edge.node
  );

  return (
    <div className="flex flex-col md:grid md:grid-cols-2-auto gap-x-8 gap-y-4">
      {projects.map(
        (
          { company, title, duration, descriptionBullets, technologies, link },
          index
        ) => [
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
          <div key={`${index}-1`}>
            <h4 className="font-sans font-bold mb-4">{title}</h4>
            <ul className="text-m list-disc marker:text-blue-light">
              {descriptionBullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
            {link && (
              <div className="col-start-2 underline text-blue-light mt-2">
                <a href={link} target="_blank">
                  Artifarcts
                </a>
              </div>
            )}
          </div>,
          <div key={`${index}-2`} className="col-start-2 space-x-2 mb-4">
            {technologies.map((technology, techIndex) => (
              <span
                key={techIndex}
                className="text-yellow bg-yellow-light px-2 py-1 rounded-full"
              >
                {technology}
              </span>
            ))}
          </div>,
        ]
      )}
    </div>
  );
};

export default Projects;
