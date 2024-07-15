import BookDetails from "@/components/ui/shop/BookDetails";

type Props = {
  params: {
    bookId: string;
  };
};

const page = ({ params }: Props) => {
  return <BookDetails id={params.bookId} />;
};

export default page;
