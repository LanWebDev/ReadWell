import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${inter.className} max-w-[100rem] mx-auto `}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </SessionProvider>
  );
}
