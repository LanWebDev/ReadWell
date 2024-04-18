import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  const startIndex = 0;

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}&startIndex=${startIndex}&maxResults=10`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return NextResponse.json(data);
}
