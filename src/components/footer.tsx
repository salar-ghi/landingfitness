'use client'

import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Fitness AI App. All rights reserved.</p>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-primary hover:text-secondary cursor-pointer"
        >
          Back to Top
        </ScrollLink>
      </div>
    </footer>
  );
};

export default Footer;