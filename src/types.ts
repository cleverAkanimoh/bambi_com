export type Products = {
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
