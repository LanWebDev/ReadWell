"use client";
import Books from "@/components/ui/Books";
import Footer from "@/components/ui/Footer";
import Categories from "@/components/ui/Categories";

export default function Shop() {
  return (
    <>
      <div className="pt-[12rem] flex justify-center gap-2 p-4 max-sm:p-0 max-sm:pt-[6.5rem]">
        <Categories />
        <Books />
      </div>
      <Footer />
    </>
  );
}
