import BannerSection from "@/components/home/BannerSection";
import Brands from "@/components/home/Brands";
import CtaSection from "@/components/home/CtaSection";
import Header from "@/components/home/Header";
import Products from "@/components/home/Products";
import { getAllProductsInStore } from "@/helpers/products";

export default async function Home() {
  const products = await getAllProductsInStore();
  return (
    <main className="overflow-hidden">
      <Header />
      <Products products={products} />
      <CtaSection />
      <BannerSection />

      <Brands />
    </main>
  );
}
