"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useBooks from "@/hooks/useBooks";

const BookPagination = () => {
  const { page, nextPageHandler, prevPageHandler } = useBooks();

  return (
    <Pagination className="bg-full bg-slate-100 ">
      <PaginationContent className="text-black/80">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BookPagination;
