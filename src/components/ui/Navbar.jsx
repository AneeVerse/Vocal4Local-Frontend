"use client"
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiEarthAmerica } from "react-icons/gi"; // Icon for city/world
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [city, setCity] = useState("Select City");
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownItems = [
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Logout", href: "/logout" },
  ];

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Campaign Details", href: "/campaign-details/1" },
    { name: "What we do", href: "/what-we-do" },
    { name: "Contact Us", href: "/contact" },
  ];

  const cities = [
    {
      name: "Mumbai",
      url: "/mumbai",
    },
    {
      name: "Delhi",
      url: "/delhi",
    },
    {
      name: "Bangalore",
      url: "/bangalore",
    },
    {
      name: "Hyderabad",
      url: "/hyderabad",
    },
    {
      name: "Chennai",
      url: "/chennai",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 ${
        isScrolled ? "h-[70px]" : "h-[90px]"
      } p-4 transition-all duration-500 ${
        isScrolled ? "bg-white backdrop-blur-md bg-opacity-50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Mobile Hamburger Icon */}
        <div className="self-center lg:hidden">
          <button
            onClick={toggleMenu}
            className={`${
              isScrolled ? "text-secondary" : `text-${color}`
            } transition-all duration-300 text-2xl`}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className={`text-3xl ${
            isScrolled ? "translate-x-[0%]" : "translate-x-[100%]"
          } lg:translate-x-0 ${
            isScrolled ? "text-secondary" : `text-${color}`
          } transition-all duration-300 block font-bold`}
        >
          V4L
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center bg-white gap-5 px-8 py-2 rounded-full">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-secondary border ${
                pathname == item.href
                  ? "border-gray-200"
                  : "border-transparent"
              } hover:border-gray-200 rounded-full px-3 py-[5px] hover:text-black duration-300 hover:translate-y-[-2px]`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Button with Dynamic City and Icons */}
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={toggleDropdown}
            className={`bg-white ${
              isScrolled ? "scale-1" : "scale-0"
            } lg:scale-100 transition-all lg:block text-secondary px-8 py-3 rounded-full hover:text-black duration-300`}
          >
            <motion.div
              className="flex items-center gap-2"
            >
              <GiEarthAmerica />
              <span>{city}</span>
            </motion.div>
          </button>

          {/* Hover effect to show city names */}
          {dropdownOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute right-0  w-48 bg-white shadow-lg rounded-lg z-50 overflow-hidden"
            >
              {cities.map((cityName, ind) => (
                <Link
                  key={ind}
                  href={cityName.url}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-300"
                >
                  {cityName.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="fixed top-0 left-0 w-3/4 z-50 h-screen bg-primary p-6 shadow-lg lg:hidden"
        >
          <div className="flex justify-between items-center mb-8">
            {/* Logo in Sidebar */}
            <Link href="/" className="text-3xl text-secondary font-bold">
              V4L
            </Link>
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="text-secondary text-2xl"
            >
              <FiX />
            </button>
          </div>
          <nav className="space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-secondary text-lg"
              >
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
