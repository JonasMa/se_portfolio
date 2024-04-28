import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import CV from "../components/cv";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <CV/>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jonas Mattes</title>;
