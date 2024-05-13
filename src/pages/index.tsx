import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';
import CV from '../components/cv';
import SocialMediaIcons from '../components/social';
import Menu, { MenuItem } from '../components/menu';

const IndexPage: React.FC<PageProps> = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem>('about');
  const scrollTo = useRef<MenuItem|undefined>(undefined);
  const onItemSelected = (item: MenuItem) => {
    setSelectedItem(item);
    scrollTo.current = item;
  }

  return (
    <div className="lg:flex gap-8 px-4 container mx-auto min-h-screen">
      <div className="py-20 lg:pt-32 lg:sticky lg:top-0 lg:self-start lg:w-2/5 lg:min-h-screen flex flex-col gap-4 lg:justify-between">
        <header>
          <h1 className="text-6xl font-bold text-yellow">Jonas Mattes</h1>
          <h2 className="font-mono text-blue-light">
            Software Engineer who loves to build intuitive web experiences.
          </h2>
        </header>
        <Menu selectedItem={selectedItem} onItemSelected={onItemSelected} />
        <footer className="flex gap-12 font-mono text-blue-light ">
          <SocialMediaIcons />
          <Link to="/impressum" className="hover:text-yellow">Impressum</Link>
        </footer>
      </div>
      <main className="lg:pt-36 lg:pb-20 lg:w-3/5 font-mono text-sm text-white overflow-y-auto flex-shrink-0">
        <CV scrollToSection={scrollTo.current} onScrolledIntoView={setSelectedItem} />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Jonas Mattes</title>
    <html lang="en" />
  </>
);
