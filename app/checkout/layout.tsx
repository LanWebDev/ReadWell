import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "ReadWell",
  description: "The only book store you'll ever need.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[100rem] w-full">{children}</div>;
}
