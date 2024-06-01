import Footer from "@/components/ui/Footer";
import Image from "next/image";
import booksPng from "@/assets/home-books.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Newsletter from "@/components/ui/Newsletter";

export const metadata = {
  title: "ReadWell",
  description: "The only book store you need.",
};

export default function Home() {
  return (
    <>
      <div className="h-[100vh] ">
        <div className="bg-blue-100 h-[50rem] flex pt-[13rem]">
          <div className="p-10 lg:w-[50%] ">
            <p className="sm:text-[4rem] text-[3rem] font-bold ">
              Buy books <br />{" "}
              <span className="text-blue-600">for the best prices</span>
            </p>

            <p className="pt-4 md:pt-10">
              Explore Endless Worlds of Knowledge! Shop Now for Your Next
              Favorite Read.
            </p>
            <Link href={"/shop"}>
              <Button className="bg-blue-600 w-[12rem] hover:bg-blue-600/80 scale-125 mt-6 ml-6">
                Shop Now
              </Button>
            </Link>
          </div>
          <div className="w-[50%] p-10 hidden lg:block">
            <Image src={booksPng} alt="books" className=" " />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
