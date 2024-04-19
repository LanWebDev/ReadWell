"use client";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import { navigation } from "@/constants/constants";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import { HamburgerBtn } from "./HamburgerButton";
import Logo from "@/assets/bookWell.png";
import Cart from "./Cart";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 border-b  bg-white/90  backdrop-blur-sm  ">
        <div className="flex items-center  px-5 lg:px-7.5 xl:px-10 py-4">
          <Link className="block  mr-4" href={"/"}>
            <Image src={Logo} alt="bookWell logo" width={200} />
          </Link>
          <Input
            type="text"
            placeholder="search books"
            className="text-black w-[25rem] hidden sm:block"
          />
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-gray-400  lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={"link"}
                  onClick={handleClick}
                  className={`relative hover:text-gray-300 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6  md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  <Link href={item.url}>{item.title}</Link>
                </Button>
              ))}
            </div>
          </nav>

          <Button className="hidden lg:flex py-3  bg-gradient-to-r from-cyan-500 to-blue-500 border-opacity-75 hover:opacity-70 mr-4">
            <Link className=" " href={"/signin"}>
              Sign in
            </Link>
          </Button>
          <HamburgerBtn
            className={"mx-3 lg:hidden px-3"}
            toggleNavigation={toggleNavigation}
          />
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Header;
