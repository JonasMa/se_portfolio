import * as React from 'react';

export interface CompanyExperience {}

export interface JobProps {
  jobs: Job[];
}
export interface Job {
  company: string;
  duration: { from: string; to: string };
  descriptionBullets: string[];
  technologies: string[];
}

const Jobs: React.FC<JobProps> = ({ jobs }: JobProps) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2-auto gap-x-8 gap-y-4">
      {jobs.map(({ company, duration, descriptionBullets, technologies }) => [
        <div className="whitespace-nowrap flex justify-between md:block">
          <h4 className="font-sans font-bold">{company}</h4>
          <p className="text-blue-light">
            {duration.from}
            {duration.to && ' - ' + duration.to}
          </p>
        </div>,
        <ul className="text-m list-disc marker:text-blue-light">
          {descriptionBullets.map(bullet => <li>{bullet}</li>)}
        </ul>,
        <div className="col-start-2 space-x-2 mb-4">
          {technologies.map(technology => (
            <span className="text-yellow bg-yellow-light px-2 py-1 rounded-full">
              {technology}
            </span>
          ))}
        </div>,
      ])}
    </div>
  );
};

export default Jobs;
