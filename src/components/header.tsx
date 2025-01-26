'use client'

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-75 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">Fitness AI App</h1>
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:space-x-6`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-white hover:text-primary cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="text-white hover:text-primary cursor-pointer"
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="subscription"
                smooth={true}
                duration={500}
                className="text-white hover:text-primary cursor-pointer"
              >
                Subscription
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="generate-plan"
                smooth={true}
                duration={500}
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary cursor-pointer"
              >
                Generate Plan
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;