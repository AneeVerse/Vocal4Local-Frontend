import Link from 'next/link';

const AnimatedLinkButton = ({ href, text }) => {
  return (
    <div className="relative inline-block">
      <Link href={href} className="relative z-10  rounded-full px-8 py-[8px] text-lg font-medium text-secondary border overflow-hidden group inline-block">
          <span className="absolute inset-0 w-0 bg-secondary transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative text-[15px] group-hover:text-white duration-300">{text}</span>
      
      </Link>
    </div>
  );
};

export default AnimatedLinkButton;
