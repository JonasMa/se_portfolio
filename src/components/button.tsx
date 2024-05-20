import React from 'react';


const Button: React.FC<{ children: React.ReactNode, href?: string }> = ({ children, href }) => (
  <a href={href} role="button" className="block w-max mt-6 px-3 py-2 border-2 border-yellow text-yellow relative group hover:text-blue-dark hover:transition-all">
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-full bg-yellow -z-10 group-hover:w-full transition-all"></span>
  </a>
);

export default Button;
