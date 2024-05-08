import { useState } from "react";

interface HamburgerBtnProps {
  toggleNavigation: () => void;
  className: string;
  openNavigation: boolean;
}

export function HamburgerBtn({
  toggleNavigation,
  className,
  openNavigation,
}: HamburgerBtnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-[0.2rem]  rounded-full bg-black transition ease transform duration-300`;

  console.log(openNavigation);

  if (openNavigation === false && isOpen === true) {
    setIsOpen(false);
  }
  return (
    <button
      className={`${className} flex flex-col h-12 w-12 justify-center items-center group`}
      onClick={() => {
        setIsOpen(!isOpen);
        toggleNavigation();
      }}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-75 group-hover:opacity-50"
            : "opacity-75 group-hover:opacity-50"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-75 group-hover:opacity-50"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2 opacity-75 group-hover:opacity-50"
            : "opacity-75 group-hover:opacity-50"
        }`}
      />
    </button>
  );
}
