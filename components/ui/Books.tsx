"use client";
import React from "react";
import BookCard from "./BookCard";
import BookPagination from "./BookPagination";
import { price } from "@/constants/constants";
import Loading from "./Loading";

interface BooksProps {
  searchedBooks: any;
  loading: boolean;
  error: boolean;
  page: number;
  nextPageHandler: () => void;
  prevPageHandler: () => void;
}

const Books = ({
  searchedBooks: books,
  loading,
  error,
  page,
  nextPageHandler,
  prevPageHandler,
}: BooksProps) => {
  return (
    <div className="flex flex-col w-full">
      {loading ? (
        <div className="flex flex-col justify-center items-center align-center w-full h-[80vh] bg-slate-100">
          <p className="font-4xl font-bold">Loading books!</p>
          <Loading className="w-[4rem]" />
        </div>
      ) : (
        ""
      )}

      {loading ||
        (error && (
          <div className="flex flex-col justify-center items-center align-middle w-full h-[80vh] bg-slate-100 p-4">
            <p>No books found. Try searching for something else!</p>
          </div>
        ))}
      <div className="bg-slate-100 w-full h-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        {loading ||
          books.map((book: any) => {
            if (!book.volumeInfo.imageLinks) return;
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
      <BookPagination
        page={page}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
        error={error}
      />
    </div>
  );
};

export default Books;
