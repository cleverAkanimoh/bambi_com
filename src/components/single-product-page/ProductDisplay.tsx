import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Products } from "@/types";

export default function ProductDisplay({
  singleProduct,
}: {
  singleProduct: Products;
}) {
  return (
    <div className="row">
      <div className="col-lg-5 offset-lg-0 col-md-8 offset-md-2">
        {/* <!-- Product Details Image Start --> */}
        <div className="product-details-img">
          {/* <!-- Single Product Image Start --> */}
          <div className="single-product-img swiper-container product-gallery-top">
            <div className="swiper-wrapper popup-gallery">
              <Link className="swiper-slide w-100" href={singleProduct.src1}>
                <Image
                  width={100}
                  height={100}
                  className="w-100"
                  src="/assets/images/products/large-product/1.jpg"
                  alt="Product"
                />
              </Link>
              <a
                className="swiper-slide w-100"
                href="assets/images/products/large-product/2.jpg"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-100"
                  src="/assets/images/products/large-product/2.jpg"
                  alt="Product"
                />
              </a>
              <a
                className="swiper-slide w-100"
                href="assets/images/products/large-product/3.jpg"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-100"
                  src="/assets/images/products/large-product/3.jpg"
                  alt="Product"
                />
              </a>
              <a
                className="swiper-slide w-100"
                href="assets/images/products/large-product/4.jpg"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-100"
                  src="/assets/images/products/large-product/4.jpg"
                  alt="Product"
                />
              </a>
              <a
                className="swiper-slide w-100"
                href="assets/images/products/large-product/5.jpg"
              >
                <Image
                  width={100}
                  height={100}
                  className="w-100"
                  src="/assets/images/products/large-product/5.jpg"
                  alt="Product"
                />
              </a>
            </div>
          </div>
          {/* <!-- Single Product Image End --> */}

          {/* <!-- Single Product Thumb Start --> */}
          <div className="single-product-thumb swiper-container product-gallery-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/products/small-product/10.jpg"
                  alt="Product"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/products/small-product/2.jpg"
                  alt="Product"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/products/small-product/3.jpg"
                  alt="Product"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/products/small-product/15.jpg"
                  alt="Product"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/products/small-product/8.jpg"
                  alt="Product"
                />
              </div>
            </div>

            {/* <!-- Next Previous Button Start --> */}
            <div className="swiper-button-next swiper-button-white">
              <i className="pe-7s-angle-right"></i>
            </div>
            <div className="swiper-button-prev swiper-button-white">
              <i className="pe-7s-angle-left"></i>
            </div>
            {/* <!-- Next Previous Button End --> */}
          </div>
          {/* <!-- Single Product Thumb End --> */}
        </div>
        {/* <!-- Product Details Image End --> */}
      </div>
      <div className="col-lg-7">
        {/* <!-- Product Summery Start --> */}
        <div className="product-summery position-relative">
          {/* <!-- Product Head Start --> */}
          <div className="product-head mb-3">
            <h2 className="product-title">{singleProduct.heading}</h2>
          </div>
          {/* <!-- Product Head End --> */}

          {/* <!-- Rating Start --> */}
          <span className="ratings justify-content-start mb-2">
            <span className="rating-wrap">
              <span className="star" style={{ width: " 100%" }}></span>
            </span>
            <span className="rating-num">(4)</span>
          </span>
          {/* <!-- Rating End --> */}

          {/* <!-- Price Box Start --> */}
          <div className="price-box mb-2">
            <span className="regular-price">${singleProduct.new_price}</span>
            <span className="old-price">
              <del>${singleProduct.old_price}</del>
            </span>
          </div>
          {/* <!-- Price Box End --> */}

          {/* <!-- SKU Start --> */}
          <div className="sku mb-3">
            <span>SKU: 12345</span>
          </div>
          {/* <!-- SKU End --> */}

          {/* <!-- Product Inventory Start --> */}
          <div className="product-inventroy mb-3">
            <span className="inventroy-title">
              {" "}
              <strong>Availability:</strong>
            </span>
            <span className="inventory-varient">12 Left in Stock</span>
          </div>
          {/* <!-- Product Inventory End --> */}

          {/* <!-- Description Start --> */}
          <p className="desc-content mb-5">{singleProduct.description}</p>
          {/* <!-- Description End --> */}

          {/* <!-- Product Coler Variation Start --> */}
          {/* <div className="product-color-variation mb-5">
                  <span>
                    {" "}
                    <strong>Color: </strong>
                  </span>
                  <button type="button" className="btn bg-danger"></button>
                  <button type="button" className="btn bg-primary"></button>
                  <button type="button" className="btn bg-dark"></button>
                  <button type="button" className="btn bg-success"></button>
                </div> */}
          {/* <!-- Product Coler Variation End --> */}

          {/* <!-- Product Size Start --> */}
          {/* <div className="product-size mb-5">
                  <span>
                    <strong>Size :</strong>
                  </span>
                  <a href="#" className="size-ratio active">
                    m
                  </a>
                  <a href="#" className="size-ratio">
                    l
                  </a>
                  <a href="#" className="size-ratio">
                    xl
                  </a>
                  <a href="#" className="size-ratio">
                    xxl
                  </a>
                </div> */}
          {/* <!-- Product Size End --> */}

          {/* <!-- Quantity Start --> */}
          <div className="quantity d-flex align-items-center mb-5">
            <span className="me-2">
              <strong>Qty: </strong>
            </span>
            <div className="cart-plus-minus">
              <input
                className="cart-plus-minus-box"
                defaultValue="1"
                type="text"
              />
              <div className="dec qtybutton"></div>
              <div className="inc qtybutton"></div>
            </div>
          </div>
          {/* <!-- Quantity End --> */}

          {/* <!-- Cart Button Start --> */}
          <div className="cart-btn mb-4">
            <div className="add-to_cart">
              <Link className="btn btn-dark btn-hover-primary" href="/cart">
                Add to cart
              </Link>
            </div>
          </div>
          {/* <!-- Cart Button End --> */}

          {/* <!-- Action Button Start --> */}
          <div className="actions border-bottom mb-4 pb-4">
            <a href="/compare" title="Compare" className="action compare">
              <i className="pe-7s-refresh-2"></i>
              Compare
            </a>
            <a href="/wishlist" title="Wishlist" className="action wishlist">
              <i className="pe-7s-like"></i>
              Wishlist
            </a>
          </div>
          {/* <!-- Action Button End --> */}

          {/* <!-- Social Shear Start --> */}
          <div className="social-share">
            <span>
              <strong>Social: </strong>
            </span>
            <a href="#" className="facebook-color">
              <i className="fa fa-facebook"></i> Like
            </a>
            <a href="#" className="twitter-color">
              <i className="fa fa-twitter"></i> Tweet
            </a>
            <a href="#" className="pinterest-color">
              <i className="fa fa-pinterest"></i> Save
            </a>
          </div>
          {/* <!-- Social Shear End --> */}

          {/* <!-- Payment Option Start --> */}
          <div className="payment-option mt-4 d-flex">
            <span>
              <strong>Payment: </strong>
            </span>
            <a href="#">
              <Image
                width={100}
                height={100}
                className="fit-image ms-1/"
                src="/assets/images/payment/payment.png"
                alt="Payment Option Image"
              />
            </a>
          </div>
          {/* <!-- Payment Option End --> */}

          {/* <!-- Product Delivery Policy Start --> */}
          <ul className="product-delivery-policy border-top pt-4 mt-4 border-bottom pb-4">
            <li>
              {" "}
              <i className="fa fa-check-square"></i>{" "}
              <span>
                Security Policy (Edit With Customer Reassurance Module)
              </span>
            </li>
            <li>
              <i className="fa fa-truck"></i>
              <span>
                Delivery Policy (Edit With Customer Reassurance Module)
              </span>
            </li>
            <li>
              <i className="fa fa-refresh"></i>
              <span>Return Policy (Edit With Customer Reassurance Module)</span>
            </li>
          </ul>
          {/* <!-- Product Delivery Policy End --> */}
        </div>
        {/* <!-- Product Summery End --> */}
      </div>
    </div>
  );
}
