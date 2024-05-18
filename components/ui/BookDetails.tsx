"use client";
import useBook from "@/hooks/useBook";
import Image from "next/image";
import React, { useEffect } from "react";
import Footer from "./Footer";
import { Button } from "./button";
import { price } from "@/constants/constants";

import Link from "next/link";

const BookDetails = (props: any) => {
  const { setBookId, bookData } = useBook();

  useEffect(() => {
    if (props.id !== "") {
      setBookId(props.id);
    }
  }, [props.id, setBookId]);

  function removeHtmlTags(paragraph: string) {
    return paragraph.replace(/<\/?[^>]+(>|$)/g, " ");
  }

  return (
    <div className="h-[100vh] pt-[7.5rem] ">
      <Link href={"/shop"}>
        <button
          type="button"
          className=" flex items-center justify-center ml-10 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Back to Shop</span>
        </button>
      </Link>
      <div className="p-10 flex justify-center">
        <div className="gap-20 flex-row md:flex justify-center">
          <div className="justify-center flex">
            <div>
              <Image
                className=" shadow-lg"
                src={bookData.imageLinks?.medium}
                alt="book cover"
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="md:max-w-[50%] flex flex-col max-md:mt-4 md:h-full ">
            <h2 className="text-4xl font-bold font-serif md:max-w-[23rem] md:min-w-[20rem]">
              {bookData.title ? bookData.title : "N/A"}
            </h2>
            <p className="pt-2">
              {bookData.authors ? bookData.authors[0] : "N/A"}
            </p>

            <p className="font-bold text-base pt-2">€{price}</p>
            <Button
              className="mt-4 w-full font-bold md:max-w-[23rem] md:min-w-[20rem] text-white bg-rose-700 hover:bg-rose-800 hover:shadow-xl hover:scale-105 hover:transition-transform hover:text-white "
              variant={"outline"}
            >
              ADD TO CART
            </Button>

            <div>
              <h3 className="text-3xl mt-5 mb-2 font-bold font-serif">
                Description
              </h3>
              <p>
                {bookData.description
                  ? removeHtmlTags(bookData.description)
                  : "N/A"}
              </p>
            </div>
            <div>
              <h3 className="text-3xl mt-5 mb-2 font-bold font-serif">
                Product Details
              </h3>
              <div className="grid grid-cols-[auto,1fr] col-gap-2 items-center gap-x-2">
                <div className=" text-right text-sm text-stone-700">Price</div>
                <div className="font-bold ">€{price}</div>

                <div className=" text-right text-sm text-stone-700">
                  Subtitle
                </div>
                <div>{bookData.subtitle ? bookData.subtitle : "N/A"}</div>

                <div className=" text-right text-sm text-stone-700">
                  Publisher
                </div>
                <div>{bookData.publisher ? bookData.publisher : "N/A"}</div>

                <div className=" text-right text-sm text-stone-700">
                  Publish Date
                </div>
                <div>
                  {bookData.publishedDate ? bookData.publishedDate : "N/A"}
                </div>

                <div className="text-right  text-sm text-stone-700">Pages</div>
                <div>{bookData.pageCount ? bookData.pageCount : "N/A"}</div>

                <div className=" text-right text-sm text-stone-700">
                  Dimensions
                </div>
                <div>
                  {bookData.dimensions
                    ? `${bookData.dimensions.height} x ${bookData.dimensions.width} x ${bookData.dimensions.thickness}`
                    : "N/A"}
                </div>

                <div className="text-right text-sm text-stone-700">
                  Language
                </div>
                <div>
                  {bookData.language ? `"${bookData.language}"` : "N/A"}
                </div>

                <div className="text-right  text-sm text-stone-700">
                  Preview Link
                </div>
                <div>
                  {bookData.previewLink ? (
                    <Link className="underline" href={bookData.previewLink}>
                      {bookData.previewLink}
                    </Link>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl mt-5 mb-2 font-bold font-serif">
                Average Rating
              </h3>
              <div className="">
                <p className="text-[4rem] shadow-lg text-center border border-black max-w-[50%]">
                  {bookData.averageRating ? bookData.averageRating : "N/A"}
                </p>
              </div>
            </div>
            {/* AVGratings */}
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
