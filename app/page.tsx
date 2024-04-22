import Header from "@/components/ui/Header";
import axios from "axios";
import { useState } from "react";

export const metadata = {
  title: "BookWell",
  description: "The only book store you need.",
};

export default function Home() {
  const [data, setData] = useState([]);
  const fetchBooks = async () => {
    try {
      const res = await axios.get("api/books");
      setData(res.data.items);
      console.log(res.data.items);
      // const res = await fetch(
      //   `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCaaE0FEUpAJ1m3h0X21hJ3UMfPC_YJBas`
      // );
      // const data = res.json();
      // console.log(data);

      // console.log(data);
    } catch (error) {
      // Handle the error here
      console.error("Error fetching books:", error);
      // You might want to set an error state or display a message to the user
    }
  };

  return (
    <>
      <div className="pt-[8rem]">home</div>
    </>
  );
}
