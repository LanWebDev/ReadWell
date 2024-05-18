"use client";
import Books from "@/components/ui/Books";
import Footer from "@/components/ui/Footer";
import Categories from "@/components/ui/Categories";
import SearchInput from "@/components/ui/SearchInput";
import useBooks from "@/hooks/useBooks";
import CategoriesMenu from "@/components/ui/CategoriesMenu";

export default function Shop() {
  const {
    searchedBooks,
    loading,
    setCategory,
    category,
    error,
    setSearch,
    page,
    setPage,
    nextPageHandler,
    prevPageHandler,
    setDisplayItems,
  } = useBooks();

  return (
    <>
      <div className="pt-[7rem] md:pt-[7.5rem] flex">
        <SearchInput
          setSearch={setSearch}
          setPage={setPage}
          setDisplayItems={setDisplayItems}
        />
        <CategoriesMenu setCategory={setCategory} category={category} />
      </div>
      <div className=" flex justify-center gap-2 p-4 max-sm:p-0 max-sm:pt-[0.5rem]">
        <Categories setCategory={setCategory} category={category} />

        <Books
          searchedBooks={searchedBooks}
          loading={loading}
          error={error}
          page={page}
          nextPageHandler={nextPageHandler}
          prevPageHandler={prevPageHandler}
        />
      </div>
      <Footer />
    </>
  );
}
