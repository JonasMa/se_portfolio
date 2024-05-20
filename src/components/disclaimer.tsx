import * as React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <>
      This website is 100% self built in <strong>React</strong> with{' '}
      <strong>Gatsby</strong> and <strong>Tailwind CSS</strong>. Check it out on
      my{' '}
      <strong className="underline">
        <a href="https://github.com/JonasMa/se_portfolio" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </strong>{' '}
      if you&apos;re interested.
      <br />
      The website design and functionality is heavily inspired by{' '}
      <a
        href="https://brittanychiang.com/"
        target="blank"
        className="underline"
      >
        Brittany Chiang
      </a>
      .
    </>
  );
};

export default Disclaimer;
