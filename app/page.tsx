import Footer from "@/components/ui/Footer";
import Newsletter from "@/components/ui/homepage/Newsletter";
import TrendingFictionBooks from "@/components/ui/homepage/TrendingFictionBooks";
import TrendingNonFictionBooks from "@/components/ui/homepage/TrendingNonFictionBooks";
import Hero from "@/components/ui/homepage/Hero";
import FavoriteBook from "@/components/ui/homepage/FavoriteBook";

import Feedback from "@/components/ui/homepage/Feedback";

export const metadata = {
  title: "ReadWell",
  description: "The only book store you'll ever need.",
};

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <TrendingFictionBooks />
        <div className="my-16" />
        <TrendingNonFictionBooks />
        <FavoriteBook />
        <Feedback />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
