"use client";
import useBook from "@/hooks/useBook";
import Image from "next/image";
import React, { useEffect } from "react";
import Footer from "./Footer";
import { Button } from "./button";
import { price } from "@/constants/constants";
import Loading from "./Loading";

const BookDetails = (props: any) => {
  const { setBookId, loading, bookData, error } = useBook();

  useEffect(() => {
    if (props.id !== "") {
      setBookId(props.id);
    }
  }, [props.id, setBookId]);

  return (
    <div className="h-[100vh] pt-[7rem] ">
      <div className="p-10 ">
        <div className="gap-20 flex-row md:flex justify-center">
          <div>
            <Image
              className="max-h-full max-w-full"
              src={bookData.imageLinks?.medium}
              alt="book cover"
              height={300}
              width={300}
            />
          </div>
          <div className="w-[30%] relative">
            <p className="text-4xl font-bold font-serif ">
              {bookData.title ? bookData.title : "N/A"}
            </p>
            <p className="pt-2">
              {bookData.authors ? bookData.authors[0] : "N/A"}
            </p>
            <p className="font-bold text-base pt-2">€{price}</p>
            <Button
              className="mt-4 w-full font-bold text-white bg-rose-700 hover:bg-rose-800 hover:shadow-xl hover:scale-105 hover:transition-transform hover:text-white absolute bottom-0"
              variant={"outline"}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BookDetails;
