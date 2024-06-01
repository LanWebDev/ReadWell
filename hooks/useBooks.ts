import { useEffect, useState } from "react";
import axios from "axios";

const useBooks = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const [search, setSearch] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [displayItems, setDisplayItems] = useState(0);
  const [category, setCategory] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  useEffect(() => {
    if (category || search) {
      setLoading(true);
      const fetchData = async () => {
        await axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${search}${
              category && `subject:${category}`
            }&startIndex=${displayItems}&maxResults=20`
          )
          .then((response) => {
            const data = response.data.items;
            const TotalItems = response.data.totalItems;
            setTotalItems(TotalItems);
            setSearchedBooks(data);
            if (data) {
            } else {
              setError(true);
              setSearchedBooks([]);
            }
          })
          .catch((err) => console.error(err));
        setLoading(false);
      };
      fetchData();
    } else {
      setError(true);
      setSearchedBooks([]);
    }
  }, [apiKey, search, category, displayItems]);

  const nextPageHandler = () => {
    if (totalItems !== 0) {
      setDisplayItems(displayItems + 20);
      setPage(page + 1);
    }
  };

  const prevPageHandler = () => {
    if (totalItems !== 0) {
      setDisplayItems(displayItems - 20);
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if (searchedBooks.length === 0) {
      setError(true);
    }
    if (searchedBooks.length !== 0) {
      setError(false);
    }
  }, [searchedBooks]);

  useEffect(() => {
    if (search === "") {
      setSearchedBooks([]);
    }
    if (search !== "") {
      setCategory("");
    }
  }, [search]);

  useEffect(() => {
    if (category !== "") {
      setSearch("");
    }
  }, [category]);

  return {
    loading,
    page,
    setPage,
    nextPageHandler,
    prevPageHandler,
    setDisplayItems,
    searchedBooks,
    setSearch,
    error,
    setCategory,
    category,
  };
};

export default useBooks;
