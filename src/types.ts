import { getSingleProduct } from "./helpers/products";

export type Products = {
  id: string;
  src1: string;
  src2: string | null;
  href: string;
  old_price: number | null;
  new_price: number;
  heading: string;
  sales_category: string | null;
  description: string | null;
  availability: number;
  storeId: string;
  sku: number | null;
  ratings: number | null;
} | null;

export type ProductsType = Products[];

export type CartType = {
  id?: string;
  src: string;
  href: string;
  title: string;
  price: number;
  quantity: number;
  productId: string;
};

export type SignUp = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  country?: string;
  city?: string;
  phone?: string;
  address?: string;
};

export type WishListType = {
  id?: string;
  src: string;
  href: string;
  title: string;
  price: number;
  quantity: number;
  productId: string;
  availability: number;
};

export type UserType = {
  id: string;
  email: string;
  emailVerified: Date | null;
  emailToken: string;
  name: string;
  displayName: string | null;
  image: string | null;
  password: string;
  address: string | null;

  updatedAt: Date;
} | null;
