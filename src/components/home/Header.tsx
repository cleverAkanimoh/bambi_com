import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import SliderImage1 from "../../../public/assets/images/slider/slider3-1.png";
import SliderImage2 from "../../../public/assets/images/slider/slider3-2.1.png";
import SliderImage3 from "../../../public/assets/images/slider/slider3.jpg";

export default function Header() {
  return (
    <header className="section">
      <div className="hero-slider swiper-container">
        <div className="swiper-wrapper">
          <SlideItem
            src={SliderImage1}
            title={
              <>
                Shop for the best <br />
                Games and Storybooks <br />
                for kids and family
              </>
            }
          />
          <SlideItem
            src={SliderImage2}
            title={
              <>
                Discover endless <br /> fun with Bambi <br /> screen-free games
              </>
            }
            paragraph="Check out the best gift collection for your baby."
          />
          <SlideItem
            src={SliderImage3}
            title={
              <>
                Shop for the best <br />
                Games and Storybooks <br />
                for kids and family
              </>
            }
            paragraph="Check out the best gift collection for your baby."
          />
        </div>

        <div className="swiper-pagination d-md-none"></div>

        <div className="home-slider-prev swiper-button-prev main-slider-nav d-md-flex d-none">
          <i className="pe-7s-angle-left"></i>
        </div>
        <div className="home-slider-next swiper-button-next main-slider-nav d-md-flex d-none">
          <i className="pe-7s-angle-right"></i>
        </div>
      </div>
    </header>
  );
}

export type ItemType = {
  src: string | StaticImageData;
  paragraph?: string;
  title: React.ReactNode;
};

const SlideItem = ({ src, paragraph, title }: ItemType) => (
  <div className="hero-slide-item swiper-slide">
    <div className="hero-slide-bg">
      <Image src={src} alt="Slider Image" priority />
    </div>
    <div className="container">
      <div className="hero-slide-content">
        <h2 className="title m-0">{title}</h2>
        <p className="text-white">{paragraph}</p>
        <Link href="/shop" className="btn btn-primary btn-hover-light">
          Shop Now
        </Link>
      </div>
    </div>
  </div>
);
