import BannerSection from "@/components/home/BannerSection";
import Brands from "@/components/home/Brands";
import CtaSection from "@/components/home/CtaSection";
import Header from "@/components/home/Header";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Products />
      {/* <BannerSection /> */}
      <CtaSection />
      <Brands />
    </main>
  );
}
