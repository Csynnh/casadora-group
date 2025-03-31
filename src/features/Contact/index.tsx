import React from 'react';
import ContactOverlayImage from '../../assets/images/contact_image.png';
import ContactLogo from '../../assets/images/logo/logo_white.png';
import LinkedinIcon from '../../assets/images/linkedin_icon.svg?react';
import InstagramIcon from '../../assets/images/instagram_icon.svg?react';
import FacebookIcon from '../../assets/images/facebook_icon.svg?react';

export interface ContactProps {
  className?: string;
  fullScreen?: boolean;
  linkedinUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  address?: React.ReactNode;
  email?: string;
}

const Contact: React.FC<ContactProps> = ({
  className = '',
  fullScreen = false,
  linkedinUrl = '#',
  instagramUrl = '#',
  facebookUrl = '#',
  address = <>5th Floor of QA Building, <br/> 186B Nguyen Van Huong, Thao Dien Ward, Thu Duc City, <br/>Ho Chi Minh City, Vietnam.</>,
  email = 'contact@casadora.group'
}) => {
  return (
    <section id="casadora-contact" className={`bg-gray-50 relative ${fullScreen ? 'h-screen' : ''} ${className}`}>
      <div className="">
        <img
          src={ContactOverlayImage}
          alt="Contact"
          className="max-w-[100dvw] max-h-[100dvh] w-full h-full object-cover"
        />
      </div>
      <div className="text-center absolute inset-0 bg-[#00000059] backdrop-blur-xs flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <div className="h-full mb-5">
            <img
              src={ContactLogo}
              alt="Logo"
              className="max-h-[6.25rem] h-full"
            />
          </div>
          <p className="text-white mb-5">
            {address}
            <br />
            <br />
            {email}
          </p>
          <ul className="flex items-center justify-between gap-4">
            <li>
              <a href={linkedinUrl}>
                <span className="text-white">
                  <LinkedinIcon className="[&>path]:fill-white w-5 h-5" />
                </span>
              </a>
            </li>
            <li>
              <a href={instagramUrl}>
                <span className="text-white">
                  <InstagramIcon className="[&>path]:fill-white w-5 h-5" />
                </span>
              </a>
            </li>
            <li>
              <a href={facebookUrl}>
                <span className="text-white">
                  <FacebookIcon className="[&>path]:fill-white w-5 h-5" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
