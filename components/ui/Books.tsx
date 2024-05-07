import React from "react";
import BookCard from "./BookCard";
import BookPagination from "./BookPagination";
import useBooks from "@/hooks/useBooks";

const Books = () => {
  const { searchedBooks } = useBooks();

  // console.log(searchedBooks);

  // const processData = (booksData: {
  //   items: {
  //     id: number;
  //     selfLink: string;
  //     volumeInfo: {
  //       authors: string;
  //       title: string;
  //     };
  //   };
  //   totalItems: number;
  // }) => {
  //   return {
  //     id: booksData.items.id,
  //     bookLink: booksData[0].items.selfLink,
  //     author: booksData[0].items.volumeInfo.authors,
  //     title: booksData[0].items.volumeInfo.title,
  //     totalBooks: booksData[0].totalItems,
  //   };
  // };

  // let books = [];

  // console.log(books.push(processData(searchedBooks)));
  return (
    <div className="flex flex-col">
      <div className="bg-slate-100 w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 ">
        <BookCard book={searchedBooks} />
      </div>
      <BookPagination />
    </div>
  );
};

export default Books;
