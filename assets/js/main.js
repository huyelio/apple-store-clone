import { createCardsshelf } from "./card.js";

const products = [
  {
    title: "MacBook Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-1.jpg",
  },
  {
    title: "iPad Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-2.jpg",
  },
  {
    title: "iPhone 14 Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-3.jpg",
  },
  {
    title: "MacBook Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-4.jpg",
  },
  {
    title: "MacBook Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-5.jpg",
  },
  {
    title: "MacBook Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-6.jpg",
  },
  {
    title: "MacBook Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-3.jpg",
  },
];

const cardsshelf = document.querySelector(".cardsshelf-scroller-list");
cardsshelf.innerHTML = products.map(createCardsshelf).join("");
