import { price } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

interface BookCardProps {
  book: never[];
}

const BookCard = ({ book }: BookCardProps) => {
  console.log("inside: ", book);
  return (
    <>
      {book.map((item: any, i) => {
        if (!item.volumeInfo.imageLinks) return;
        return (
          <div className="m-4 max-w-max max-md:flex max-md:gap-3" key={i}>
            <Link href={""}>
              {item.volumeInfo.imageLinks ? (
                <Image
                  className="shadow-lg p-2 bg-white rounded-sm max-sm:w-[8rem] max-sm:h-[184px] sm:h-[250px] sm:w-[170px]"
                  src={item.volumeInfo.imageLinks.thumbnail}
                  height={200}
                  width={170}
                  alt={""}
                />
              ) : (
                <p className="max-sm:w-[8rem] max-sm:h-[184px] sm:h-[250px] w-[170px] p-10 border-black border ">
                  Image not found
                </p>
              )}
            </Link>

            <div className="flex flex-col pt-2 justify-center relative">
              <h3 className="font-bold text-lg truncate md:w-[170px] sm:w-[130px] max-sm:max-w-[200px]">
                <Link href={""}>
                  {item.volumeInfo.title ? item.volumeInfo.title : "N/A"}
                </Link>
              </h3>
              <p className="text-sm truncate md:w-[170px] sm:w-[130px] max-sm:max-w-[200px]">
                {item.volumeInfo.authors ? item.volumeInfo.authors[0] : "N/A"}
              </p>

              <p className="font-bold text-base pt-2">€{price}</p>
              <Button
                className="mt-4 w-[170px] max-md:w-[130px] font-bold text-white bg-rose-700 hover:bg-rose-800 hover:shadow-xl hover:scale-105 hover:transition-transform hover:text-white max-md:absolute bottom-1"
                variant={"outline"}
              >
                BUY
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
