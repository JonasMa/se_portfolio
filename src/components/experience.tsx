import * as React from "react";

export interface CompanyExperience {}

export interface ExperienceProps {
  company: string;
  duration: { from: string; to: string };
  description: string;
  technologies: string[];
}

const Experience: React.FC<ExperienceProps> = ({
  company,
  duration,
  description,
  technologies,
}) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2-auto gap-4">
      <div className="whitespace-nowrap flex justify-between md:block">
        <h4 className="font-sans font-bold">{company}</h4>
        <p className="text-blue-light">
          {duration.from} - {duration.to}
        </p>
      </div>
      <span className="text-m">{description}</span>
      <div className="col-start-2 space-x-2">
        {technologies.map((technology) => (
          <span className="text-yellow bg-yellow-light px-2 py-1 rounded-full">
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
