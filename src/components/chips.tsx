import * as React from 'react';

const Chips: React.FC<{
  className?: string;
  chips: string[];
}> = ({ className, chips }) => {
  return (
    <div className={`flex flex-wrap mb-4 gap-2 ${className}`}>
      {chips.map((name, index) => (
        <span
          key={index}
          className="text-yellow bg-yellow-light px-2 py-1 rounded-full"
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default Chips;
