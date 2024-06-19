import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="section">
      <div className="hero-slider swiper-container">
        <div className="swiper-wrapper">
          <div className="hero-slide-item swiper-slide">
            <div className="hero-slide-bg">
              <Image
                width={100}
                height={100}
                src="/assets/images/slider/slider3-1.png"
                alt="Slider Image"
              />
            </div>
            <div className="container">
              <div className="hero-slide-content">
                <h2 className="title m-0">
                  {" "}
                  Shop for the best <br />
                  Games and Storybooks <br />
                  for kids and family{" "}
                </h2>
                <Link
                  href="shop.php"
                  className="btn btn-primary btn-hover-light"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-slide-item swiper-slide">
            <div className="hero-slide-bg">
              <Image
                width={100}
                height={100}
                src="/assets/images/slider/slider3-2.1.png"
                alt="Slider Image"
              />
            </div>
            <div className="container">
              <div className="hero-slide-content">
                <h2 className="title m-0">
                  Discover endless <br /> fun with Bambi <br /> screen-free
                  games
                </h2>
                <p>Check out the best gift collection for your baby.</p>
                <Link href="/shop" className="btn btn-primary btn-hover-light">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-slide-item swiper-slide">
            <div className="hero-slide-bg">
              <Image
                width={100}
                height={100}
                src="/assets/images/slider/slider3.jpg"
                alt="Slider Image"
              />
            </div>
            <div className="container">
              <div className="hero-slide-content">
                <h2 className="title m-0">
                  Discover endless <br /> fun with Bambi <br /> screen-free
                  games
                </h2>
                <p>Check out the best gift collection for your baby.</p>
                <Link href="/shop" className="btn btn-primary btn-hover-light">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-pagination d-md-none"></div>

        <div className="home-slider-prev swiper-button-prev main-slider-nav d-md-flex d-none">
          <i className="pe-7s-angle-left"></i>
        </div>
        <div className="home-slider-next swiper-button-next main-slider-nav d-md-flex d-none">
          <i className="pe-7s-angle-right"></i>
        </div>
      </div>
    </div>
  );
}

const SlideItem = ({ src, title }: { src: string; title: React.ReactNode }) => (
  <div className="hero-slide-item swiper-slide">
    <div className="hero-slide-bg">
      <Image width={500} height={500} src={src} alt="Slider Image" priority />
    </div>
    <div className="container">
      <div className="hero-slide-content">
        <h2 className="title m-0">{title}</h2>
        <Link href="/shop" className="btn btn-primary btn-hover-light">
          Shop Now
        </Link>
      </div>
    </div>
  </div>
);
