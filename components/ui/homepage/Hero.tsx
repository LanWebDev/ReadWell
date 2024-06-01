import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/button";
import booksPng from "@/assets/home-books.png";

const Hero = () => {
  return (
    <div className="bg-blue-100 h-[50rem] flex pt-[13rem]">
      <div className="p-10 lg:w-[50%] ">
        <p className="sm:text-[4rem] text-[3rem] font-bold ">
          Buy books <br />{" "}
          <span className="text-blue-600">for the best prices</span>
        </p>

        <p className="pt-4 md:pt-10">
          Explore Endless Worlds of Knowledge! Shop Now for Your Next Favorite
          Read.
        </p>
        <Link href={"/shop"}>
          <Button className="bg-blue-600 w-[12rem] hover:bg-blue-600/80 scale-125 mt-6 ml-6">
            Shop Now
          </Button>
        </Link>
      </div>
      <div className="w-[50%] p-10 hidden lg:block">
        <Image src={booksPng} alt="books" />
      </div>
    </div>
  );
};

export default Hero;
