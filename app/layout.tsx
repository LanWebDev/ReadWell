import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReadWell",
  description: "The only book store you'll ever need.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <html lang="en">
          <body
            className={`${inter.className} flex justify-center items-center w-full`}
          >
            <div className="max-w-[100rem] w-full">
              <Header />
              <main>{children}</main>
            </div>
          </body>
        </html>
      </CartProvider>
    </SessionProvider>
  );
}
