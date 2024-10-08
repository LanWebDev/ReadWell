import React from "react";
import BookCard from "../BookCard";
import { featuredNonFictionBooks } from "@/constants/constants";

const TrendingNonFictionBooks = () => {
  return (
    <div>
      <h2 className="text-3xl mt-4 ml-4 font-bold text-center ">
        Trending Nonfiction Books
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly max-lg:items-center  md:max-lg:scale-[0.8] ">
        {featuredNonFictionBooks.map((book: any) => {
          return (
            <BookCard
              className={"max-lg:scale-[1]  mx-auto"}
              key={book.id}
              id={book.id}
              thumbnail={book.thumbnail}
              title={book.title}
              author={book.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingNonFictionBooks;
