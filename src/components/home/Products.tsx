import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <div className="section position-relative">
      <div className="container">
        {/* <!-- Section Title & Tab Start --> */}
        <div className="row">
          {/* <!-- Tab Start --> */}
          <div className="col-12" data-aos="fade-up" data-aos-delay="400">
            <ul className="product-tab-nav nav justify-content-center mb-n3 pb-10 title-border-bottom">
              <li className="nav-item mb-3">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="/#tab-product-all"
                >
                  <br /> <br />
                  Best Sale
                </a>
              </li>
              <li className="nav-item mb-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="/#tab-product-featured"
                >
                  <br />
                  <br />
                  Featured
                </a>
              </li>
              <li className="nav-item mb-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="/#tab-product-all"
                >
                  <br />
                  <br />
                  On Sale
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Tab End --> */}
        </div>
        {/* <!-- Section Title & Tab End --> */}

        {/* <!-- Products Tab Start --> */}
        <div className="row">
          <div className="col" data-aos="fade-up" data-aos-delay="600">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-product-all">
                <div className="product-carousel arrow-outside-container">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {/* <!-- Product Start --> */}
                      <div className="swiper-slide">
                        <div className="product-wrapper">
                          <div className="product">
                            <div className="thumb border-0">
                              <a href="/single-product" className="image">
                                <Image
                                  width={100}
                                  height={100}
                                  priority
                                  className="fit-image"
                                  src="/assets/images/products/medium-product/product.png"
                                  alt="Product"
                                />
                                <Image
                                  width={100}
                                  height={100}
                                  priority
                                  className="second-image fit-image"
                                  src="/assets/images/products/medium-product/product.png"
                                  alt="Product"
                                />
                              </a>
                              <span className="badges">
                                <span className="sale">-18%</span>
                              </span>
                              <div className="actions">
                                <Link
                                  href="/wishlist"
                                  className="action wishlist"
                                >
                                  <i className="pe-7s-like"></i>
                                </Link>
                                <a href="/compare" className="action compare">
                                  <i className="pe-7s-refresh-2"></i>
                                </a>
                                <a
                                  href="//#"
                                  className="action quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                >
                                  <i className="pe-7s-search"></i>
                                </a>
                              </div>
                              <div className="add-cart-btn">
                                <button className="btn btn-whited btn-hover-primary text-capitalize add-to-cart">
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                            <div className="content">
                              <h5 className="title">
                                <a href="/single-product">
                                  Dinosaur Toys for Baby
                                </a>
                              </h5>
                              <span className="price">
                                <span className="new">$13.50</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Product End --> */}

                      {/* <!-- Product Start --> */}
                      <div className="swiper-slide">
                        <div className="product-wrapper">
                          <div className="product">
                            <div className="thumb border-0">
                              <a href="/single-product" className="image">
                                <Image
                                  width={100}
                                  height={100}
                                  priority
                                  className="fit-image"
                                  src="/assets/images/products/medium-product/product.png"
                                  alt="Product"
                                />
                                <Image
                                  width={100}
                                  height={100}
                                  priority
                                  className="second-image fit-image"
                                  src="/assets/images/products/medium-product/product.png"
                                  alt="Product"
                                />
                              </a>
                              <span className="badges">
                                <span className="sale">-18%</span>
                              </span>
                              <div className="actions">
                                <a href="/wishlist" className="action wishlist">
                                  <i className="pe-7s-like"></i>
                                </a>
                                <a href="/compare" className="action compare">
                                  <i className="pe-7s-refresh-2"></i>
                                </a>
                                <a
                                  href="/#"
                                  className="action quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                >
                                  <i className="pe-7s-search"></i>
                                </a>
                              </div>
                              <div className="add-cart-btn">
                                <button className="btn btn-whited btn-hover-primary text-capitalize add-to-cart">
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                            <div className="content">
                              <h5 className="title">
                                <a href="/single-product">
                                  Dinosaur Toys for Baby
                                </a>
                              </h5>
                              <span className="price">
                                <span className="new">$12.50</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Product End --> */}
                    </div>

                    <div className="swiper-pagination d-block d-md-none"></div>
                    <div className="swiper-button-prev swiper-nav-button d-none d-md-flex">
                      <i className="pe-7s-angle-left"></i>
                    </div>
                    <div className="swiper-button-next swiper-nav-button d-none d-md-flex">
                      <i className="pe-7s-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Products Tab End --> */}
      </div>
    </div>
  );
}
