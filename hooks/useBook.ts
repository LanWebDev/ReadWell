import axios from "axios";

import { useEffect, useState } from "react";

const useBook = () => {
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState<any>({});
  const [error, setError] = useState(false);
  const [bookId, setBookId] = useState("");

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await axios
        .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then((response) => {
          const data = response.data.volumeInfo;
          if (data) {
          } else {
            setError(true);
          }
          setBookData(data);
        })
        .catch((err) => console.error(err));
      setLoading(false);
    };
    fetchData();
  }, [bookId]);

  console.log(bookData);
  console.log(bookId);
  console.log(error);
  return {
    loading,
    bookData,
    error,
    setBookId,
  };
};

export default useBook;
