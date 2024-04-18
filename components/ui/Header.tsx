"use client";
import { Input } from "@/components/ui/input";
import { navigation } from "@/constants/constants";
import Link from "next/link";
import { Button } from "./button";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-[4rem] w-full z-50 border-b border-stone-900 lg:bg-gray-500 lg:background-blur text-white">
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <Link className="block w-[12rem] " href={"#hero"}>
            Logo
          </Link>
          <Input
            type="text"
            placeholder="search books"
            className="text-black w-[25rem]"
          />
          <nav className=" fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
            {navigation.map((item) => (
              <Button key={item.id} variant={"link"}>
                <Link href={item.url}>{item.title}</Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
