export type Products = {
  id: string | number;
  src1: string;
  src2?: string;
  href: string;
  old_price?: number;
  new_price: number;
  description?: string;
  heading: string;
  sales_category?: "popular" | "latest" | "best_offers" | "rated";
  availability?: number;
  sku?: number;
  ratings?: number;
};
export type ProductsType = Products[];

export type CartType = {
  id: string | number;
  src: string;
  href: string;
  title: string;
  price: number;
  quantity: number;
  uid?: string
};
