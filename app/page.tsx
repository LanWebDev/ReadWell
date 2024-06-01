import Footer from "@/components/ui/Footer";
import Newsletter from "@/components/ui/Newsletter";
import TrendingFictionBooks from "@/components/ui/TrendingFictionBooks";
import TrendingNonFictionBooks from "@/components/ui/TrendingNonFictionBooks";
import Hero from "@/components/ui/Hero";

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
        <div className="my-6">
          <hr className="border-2" />
        </div>
        <TrendingNonFictionBooks />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
