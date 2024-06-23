"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

import { DeleteAllCartItemsButton, DeleteCartItemById } from "../CartButtons";
import { CartType } from "@/types";
import { getDocs } from "firebase/firestore";
import { useAuth } from "@/context/auth-context";
import { cartItemRef } from "@/lib/cart";
import clsx from "clsx";
import { useGlobalContext } from "@/context/store";
import { XMarkIcon } from "@heroicons/react/24/outline";
import BamIcon from "../Icon";

export const fetchInRealtimeAndRenderPostsFromDB = async () => {
  const snapshot = await getDocs(cartItemRef);

  const data: any[] = [];

  if (snapshot) {
    snapshot.forEach((cartDoc) => {
      data.push({ ...cartDoc.data(), uid: cartDoc.id });
    });
  }

  return data;
};

export default function CartOffCanvas() {
  const { isCartClicked, setIsCartClicked } = useGlobalContext();
  const [cartItems, setCartItems] = useState<CartType[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCartItems = async () => {
      const data = await fetchInRealtimeAndRenderPostsFromDB();
      setCartItems(data);
    };
    fetchCartItems();

    // return () => fetchCartItems();
  }, [cartItems]);

  const cartTotal = cartItems?.reduce(
    (prev, curr) => prev + curr?.price * curr?.quantity,
    0
  );

  return (
    <section
      className={clsx(
        "md:hidden fixed top-0 right-0 h-screen w-full flex transition-all duration-500",
        {
          "bg-black/35 z-[200] visible": isCartClicked,
          "opacity-0 invisible -z-30": !isCartClicked,
        }
      )}
    >
      <div
        className="h-screen w-full"
        onClick={() => setIsCartClicked(false)}
      />

      <div
        className={clsx("relative w-full flex transition-all duration-500", {
          "translate-x-0 opacity-100 visible": isCartClicked,
          "translate-x-full opacity-0 invisible": !isCartClicked,
        })}
      >
        <div onClick={() => setIsCartClicked(false)}>
          <button className="bg-primary size-10 text-white grid place-items-center">
            <BamIcon
              Icon={XMarkIcon}
              size="big"
              className="hover:rotate-90 transition-all duration-500"
            />
          </button>
        </div>
        <aside
          className={clsx(
            "w-11/12 xs:min-w-[320px] shrink-0 relative h-screen overflow-y-auto p-2 xs:p-4 py-10 bg-white"
          )}
        >
          {user ? (
            <>
              {cartItems.length > 0 ? (
                <div className="offcanvas-cart-content">
                  <div className="w-full flex items-center justify-between mb-3 -mt-8">
                    <Link href="/shop" className="hover:underline text-primary">
                      Continue shopping
                    </Link>
                    <DeleteAllCartItemsButton />
                  </div>
                  {cartItems.map((item, index) => (
                    <CartTile
                      key={index}
                      src={item.src}
                      href={item.href}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                      id={item.id}
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
            </>
          ) : (
            <section className="h-full flex flex-col gap-5 items-center justify-center">
              <h4>No user Found</h4>
              <p>You have to login to see your cart item</p>
              <Link
                href="/auth/login"
                className="bg-primary p-2 text-white hover:opacity-60"
              >
                Take me to login
              </Link>
            </section>
          )}
        </aside>
      </div>
    </section>
  );
}

const CartTile = ({
  src,
  href,
  title,
  price,
  quantity,
  id,
}: {
  src: string | StaticImageData;
  href: string;
  title: string;
  price: number;
  quantity: number;
  id: string | number;
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
    <DeleteCartItemById id={id} item={title} />
    {/* <!-- Product Remove End --> */}
  </div>
);
