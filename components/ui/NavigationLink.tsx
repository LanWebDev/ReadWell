import Link from "next/link";
import React from "react";

interface NavigationLinkProps {
  url: string;
  handleClick: () => void;
  pathname: string;
  title: string;
}

const NavigationLink = ({
  url,
  handleClick,
  pathname,
  title,
}: NavigationLinkProps) => {
  return (
    <Link
      href={url}
      onClick={handleClick}
      className={`group relative text-4xl hover:text-gray-600 hover:transition:color 0.3 ease-out hover:transition-colors lg:hidden mx-6 lg:my-6 my-6 lg:text-base lg:font-semibold ${
        url === pathname ? "z-2 lg:text-gray-900 " : "lg:text-gray-900"
      } `}
    >
      {title}
      <span
        className={`absolute bottom-0 left-0 block h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full ${
          url === pathname ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

export default NavigationLink;
