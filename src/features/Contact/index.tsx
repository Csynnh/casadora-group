import React from 'react';
import ContactOverlayImage from '../../assets/images/contact_image.png';
import ContactLogo from '../../assets/images/logo/logo_white.png';
import SocialLinks from '../../components/common/SocialLinks';

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
          <SocialLinks
            linkedinUrl={linkedinUrl}
            instagramUrl={instagramUrl}
            facebookUrl={facebookUrl}
            iconColor="white"
            iconSize="w-5 h-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
