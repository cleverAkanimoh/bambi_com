import { getSingleProduct } from "./helpers/products";

export type Products = typeof getSingleProduct;
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
