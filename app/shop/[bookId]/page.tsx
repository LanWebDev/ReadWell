"use client";

import BookDetails from "@/components/ui/shop/BookDetails";
import React from "react";

const page = ({ params }: { params: { bookId: string } }) => {
  return <BookDetails id={params.bookId} />;
};

export default page;
