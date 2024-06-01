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

export const reviews = [
  {
    id: 0,
    quote:
      "Absolutely love this bookstore app! The interface is sleek and easy to navigate, making it a breeze to find and purchase my favorite reads. Plus, the recommendations are spot-on—I've discovered some amazing new authors through this app. Highly recommend for any bookworm!",
    name: "John Doe",
  },
  {
    id: 1,
    quote:
      "As an avid reader, I've tried numerous bookstore apps, but this one stands out for its vast selection and seamless user experience. Whether I'm looking for the latest bestseller or a niche genre, I can always count on finding it here. Plus, the personalized recommendations help me discover hidden gems I might have otherwise missed.",
    name: "Anonymous",
  },
  {
    id: 2,
    quote:
      "I've been using this app for months now, and it's become my go-to for all things books. The ability to create and manage wishlists is incredibly handy, especially around gift-giving seasons. And the in-app reader reviews make it easy to gauge whether a book is worth diving into. 10/10 recommend!",
    name: "Jane Doe",
  },
  {
    id: 3,
    quote:
      "Finally, a bookstore app that gets it right! The search function is robust, allowing me to filter by author, genre, publication date, and more. Plus, the seamless integration with my e-reader means I can purchase and start reading a new book in just a few taps. This app has revolutionized the way I discover and consume literature.",
    name: "Anonymous",
  },
  {
    id: 4,
    quote:
      "I can't say enough good things about this app. It's like having a bookstore in my pocket! The curated collections are a fantastic way to discover new titles, and I love how easy it is to browse by category or theme. Whether I'm in the mood for a gripping thriller or a heartwarming romance, I know I can find exactly what I'm looking for here.",
    name: "Anonymous",
  },
];
