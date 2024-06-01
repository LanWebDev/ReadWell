import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/button";

import favoriteBook from "@/assets/favoritebook.jpg";

const FavoriteBook = () => {
  return (
    <div className="px-4 lg:px-24 mt-20 flex flex-col md:flex-row justify-between items-center gap-12 bg-blue-200 p-10">
      <div className="md:w-1/2">
        <Image
          src={favoriteBook}
          alt="favorite books"
          className="rounded md:w-10/12"
        />
      </div>
      <div className="md:w-1/2 space-y-6">
        <p className="text-5xl font-bold my-5 md:w-3/4 leading-snug ">
          Find Your Favorite <br />{" "}
          <span className="text-blue-600">Book Here!</span>
        </p>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quidem non sunt dolorum! Minima ipsam odio deserunt quae! Commodi
          perferendis praesentium labore incidunt, suscipit perspiciatis autem
          minima dolor voluptas. Molestiae!
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">40.000.000+ </h3>
            <p className="text-base">Books</p>
          </div>
        </div>

        <div>
          <Link href={"/shop"}>
            <Button className="bg-blue-600 hover:bg-blue-600/80 transition-all duration-300 px-5 py-2 ">
              Explore more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavoriteBook;
