import * as React from 'react';
import GithubIcon from './icons/github';
import LinkedInIcon from './icons/linkedin';

const Social: React.FC = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <GithubIcon />
      </li>
      <li>
        <LinkedInIcon />
      </li>
    </ul>
  );
};

export default Social;
