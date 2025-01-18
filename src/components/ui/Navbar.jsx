"use client"
import { useEffect, useState } from 'react';
import { FiMenu, FiUser, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = ({color}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the menu list
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Campaign Details', href: '/campaign-details/1' },
    { name: 'What we do', href: '/what-we-do' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // set the background color of the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    console.log(window.scrollY);
    console.log(isScrolled);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0  left-0 right-0 z-40  p-4 transition-all duration-500 ${isScrolled ? 'bg-white backdrop-blur-md bg-opacity-50 ' : 'bg-transparent'}`} style={{ height: '90px' , }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className={`${isScrolled ? " text-secondary " : " text-white "} transition-all duration-300 text-2xl`}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Logo */}
        <Link href={"/"} className={`text-3xl ${isScrolled ? " text-secondary " : ` text-${color} `} transition-all duration-300 block font-bold`}>
          V4L
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center bg-white gap-5 px-8 py-2 rounded-full">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className={` text-secondary border ${pathname == item.href ? " border-gray-200 " : " border-transparent "} hover:border-gray-200  rounded-full px-3 py-[5px] hover:text-black duration-300 hover:translate-y-[-2px]`}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Profile Icon */}

        <div className="flex items-center gap-8">
        <button className="bg-white hidden lg:block text-secondary px-8 py-3 rounded-full hover:text-black duration-300 hover:translate-y-[-2px]">
            Button
          </button>
          
          {/* <FiUser className={`text-2xl ${isScrolled ? " text-secondary " : ` text-${color} `} transition-all duration-300 hover:translate-y-[-2px]  cursor-pointer`} /> */}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="fixed top-0 left-0 w-3/4 z-50 h-screen bg-primary p-6 shadow-lg lg:hidden"
        >
          <div className="flex justify-between items-center mb-8">
            {/* Logo in Sidebar */}
            <Link href={"/"} className="text-3xl text-secondary font-bold">
           V4L
            </Link>
            {/* Close Button */}
            <button onClick={toggleMenu} className="text-secondary text-2xl">
              <FiX />
            </button>
          </div>
          <nav className="space-y-6">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="block text-secondary text-lg">
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
