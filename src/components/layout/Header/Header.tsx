import React, { useEffect, useRef, useState, useCallback } from 'react';
import logo from '../../../assets/images/logo/logo.png';
import linkedinIcon from '../../../assets/images/linkedin_icon.svg';
import instagramIcon from '../../../assets/images/instagram_icon.svg';
import facebookIcon from '../../../assets/images/facebook_icon.svg';
import ChevronIcon from '../../../assets/images/chevron_down.svg?react';
import MenuIcon from '../../../assets/images/menu_icon.svg?react';
import CloseIcon from '../../../assets/images/close_icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavItem } from '../../../types/navigation';

interface HeaderProps {
  className?: string;
}

// Navigation data
const navItems: NavItem[] = [
  {
    label: 'About',
    menuItems: [],
    href: '/about',
  },
  {
    label: 'Services',
    menuItems: [
      {
        label: 'Architecture',
        href: 'services/architecture',
      },
      {
        label: 'Interior Design',
        href: 'services/interior-design',
      },
      {
        label: 'Manufacturing',
        href: 'services/manufacturing',
      },
    ],
  },
  {
    label: 'Projects',
    menuItems: [
      {
        label: 'Residential',
        href: 'projects/residential',
      },
      {
        label: 'Hospitality',
        href: 'projects/hospitality',
      },
    ],
  },
  {
    label: 'Exhibition',
    menuItems: [
      {
        label: 'Novaland Expo',
        href: 'exhibition/novaland-expo',
      },
      {
        label: 'Hawa Expo',
        href: 'exhibition/hawa-expo',
      },
      {
        label: 'Maison & Objet Paris',
        href: 'exhibition/maison-objet-paris',
      },
      {
        label: 'Novaland Expo',
        href: 'exhibition/novaland-expo',
      },
      {
        label: 'Hawa Expo',
        href: 'exhibition/hawa-expo',
      },
      {
        label: 'Maison & Objet Paris',
        href: 'exhibition/maison-objet-paris',
      },
    ],
  },
  {
    label: 'Contact',
    menuItems: [],
    href: '#casadora-contact',
  },
];

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const navigation = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = useCallback((name: string) => {
    setActiveDropdown(prevState => (prevState === name ? null : name));
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prevState => !prevState);
    if (activeDropdown) closeDropdown();
  }, [activeDropdown, closeDropdown]);

  useEffect(() => {
    // When isMobileMenuOpen is true, add the "overflow-y-hidden" class to the body
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isMobileMenuOpen]);

  const handleClickOnNavItemMobile = useCallback(
    (item: NavItem) => {
      if (item.menuItems.length <= 0) {
        const path = '/' + item.label.toLowerCase();
        navigation(path);
        toggleMobileMenu();
      } else {
        setActiveDropdown(prevState =>
          prevState === item.label ? null : item.label
        );
      }
    },
    [navigation, toggleMobileMenu]
  );

  const handleNavItemClick = useCallback(
    async (item: NavItem) => {
      if (item.menuItems.length <= 0) {
        const HOMEPAGE = '/';
        const currentPath = window.location.pathname;
        const path = item.href?.toLowerCase() || '/';
        const pathPrefix = path[0];
        if (pathPrefix === '#') {
          if (currentPath !== HOMEPAGE) {
            navigation(HOMEPAGE);
            await new Promise(resolve => setTimeout(resolve, 300));
          }

          const sectionId = path.split('#')[1];
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            sectionElement.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }

        if (pathPrefix === '/') {
          navigation(path);
        }
      }
    },
    [navigation]
  );

  const handleNavToHomePage = useCallback(() => {
    const currentPath = window.location.pathname;
    // If already on the home page, scroll to the top
    if (currentPath === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
    // Otherwise, navigate to the home page and close the men
    navigation('/');
  }, [navigation]);
  return (
    <header
      className={`bg-white shadow-sm ${className} sticky top-0 w-screen z-50`}
    >
      <div className="flex items-center justify-between py-[0.375rem] px-6 bg-[#FFF5F5] z-[51] relative">
        <a
          href="/"
          className="!text-black !font-light hover:text-[#FFC3C3] transition-colors duration-200"
        >
          casadora.group
        </a>
        <ul className="flex items-center justify-between gap-4">
          <li>
            <a href="#" aria-label="LinkedIn">
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
            <a href="#" aria-label="Instagram">
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
            <a href="#" aria-label="Facebook">
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
      <div className="relative z-40">
        <div className="flex items-center justify-between px-6 sm:px-20 lg:px-0 lg:justify-center py-4 z-40 bg-white relative">
          <img
            src={logo}
            alt="logo"
            onClick={handleNavToHomePage}
            className="max-h-[6.25rem] h-full max-w-[8.8125rem] w-full z-40 cursor-pointer"
          />
          <div className="block lg:hidden z-40">
            <span
              style={{
                visibility: isMobileMenuOpen ? 'hidden' : 'visible',
                opacity: isMobileMenuOpen ? 0 : 1,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <MenuIcon
                className={isMobileMenuOpen ? 'size-0 ' : 'size-6'}
                onClick={toggleMobileMenu}
              />
            </span>
            <span
              style={{
                visibility: isMobileMenuOpen ? 'visible' : 'hidden',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <CloseIcon
                className={!isMobileMenuOpen ? 'size-0 ' : 'size-6'}
                onClick={toggleMobileMenu}
              />
            </span>
          </div>
        </div>
        <div
          ref={mobileMenuRef}
          className="lg:hidden py-5 transition-all duration-700 absolute w-full bg-white z-10 left-0 overflow-y-auto nav-menu"
          style={{
            transform: isMobileMenuOpen
              ? 'translateY(0%)'
              : 'translateY(-180%)',
            maxHeight: 'calc(100vh - 120px)',
            opacity: isMobileMenuOpen ? 1 : 0,
            boxShadow: isMobileMenuOpen
              ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              : 'none',
          }}
        >
          <ul className="flex flex-col justify-start items-start h-[calc(100vh-120px)]">
            {navItems.map((item, index) => (
              <li
                key={index + item.label}
                onClick={() => {
                  handleClickOnNavItemMobile(item);
                }}
                className="nav-item px-6 sm:px-20 text-base font-medium leading-6 text-[#414042] hover:text-[#FFC3C3] transition-all duration-200 py-4 border-b border-[#D6D5D8] w-full"
              >
                <div className="flex items-center justify-between gap-1">
                  {item.label}
                  {item.menuItems.length > 0 ? (
                    <ChevronIcon className="ml-2 h-4 w-4 transition-transform duration-300 -rotate-90" />
                  ) : null}
                </div>
                {item.menuItems.length > 0 && activeDropdown === item.label ? (
                  <ul className="space-y-2 flex flex-col justify-start items-start mt-4">
                    {item.menuItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-6 sm:px-10 text-base font-medium leading-6 text-[#414042] hover:text-[#FFC3C3] transition-all duration-200 flex items-center gap-1 py-2 w-full"
                        onClick={toggleMobileMenu}
                      >
                        <a href={subItem.href}>{subItem.label}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block border-t border-[#D6D5D8]">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex-1 flex justify-center">
                <ul className="flex space-x-8">
                  {navItems.map(item => (
                    <li key={item.label} className="relative group">
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            if (item.menuItems.length > 0) {
                              toggleDropdown(item.label);
                            } else {
                              handleNavItemClick(item);
                            }
                          }}
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
            className="hidden lg:block absolute left-0 right-0 bg-[#FFF5F5] border-t border-gray-100 shadow-lg z-50 transition-all duration-300 transform animate-in fade-in slide-in-from-top-4"
          >
            <div className="container mx-auto px-4 py-2 relative">
              <ul className="flex items-center justify-center flex-col ">
                {navItems
                  .find(item => item.label === activeDropdown)
                  ?.menuItems?.map((item, index) => (
                    <li key={index} className="space-y-4 py-3 px-5">
                      <Link
                        to={item.href}
                        className="text-sm transition-colors duration-200 font-light"
                        onClick={closeDropdown}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
