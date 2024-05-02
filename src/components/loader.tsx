import * as React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center content-center w-full h-full">
      <div className="w-40 h-40 rounded-full border-8 border-yellow-light border-t-blue-light border-solid"></div>
    </div>
  );
};

export default Loader;
