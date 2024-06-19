import BannerSection from "@/components/home/BannerSection";
import CtaSection from "@/components/home/CtaSection";
import Header from "@/components/home/Header";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Products />
      {/* <BannerSection /> */}
      <CtaSection />
    </main>
  );
}
