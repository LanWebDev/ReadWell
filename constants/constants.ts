import facebookIcon from "@/assets/icons/facebook.png";
import twitterIcon from "@/assets/icons/twitter.png";
import instagramIcon from "@/assets/icons/instagram.png";

export const navigation = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "Shop",
    url: "/shop",
  },
];

export const footerIcons = [
  {
    id: 0,
    src: facebookIcon,
    alt: "facebook icon",
  },
  {
    id: 1,
    src: twitterIcon,
    alt: "twitter icon",
  },
  {
    id: 2,
    src: instagramIcon,
    alt: "instagram icon",
  },
];

export const price = 14.99;

export const categories: { value: string; label: string }[] = [
  { value: "architecture", label: "Architecture" },
  { value: "art", label: "Art" },
  { value: "biography", label: "Biography" },
  { value: "business", label: "Business" },
  { value: "comics", label: "Comics" },
  { value: "computers", label: "Computers" },
  { value: "cooking", label: "Cooking" },
  { value: "design", label: "Design" },
  { value: "drama", label: "Drama" },
  { value: "education", label: "Education" },
  { value: "family", label: "Family" },
  { value: "fiction", label: "Fiction" },
  { value: "health", label: "Health" },
  { value: "history", label: "History" },
  { value: "humor", label: "Humor" },
  { value: "law", label: "Law" },
  { value: "criticism", label: "Criticism" },
  { value: "mathematics", label: "Mathematics" },
  { value: "medical", label: "Medical" },
  { value: "music", label: "Music" },
  { value: "nature", label: "Nature" },
  { value: "philosophy", label: "Philosophy" },
  { value: "photography", label: "Photography" },
  { value: "poetry", label: "Poetry" },
  { value: "psychology", label: "Psychology" },
  { value: "religion", label: "Religion" },
  { value: "romance", label: "Romance" },
  { value: "science", label: "Science" },
  { value: "self-help", label: "Self-Help" },
  { value: "sports", label: "Sports" },
  { value: "technology", label: "Technology" },
  { value: "travel", label: "Travel" },
  { value: "crime", label: "Crime" },
];

export const featuredFictionBooks = [
  {
    id: "TazgEAAAQBAJ",
    thumbnail:
      "http://books.google.com/books/content?id=TazgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "You Like It Darker",
    author: ["Stephen King"],
    price: 14.99,
    quantity: 1,
  },
  {
    author: ["Kristin Hannah"],
    id: "EDQb0AEACAAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=EDQb0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "The Women",
  },
  {
    author: ["Nora Roberts"],
    id: "4hHYEAAAQBAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=4hHYEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "Mind Games",
  },
  {
    author: ["Emily Henry"],
    id: "m9PMEAAAQBAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=m9PMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "Funny Story",
  },
  {
    author: ["Colleen Hoover"],
    id: "wmnuDwAAQBAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=wmnuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "It Ends with Us",
  },
];

export const featuredNonFictionBooks = [
  {
    author: ["Bill Maher"],
    id: "aiToEAAAQBAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=aiToEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "What This Comedian Said Will Shock You",
  },
  {
    author: ["Erik Larson"],
    id: "lpY80AEACAAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=lpY80AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "The Demon of Unrest",
  },
  {
    author: ["Jonathan Haidt"],
    id: "I03HEAAAQBAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=I03HEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "The Anxious Generation",
  },
  {
    author: ["George Stephanopoulos"],
    id: "s5gn0AEACAAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=s5gn0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "The Situation Room",
  },
  {
    author: ["Elizabeth Beller"],
    id: "fRjdEAAAQBAJ",
    price: 14.99,
    quantity: 1,
    thumbnail:
      "http://books.google.com/books/content?id=fRjdEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "Once Upon a Time",
  },
];
