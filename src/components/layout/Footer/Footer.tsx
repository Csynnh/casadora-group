import React from 'react';
import logo from '../../../assets/images/logo/logo.png';
import unGlobalCompactLogo from '../../../assets/images/logo/global_footer.png';
import LinkedinIcon from '../../../assets/images/linkedin_icon.svg?react';
import InstagramIcon from '../../../assets/images/instagram_icon.svg?react';
import FacebookIcon from '../../../assets/images/facebook_icon.svg?react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[#414042] text-white py-9 px-20 ${className}`}>
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
        <div className="flex justify-between items-end w-full ">
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
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="[&>path]:fill-white w-[1.3125rem] h-[1.3125rem] hover:[&>path]:fill-[#FFC3C3] [&>path]:transition-all [&>path]:duration-200" />
              </a>
              <a href="#" className="text-white hover:text-white">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="[&>path]:fill-white w-[1.3125rem] h-[1.3125rem] hover:[&>path]:fill-[#FFC3C3] [&>path]:transition-all [&>path]:duration-200" />
              </a>
              <a href="#" className="text-white hover:text-white">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="[&>path]:fill-white w-[1.3125rem] h-[1.3125rem] hover:[&>path]:fill-[#FFC3C3] [&>path]:transition-all [&>path]:duration-200" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-right text-white">
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

      <div className="pt-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <p>&copy; {currentYear} Casadora Group. All rights reserved.</p>
        <a href="#" className="!text-white ">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
