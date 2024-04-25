import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="block">
        <h1>Jonas Mattes</h1>
        <h2>Software Engineer who loves to build intuitive web experiences.</h2>
      </div>
      <div className="block">
        <p>
          Some text about me and what I do. What do I like about my work and
          what are my preferences? What is my niche? Also some private stuff
          will be apprecialted
        </p>
        <h3>Experience</h3>
        <div className="experiences">
          <div className="experience">
            <div>
              <h4>Google</h4>
              <p>2021 - 2024</p>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </span>
            <div className="technologies"><span>TypeScript</span></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jonas Mattes</title>;
