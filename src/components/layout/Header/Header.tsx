import React, { useEffect, useRef, useState } from 'react';
import logo from '../../../assets/images/logo/logo.png';
import linkedinIcon from '../../../assets/images/linkedin_icon.svg';
import instagramIcon from '../../../assets/images/instagram_icon.svg';
import facebookIcon from '../../../assets/images/facebook_icon.svg';
import ChevronIcon from '../../../assets/images/chevron_down.svg?react';
import MenuIcon from '../../../assets/images/menu_icon.svg';

interface HeaderProps {
  className?: string;
}

interface MenuItem {
  label: string;
  href: string;
}

interface NavigationProps {
  label: string;
  menuItems: MenuItem[];
}

const navItems: NavigationProps[] = [
  {
    label: 'About',
    menuItems: [],
  },
  {
    label: 'Services',
    menuItems: [
      {
        label: 'Architecture',
        href: '#',
      },
      {
        label: 'Interior Design',
        href: '#',
      },
      {
        label: 'Manufacturing',
        href: '#',
      },
    ],
  },
  {
    label: 'Projects',
    menuItems: [
      {
        label: 'Residential',
        href: '#',
      },
      {
        label: 'Hospitality',
        href: '#',
      },
    ],
  },
  {
    label: 'Exhibition',
    menuItems: [
      {
        label: 'Novaland Expo',
        href: '#',
      },
      {
        label: 'Hawa Expo',
        href: '#',
      },
      {
        label: 'Maison & Objet Paris',
        href: '#',
      },
      {
        label: 'Hawa Expo',
        href: '#',
      },
      {
        label: 'Maison & Objet Paris',
        href: '#',
      },
    ],
  },
  {
    label: 'Contact',
    menuItems: [],
  },
];

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navItems = document.querySelectorAll('.nav-item');
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        let isClickOnNavItem = false;
        navItems.forEach(item => {
          if (item.contains(event.target as Node)) {
            isClickOnNavItem = true;
          }
        });

        if (!isClickOnNavItem) {
          setActiveDropdown(() => null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(() => (activeDropdown === name ? null : name));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`bg-white shadow-sm ${className} sticky top-0 w-screen z-100`}>
      <div className="flex items-center justify-between py-[0.375rem] px-6 bg-[#FFF5F5]">
        <a className="!text-black !font-light">casadora.group</a>
        <ul className="flex items-center justify-between gap-4">
          <li>
            <a href="">
              <span>
                <img
                  src={linkedinIcon}
                  alt="linkedinIcon"
                  className="w-[18px] h-[18px]"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <img
                  src={instagramIcon}
                  alt="instagramIcon"
                  className="w-[18px] h-[18px]"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <img
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="w-[18px] h-[18px]"
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="flex items-center justify-center py-4 ">
          <img
            src={logo}
            alt="logo"
            className="max-h-[6.25rem] h-full max-w-[8.8125rem] w-full"
          />

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-t border-[#D6D5D8]">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex-1 flex justify-center">
                <ul className="flex space-x-8">
                  {navItems.map(item => (
                    <li key={item.label} className="relative group">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            item.menuItems.length > 0
                              ? toggleDropdown(item.label)
                              : null
                          }
                          className={
                            'hover:text-[#FFC3C3] font-medium text-sm tracking-wider flex items-center uppercase transition-colors duration-200 nav-item ' +
                            (activeDropdown === item.label
                              ? 'text-[#FFC3C3]'
                              : '')
                          }
                          aria-expanded={activeDropdown === item.label}
                          aria-haspopup={
                            item.menuItems.length ? 'true' : 'false'
                          }
                        >
                          {item.label}
                          {item.menuItems.length ? (
                            <ChevronIcon
                              className={
                                'ml-2 h-4 w-4 transition-transform duration-300 ' +
                                (activeDropdown === item.label
                                  ? 'rotate-180'
                                  : '')
                              }
                            ></ChevronIcon>
                          ) : (
                            ''
                          )}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Mega Dropdown Menu */}
        {activeDropdown && (
          <div
            ref={dropdownRef}
            className="absolute left-0 right-0 bg-[#FFF5F5] border-t border-gray-100 shadow-lg z-50 transition-all duration-300 transform animate-in fade-in slide-in-from-top-4"
          >
            <div className="container mx-auto px-4 py-8 relative">
              <div className="flex items-center justify-center flex-col ">
                {navItems
                  .find(item => item.label === activeDropdown)
                  ?.menuItems?.map((item, index) => (
                    <div key={index} className="space-y-4 p-1">
                      <a
                        href={item.href}
                        className="text-sm transition-colors duration-200 font-light"
                        onClick={closeDropdown}
                      >
                        {item.label}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
