import React from 'react';
import logo from '../../../assets/images/logo/logo.png';
import unGlobalCompactLogo from '../../../assets/images/logo/global_footer.png';
import SocialLinks from '../../common/SocialLinks';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[#414042] text-white py-9 px-6 sm:px-[min(5rem,8.5vw)] ${className}`}>
      <div className="flex flex-col md:flex-row items-start mb-6 space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <img
            src={logo}
            alt="Casadora Logo"
            className="h-[6.75rem] w-auto bg-pink-200 p-2"
          />
        </div>
        <div>
          <img
            src={unGlobalCompactLogo}
            alt="UN Global Compact"
            className="h-[5.4375rem] w-auto mix-blend-plus-lighter"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start w-full border-b border-b-[#FFC3C3] pb-4">
        {/* Company info and navigation */}
        <div className="flex md:justify-between md:items-end w-full flex-col md:flex-row">
          {/* Company info */}
          <div className="mb-6 md:mb-0 md:mr-16 text-left max-w-[25rem] 2xl:max-w-auto">
            <h3 className="text-lg font-semibold uppercase mb-4">
              CASADORA FURNITURE CORPORATION
            </h3>
            <div className="text-white space-y-2">
              <p>5th Floor of QA Building</p>
              <p>
                86B Nguyen Van Huong, Thao Dien Ward, Thu Duc City, Ho Chi Minh
                City, Vietnam.
              </p>
              <p className="mt-4">contact@casadora.group</p>
            </div>

            {/* Social media icons */}
            <div className="mt-4">
              <SocialLinks 
                iconColor="white" 
                iconSize="w-[1.3125rem] h-[1.3125rem]" 
                className="flex gap-1 w-fit"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="text-left md:text-right text-white">
            <ul className="space-y-2">
              <li>
                <a href="#" className="!text-white hover:!text-[#FFC3C3]">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:!text-[#FFC3C3]">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:!text-[#FFC3C3]">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:!text-[#FFC3C3]">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:!text-[#FFC3C3]">
                  EXHIBITIONS
                </a>
              </li>
              <li>
                <a href="#" className="!text-white hover:!text-[#FFC3C3]">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col md:flex-row justify-between items-start md:items-center text-white text-sm">
        <p>&copy; {currentYear} Casadora Group. All rights reserved.</p>
        <a href="#" className="!text-white ">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
