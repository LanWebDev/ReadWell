"use client";
import React from "react";
import BookCard from "./BookCard";
import BookPagination from "./BookPagination";
import useBooks from "@/hooks/useBooks";
import Loading from "./Loading";

const Books = () => {
  const { searchedBooks: books, loading, error } = useBooks();
  console.log("loading", loading);
  console.log("books: ", books);
  return (
    <div className="flex flex-col w-full">
      {loading ? (
        <div className="flex flex-col justify-center items-center align-center w-full h-full bg-slate-100">
          <p className="font-4xl font-bold">Loading books!</p>
          <Loading className="w-[4rem]" />
        </div>
      ) : (
        ""
      )}
      {loading ||
        (error && (
          <div className="flex flex-col justify-center items-center align-center w-full h-full bg-slate-100">
            <p>No books found. Try searching for something else!</p>
          </div>
        ))}
      <div className="bg-slate-100 w-full h-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        {books.map((book: any) => {
          // if (!book.volumeInfo.imageLinks) return;
          return (
            <BookCard
              key={book.id}
              id={book.id}
              thumbnail={book.volumeInfo.imageLinks?.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
            />
          );
        })}
      </div>
      <BookPagination />
    </div>
  );
};

export default Books;
