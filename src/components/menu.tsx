import * as React from 'react';
import {
  Menu as ScrollMenu,
  MenuItem as ScrollMenuItem,
} from 'react-dynamic-scroll-menu';

export type MenuItem = 'about' | 'jobs' | 'projects';

interface MenuProps {
  selectedItem: MenuItem;
  onItemSelected: (item: MenuItem) => void;
}

const Item: React.FC<{
  children: React.ReactNode;
  isSelected: boolean;
}> = ({ isSelected, children }) => {
  return (
    <span
      className={`flex items-center cursor-pointer hover:text-yellow ${isSelected ? 'text-yellow' : 'text-blue-light'}`}
    >
      <span
        className={`border-t mr-4 transition-all ${isSelected ? 'w-12 ' : 'w-8'}`}
      ></span>
      {children}
    </span>
  );
};

const Menu: React.FC<MenuProps> = () => {
  const [selectedItem, setSelectedItem] = React.useState('about');
  return (
    <ScrollMenu
      className="hidden lg:block w-max flex-grow pt-20"
      onItemActive={(id) => setSelectedItem(id)}
    >
      <ScrollMenuItem sectionId="about" >
        <Item isSelected={selectedItem === 'about'}>About</Item>
      </ScrollMenuItem>
      <ScrollMenuItem sectionId="jobs">
        <Item isSelected={selectedItem === 'jobs'}>Experience</Item>
      </ScrollMenuItem>
      <ScrollMenuItem sectionId="projects">
        <Item isSelected={selectedItem === 'projects'}>Projects</Item>
      </ScrollMenuItem>
    </ScrollMenu>
  );
};

export default Menu;
