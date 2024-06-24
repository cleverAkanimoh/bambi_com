"use client";

import React from "react";
import Image from "next/image";
import { Products } from "@/types";
import { AddToCartButton } from "../CartButtons";
import ThumbsSlider from "../ThumbsSlider";

const Images = [
  "/assets/images/products/large-product/1.jpg",
  "/assets/images/products/large-product/2.jpg",
  "/assets/images/products/large-product/2.jpg",
  "/assets/images/products/large-product/3.jpg",
  "/assets/images/products/large-product/4.jpg",
  "/assets/images/products/large-product/1.jpg",
  "/assets/images/products/large-product/3.jpg",
  "/assets/images/products/large-product/4.jpg",
  "/assets/images/products/large-product/5.jpg",
  "/assets/images/products/large-product/5.jpg",
];

export default function ProductDisplay({
  singleProduct,
}: {
  singleProduct: Products;
}) {
  return (
    <section className="p-4">
      <ThumbsSlider images={Images} />
      <div className="">
        {/* <!-- Product Summery Start --> */}
        <div className="">
          {/* <!-- Product Head Start --> */}
          <div className="">
            <h2 className="">{singleProduct.heading}</h2>
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
          {singleProduct.sku && (
            <div className="sku mb-3">
              <span>SKU: {singleProduct.sku}</span>
            </div>
          )}
          {/* <!-- SKU End --> */}

          {/* <!-- Product Inventory Start --> */}
          {singleProduct.availability && (
            <div className="product-inventroy mb-3">
              <span className="inventroy-title">
                <strong>Availability: </strong>
              </span>
              <span className="inventory-varient">
                {singleProduct.availability} Left in Stock
              </span>
            </div>
          )}
          {/* <!-- Product Inventory End --> */}

          {/* <!-- Description Start --> */}
          <p className="desc-content mb-5">{singleProduct.description}</p>
          {/* <!-- Description End --> */}

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
              <AddToCartButton
                cart={{
                  id: singleProduct.id,
                  src: singleProduct.src1,
                  href: singleProduct.href,
                  title: singleProduct.heading,
                  price: singleProduct.new_price,
                  quantity: 1,
                }}
              />
            </div>
          </div>
          {/* <!-- Cart Button End --> */}

          {/* <!-- Action Button Start --> */}
          <div className="actions border-bottom mb-4 pb-4">
            {/* <a href="" title="Compare" className="action compare">
              <i className="pe-7s-refresh-2"></i>
              Compare
            </a> */}
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
    </section>
  );
}
