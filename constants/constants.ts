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
  { value: "science", label: "science" },
  { value: "self-help", label: "Self-Help" },
  { value: "sports", label: "Sports" },
  { value: "technology", label: "Technology" },
  { value: "travel", label: "Travel" },
  { value: "crime", label: "Crime" },
];
