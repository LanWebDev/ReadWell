import { useEffect, useState } from "react";
import axios from "axios";

const useBooks = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [search, setSearch] = useState("");

  const category = search === "" ? "action" : "";

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  console.log(searchedBooks);
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}${
            category && `subject:${category}`
          }&key=${apiKey}&maxResults=20`
        )
        .then((response) => {
          const data = response.data.items;
          const TotalItems = response.data.totalItems;
          console.log(TotalItems);
          console.log(data);
          setSearchedBooks(data);
        })
        .catch((err) => console.error(err));
      setLoading(false);
    };
    fetchData();
  }, [apiKey, search, category]);

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
    loading,
    page,
    nextPageHandler,
    prevPageHandler,
    firstPageHandler,
    searchedBooks,
    setSearch,
    search,
  };
};

export default useBooks;
