import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

const exploreLinks = [
  { name: 'About', url: '#' },
  { name: 'Services', url: '#' },
  { name: 'Career', url: '#' },
  { name: 'Payment', url: '#' },
  { name: 'Pricing', url: '#' },
  { name: 'FAQs', url: '#' },
  { name: 'Testimonials', url: '#' },
];

const resourcesLinks = [
  { name: 'Banking', url: '#' },
  { name: 'Team', url: '#' },
  { name: 'Integration', url: '#' },
  { name: 'Blog', url: '#' },
  { name: 'Log In', url: '#' },
  { name: 'Sign Up', url: '#' },
  { name: '404', url: '#' },
];

const socialLinks = [
  { icon: <FaFacebook size={20} />, url: 'https://facebook.com' },
  { icon: <FaGithub size={20} />, url: 'https://github.com' },
  { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com' },
  { icon: <FaBehance size={20} />, url: 'https://behance.net' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Logo and description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">Vocal 4 Local</h1>
            <p>
              Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id
              mauris.
            </p>
          </div>

          {/* Explore section */}
          <div className=" mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources section */}
          <div className=" mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="">
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <p className="mb-2">Need Support?</p>
            <p className="mb-2">Hallo@Example.Com</p>
            <p className="mb-6">+391 (0)35 2568 4593</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t pt-6 flex flex-wrap justify-between items-center text-sm">
          <p>© 2025 Vocal 4 Local. All Rights Reserved</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
