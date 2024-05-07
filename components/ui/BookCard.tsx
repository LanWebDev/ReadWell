import { price } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { Button } from "./button";

interface BookCardProps {
  book: never[];
}

const BookCard = ({ book }: BookCardProps) => {
  console.log(book);
  return (
    <>
      {book.map((item: any) => {
        // let thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
        // console.log(item.volumeInfo.imageLinks.thumbnail);
        return (
          <>
            <div className="m-4 max-w-max max-md:flex max-md:gap-3">
              {item.volumeInfo.imageLinks ? (
                <Image
                  className="shadow-lg p-2 bg-white rounded-sm max-sm:w-[8rem] h-[300px] w-[100%]"
                  src={item.volumeInfo.imageLinks.thumbnail}
                  height={200}
                  width={200}
                  alt={""}
                />
              ) : (
                <p className="h-[300px] p-10 border-black border ">
                  Image not found
                </p>
              )}

              <div className="flex flex-col pt-2 justify-center relative">
                <h3 className="font-bold text-xl md:truncate max-lg:max-w-[200px]">
                  {item.volumeInfo.title}
                </h3>
                <p>{item.volumeInfo.authors[0]}</p>

                <p className="font-bold">€{price}</p>
                <Button
                  className="mt-4 w-[200px] font-bold text-white bg-rose-700 hover:bg-rose-800 hover:shadow-xl hover:scale-105 hover:transition-transform hover:text-white max-sm:absolute bottom-1"
                  variant={"outline"}
                >
                  BUY
                </Button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default BookCard;
