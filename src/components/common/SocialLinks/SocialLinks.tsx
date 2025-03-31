import React from 'react';
import LinkedinIcon from '../../../assets/images/linkedin_icon.svg?react';
import InstagramIcon from '../../../assets/images/instagram_icon.svg?react';
import FacebookIcon from '../../../assets/images/facebook_icon.svg?react';

export interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  iconSize?: string;
  iconColor?: 'white' | 'default';
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconClassName = '',
  linkedinUrl = '#',
  instagramUrl = '#',
  facebookUrl = '#',
  iconSize = 'w-[1.125rem] h-[1.125rem]',
  iconColor = 'default',
}) => {
  const colorClass = iconColor === 'white' ? '[&>path]:fill-white hover:[&>path]:fill-[#FFC3C3]' : '';
  const transitionClass = '[&>path]:transition-all [&>path]:duration-200';
  const finalIconClass = `${iconSize} ${colorClass} ${transitionClass} ${iconClassName}`;

  return (
    <ul className={`flex items-center justify-between gap-4 ${className}`}>
      <li>
        <a href={linkedinUrl} aria-label="LinkedIn">
          <span>
            <LinkedinIcon className={finalIconClass} />
          </span>
        </a>
      </li>
      <li>
        <a href={instagramUrl} aria-label="Instagram">
          <span>
            <InstagramIcon className={finalIconClass} />
          </span>
        </a>
      </li>
      <li>
        <a href={facebookUrl} aria-label="Facebook">
          <span>
            <FacebookIcon className={finalIconClass} />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;