import { useEffect, useState } from "react";
import axios from "axios";
import { CookingPot } from "lucide-react";

const useBooks = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [defaultBooks, setDefaultBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [displayItems, setDisplayItems] = useState(0);

  const category = search === "" ? "" : "";

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  function displayItemsHandler() {
    let pages = Math.ceil(totalItems / 20);
  }

  console.log(search);
  console.log(searchedBooks);
  console.log(Math.ceil(totalItems / 20));
  console.log("total item", totalItems);
  console.log("display item", displayItems);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}${
            category && `subject:${category}`
          }&key=${apiKey}&startIndex=${displayItems}&maxResults=20`
        )
        .then((response) => {
          const data = response.data.items;
          const TotalItems = response.data.totalItems;
          setTotalItems(TotalItems);
          setSearchedBooks(data);
          setDefaultBooks(data);
        })
        .catch((err) => console.error(err));
      setLoading(false);
    };
    fetchData();
  }, [apiKey, search, category, displayItems]);

  const nextPageHandler = () => {
    setPage(page + 1);
  };

  const prevPageHandler = () => {
    setPage(page - 1);
  };

  const firstPageHandler = () => {
    setPage(1);
  };

  useEffect(() => {
    // if (!searchedBooks) return;

    if (searchedBooks.length === 0) {
      setError(true);
    }
    if (searchedBooks.length !== 0) {
      setError(false);
    }
  }, [page, searchedBooks, search, category]);

  return {
    loading,
    page,
    nextPageHandler,
    prevPageHandler,
    firstPageHandler,
    searchedBooks,
    setSearch,
    search,
    error,
    category,
    setError,
    setSearchedBooks,
  };
};

export default useBooks;
