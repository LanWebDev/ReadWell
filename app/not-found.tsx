import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-[10rem] flex flex-col justify-center align-middle items-center w-full">
      <h2 className="font-bold text-2xl">Error</h2>
      <p className="text-black/70 text-sm">This page could not be found.</p>
      <Button
        variant={"ghost"}
        className="text-blue-500 hover:bg-transparent hover:text-blue-500/70"
      >
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
