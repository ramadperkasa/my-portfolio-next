import Link from 'next/link';
import React from 'react';

const NavbarMenu: React.FC<{
  id: string;
  title: string;
  link: string | null;
  onSelected: (id: string) => void;
  isActive: boolean;
  icon: string;
}> = ({ id, title, link, onSelected, isActive, icon }) => {
  const Icon = () => <div dangerouslySetInnerHTML={{ __html: icon }} />;
  return (
    <li>
      <Link
        onClick={() => onSelected(id)}
        href={link ? link : '#'}
        className={
          `align-center mx-5 inline-flex items-center gap-2 rounded px-3 py-2 text-lg md:bg-transparent md:p-0` +
          (isActive
            ? ' bg-primary md:text-primary font-bold text-white'
            : ' md:hover:text-primary')
        }
        aria-current='page'
      >
        <Icon />
        {title}
      </Link>
    </li>
  );
};

export default NavbarMenu;
