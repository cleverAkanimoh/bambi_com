"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Button from "../Button";
import { BiTrash } from "react-icons/bi";

const testCartItems = [
  {
    src: "/assets/images/products/small-product/1.jpg",
    href: "/shop",
    title: "Pampers",
    price: 19,
    quantity: 3,
  },
  {
    src: "/assets/images/products/small-product/1.jpg",
    href: "/shop",
    title: "Toy gun",
    price: 99,
    quantity: 1,
  },
  {
    src: "/assets/images/products/small-product/1.jpg",
    href: "/shop",
    title: "Army pack",
    price: 20,
    quantity: 4,
  },
  {
    src: "/assets/images/products/small-product/1.jpg",
    href: "/shop",
    title: "Bambi toy",
    price: 50,
    quantity: 2,
  },
];

type CartType = typeof testCartItems;
export default function CartOffCanvas() {
  const [cartItem, setCartItem] = useState<CartType | null>(testCartItems);
  const cartTotal = cartItem?.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  return (
    <div className="cart-offcanvas-wrapper">
      <div className="offcanvas-overlay"></div>

      {/* <!-- Cart Offcanvas Inner Start --> */}
      <div className="cart-offcanvas-inner">
        {/* <!-- Button Close Start --> */}
        <div className="offcanvas-btn-close">
          <i className="pe-7s-close"></i>
        </div>
        {/* <!-- Button Close End --> */}

        {cartItem ? (
          <div className="offcanvas-cart-content">
            <div className="w-full flex items-center justify-between mb-3 -mt-8">
              <Link href="/shop" className="hover:underline text-primary">
                Continue shopping
              </Link>
              <Button title="Clear cart" onClick={() => setCartItem(null)}>
                <BiTrash />
              </Button>
            </div>
            {cartItem.map((item, index) => (
              <CartTile
                key={index}
                src={item.src}
                href={item.href}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}

            {/* <!-- Cart Product Total Start --> */}
            <div className="cart-product-total mb-4 pb-4 border-bottom">
              <span className="value">Total</span>
              <span className="price">${cartTotal}</span>
            </div>
            {/* <!-- Cart Product Total End --> */}

            {/* <!-- Cart Product Button Start --> */}
            <div className="cart-product-btn mt-4">
              <Link
                href="/cart"
                className="btn btn-light btn-hover-primary w-100"
              >
                <i className="fa fa-shopping-cart"></i> View cart
              </Link>
              <Link
                href="/checkout"
                className="btn btn-light btn-hover-primary w-100 mt-4"
              >
                <i className="fa fa-share"></i> Checkout
              </Link>
            </div>
            {/* <!-- Cart Product Button End --> */}
          </div>
        ) : (
          <section className="h-full flex flex-col gap-5 items-center justify-center">
            <CiShoppingCart size={130} className="opacity-60" />
            <h3>Nothing in cart</h3>
            <Link href="/shop" className="hover:text-primary">
              Go to shop
            </Link>
          </section>
        )}
      </div>
      {/* <!-- Cart Offcanvas Inner End --> */}
    </div>
  );
}

const CartTile = ({
  src,
  href,
  title,
  price,
  quantity,
}: {
  src: string | StaticImageData;
  href: string;
  title: string;
  price: number;
  quantity: number;
}) => (
  <div className="cart-product-wrapper mb-4 pb-4 border-bottom">
    <div className="single-cart-product">
      <div className="cart-product-thumb">
        <Link href={href}>
          <Image width={100} height={100} src={src} alt="Cart Product" />
        </Link>
      </div>
      <div className="cart-product-content">
        <h3 className="title">
          <Link href={href}>{title}</Link>
        </h3>
        <div className="product-quty-price">
          <span className="cart-quantity">
            {quantity} <strong> * </strong>
          </span>
          <span className="price">
            <span className="new">${price}</span>
          </span>
        </div>
      </div>
    </div>
    <div className="cart-product-remove">
      <a href="#">
        <i className="pe-7s-close"></i>
      </a>
    </div>
    {/* <!-- Product Remove End --> */}
  </div>
);
