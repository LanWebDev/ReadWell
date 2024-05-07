import { useEffect, useState } from "react";
import axios from "axios";

const useBooks = () => {
  const [page, setPage] = useState(1);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:goggins&key=${apiKey}&maxResults=20`
        )
        .then((response) => {
          const data = response.data.items;
          setSearchedBooks(data);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, [apiKey]);

  const nextPageHandler = () => {
    setPage(page + 1);
  };

  const prevPageHandler = () => {
    setPage(page - 1);
  };

  const firstPageHandler = () => {
    setPage(1);
  };

  return {
    page,
    nextPageHandler,
    prevPageHandler,
    firstPageHandler,
    searchedBooks,
  };
};

export default useBooks;
