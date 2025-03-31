import React, { useCallback } from 'react';
import { NavItem as NavItemType } from '../../../types/navigation';
import ChevronIcon from '../../../assets/images/chevron_down.svg?react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  item: NavItemType;
  isActive: boolean;
  isMobile?: boolean;
  onToggle: (label: string) => void;
  onNavItemClick: (item: NavItemType) => void;
  onMobileMenuClose?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  isMobile = false,
  onToggle,
  onNavItemClick,
  onMobileMenuClose,
}) => {
  const handleClick = useCallback(() => {
    if (item.menuItems.length > 0) {
      onToggle(item.label);
    } else {
      onNavItemClick(item);
      if (isMobile && onMobileMenuClose) {
        onMobileMenuClose();
      }
    }
  }, [item, onToggle, onNavItemClick, isMobile, onMobileMenuClose]);

  const handleSubItemClick = useCallback(() => {
    if (isMobile && onMobileMenuClose) {
      onMobileMenuClose();
    }
  }, [isMobile, onMobileMenuClose]);

  if (isMobile) {
    return (
      <li
        className="nav-item px-6 sm:px-20 text-base font-medium leading-6 text-[#414042] hover:text-[#FFC3C3] transition-all duration-200 py-4 border-b border-[#D6D5D8] w-full"
        onClick={handleClick}
      >
        <div className="flex items-center justify-between gap-1">
          {item.label}
          {item.menuItems.length > 0 ? (
            <ChevronIcon className="ml-2 h-4 w-4 transition-transform duration-300 -rotate-90" />
          ) : null}
        </div>
        {item.menuItems.length > 0 && isActive ? (
          <ul className="space-y-2 flex flex-col justify-start items-start mt-4">
            {item.menuItems.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="px-6 sm:px-10 text-base font-medium leading-6 text-[#414042] hover:text-[#FFC3C3] transition-all duration-200 flex items-center gap-1 py-2 w-full"
                onClick={handleSubItemClick}
              >
                <Link to={subItem.href}>{subItem.label}</Link>
              </li>
            ))}
          </ul>
        ) : null}
      </li>
    );
  }

  return (
    <li className="relative group">
      <div className="flex items-center">
        <button
          onClick={handleClick}
          className={
            'hover:text-[#FFC3C3] font-medium text-sm tracking-wider flex items-center uppercase transition-colors duration-200 nav-item ' +
            (isActive ? 'text-[#9F6A6B] underline underline-offset-2' : '')
          }
          aria-expanded={isActive}
          aria-haspopup={item.menuItems.length ? 'true' : 'false'}
        >
          {item.label}
          {item.menuItems.length ? (
            <ChevronIcon
              className={
                'ml-2 h-4 w-4 transition-transform duration-300 ' +
                (isActive ? 'rotate-180' : '')
              }
            />
          ) : null}
        </button>
      </div>
    </li>
  );
};

export default NavItem;
