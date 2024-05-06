import * as React from 'react';

export type MenuItem = 'about' | 'experience';

interface MenuProps {
  selectedItem: MenuItem;
  onItemSelected: (item: MenuItem) => void;
}

const Item: React.FC<{
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}> = ({ isSelected, children, onClick }) => {
  return (
    <li
      className={`flex items-center cursor-pointer hover:text-yellow ${isSelected ? 'text-yellow' : 'text-blue-light'}`}
      onClick={onClick}
    >
      <span
        className={`border-t mr-4 transition-all ${isSelected ? 'w-12 ' : 'w-8'}`}
      ></span>
      {children}
    </li>
  );
};

const Menu: React.FC<MenuProps> = ({ selectedItem, onItemSelected }) => {
  return (
    <ul className='hidden lg:block w-max flex-grow pt-20'>
      <Item
        isSelected={selectedItem === 'about'}
        onClick={() => onItemSelected('about')}
      >
        About
      </Item>
      <Item
        isSelected={selectedItem === 'experience'}
        onClick={() => onItemSelected('experience')}
      >
        Experience
      </Item>
    </ul>
  );
};

export default Menu;
