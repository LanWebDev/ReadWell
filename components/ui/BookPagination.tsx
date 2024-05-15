"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BookPaginationProps {
  page: number;
  nextPageHandler: () => void;
  prevPageHandler: () => void;
  error: boolean;
}

const BookPagination = ({
  page,
  prevPageHandler,
  nextPageHandler,
  error,
}: BookPaginationProps) => {
  return (
    <>
      {error || (
        <Pagination className="bg-full bg-slate-100 ">
          <PaginationContent className="text-black/80">
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious href="#" onClick={prevPageHandler} />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink href="#">{page}</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" onClick={nextPageHandler} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default BookPagination;
