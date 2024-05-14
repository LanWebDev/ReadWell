"use client";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/constants";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import { HamburgerBtn } from "./HamburgerButton";
import Logo from "@/assets/ReadWell.png";
import Cart from "./Cart";
import Image from "next/image";
import { UserButton } from "../auth/UserButton";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import NavigationLink from "./NavigationLink";

const Header = () => {
  const user = useCurrentUser();

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
      <div
        className={`fixed left-0 right-0 mx-auto max-w-[100rem] z-50 border-b border-gray-200 lg:bg-white/90  lg:backdrop-blur-sm ${
          openNavigation ? "bg-white" : "bg-white/90 backdrop-blur-sm "
        } `}
      >
        <div className="flex items-center  px-5 lg:px-7.5 xl:px-10 py-4 ">
          <Link className="block  mr-4 xl:mr-8 hover:opacity-90 " href={"/"}>
            <Image
              src={Logo}
              alt="ReadWell logo"
              width={200}
              className="sm:min-w-[12rem] "
            />
          </Link>

          <nav
            className={`${
              openNavigation ? "flex backdrop-blur-sm" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-white/80  lg:static lg:flex lg:ml-auto  lg:bg-transparent `}
          >
            <div className=" relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  onClick={handleClick}
                  className={`group relative text-4xl hover:text-gray-600 hover:transition:color 0.3 ease-out hover:transition-colors mx-6 lg:my-6 my-6 lg:text-base lg:font-semibold ${
                    item.url === pathname
                      ? "z-2 lg:text-gray-900 "
                      : "lg:text-gray-900"
                  } `}
                >
                  {item.title}
                  <span
                    className={`absolute bottom-0 left-0 block h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full ${
                      item.url === pathname ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              ))}
              {user ? (
                <NavigationLink
                  title="Profile"
                  url="/profile"
                  pathname={pathname}
                  handleClick={handleClick}
                />
              ) : (
                <NavigationLink
                  title="Sign in"
                  url="/auth/signin"
                  pathname={pathname}
                  handleClick={handleClick}
                />
              )}
            </div>
          </nav>

          <div className="flex  ml-auto">
            {user ? (
              <UserButton />
            ) : (
              <Link href={"/auth/signin"}>
                <Button className="hidden lg:flex scale-110 bg-gradient-to-r from-cyan-500 to-blue-500 border-opacity-75 hover:opacity-70 mr-8 ml-5">
                  Sign in
                </Button>
              </Link>
            )}
            <HamburgerBtn
              className={"mx-3 lg:hidden px-3 "}
              toggleNavigation={toggleNavigation}
              openNavigation={openNavigation}
            />
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
