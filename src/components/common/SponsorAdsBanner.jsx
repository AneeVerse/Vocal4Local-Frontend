"use client";
import Link from "next/link";

const SponsorAdsBanner = ({ image, link, altText }) => {
  return (
    <div className="my-8 w-full">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={altText}
          className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
        />
      </Link>
    </div>
  );
};

export default SponsorAdsBanner;
