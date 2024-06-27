import { ProductsType } from "@/types";
import { prisma } from "./prisma";

export const products = [
  {
    src: "/assets/images/products/medium-product/product.png",
    heading: "Dinosaur Toys for Baby",
    price: 50,
  },
  {
    src: "/assets/images/products/medium-product/product.png",
    heading: "Dinosaur Toys for Baby",
    price: 50,
  },
  {
    src: "/assets/images/products/medium-product/product.png",
    heading: "Dinosaur Toys for Baby",
    price: 50,
  },
  {
    src: "/assets/images/products/medium-product/product.png",
    heading: "Dinosaur Toys for Baby",
    price: 50,
  },
];

// export const shopProducts: ProductsType = [
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Toy gun",
//     sales_category: "latest",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 122,
//     new_price: 99,
//     heading: "Camping Kit for kids",
//     sales_category: "best_offers",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Ball For kids",
//     sales_category: "latest",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 765,
//     new_price: 600,
//     heading: "Mobile devices",
//     sales_category: "latest",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 75,
//     new_price: 47,
//     heading: "Army gear for kids",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 122,
//     new_price: 100,
//     heading: "Education Ipad for kid",
//     sales_category: "rated",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Management kit for kids",
//     sales_category: "rated",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },

//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "latest",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "latest",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "popular",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
//   {
//     src1: "/assets/images/products/medium-product/2.jpg",
//     src2: "/assets/images/products/medium-product/3.jpg",
//     href: "/shop",
//     old_price: 12,
//     new_price: 10,
//     heading: "Pampers",
//     sales_category: "latest",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     storeId: "bb9b1900-d41d-4947-86b3-0774fa9dfb9e"
//   },
// ];
