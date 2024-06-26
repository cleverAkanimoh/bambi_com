import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

import { DeleteAllCartItemsButton, DeleteCartItemById } from "../CartButtons";
import { ShareIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import BamIcon from "../Icon";
import BamLink from "../BamLink";
import { getCurrentUser } from "@/lib/prismaHelpers";
import CartOffCanvasClient from "./CartOffCanvasClient";
import { getCurrentUserCartItems } from "@/helpers/cart";
import { formatCurrency } from "@/lib/utils";

export default async function CartOffCanvas() {
  const cartItems = await getCurrentUserCartItems();

  const cartTotal =
    cartItems?.reduce((prev, curr) => prev + curr?.price * curr?.quantity, 0) ??
    0;

  return (
    <CartOffCanvasClient>
      {(await getCurrentUser()) ? (
        <>
          {cartItems?.length ? (
            <div className="pb-16">
              <div className="w-full flex items-center justify-between mb-3">
                <Link href="/shop" className="hover:underline text-primary">
                  Continue shopping
                </Link>
                <DeleteAllCartItemsButton />
              </div>
              {cartItems?.slice(0, 6).map((item, index) => (
                <CartTile
                  key={index}
                  src={item.src}
                  href={item.href}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  id={`${item.productId}`}
                />
              ))}

              <div className="flex justify-between mb-6 mx-2">
                <span className="font-bold text-xl">Total:</span>
                <span className="text-primary">
                  {formatCurrency(cartTotal * 100)}
                </span>
              </div>

              <div className="text-white space-y-2">
                <BamLink
                  variant="ghost"
                  href="/cart"
                  className="p-3 flex gap-2 bg-gray-100 border border-gray-300 hover:bg-gray-50  rounded-full !text-black justify-center items-center"
                >
                  <BamIcon Icon={ShoppingCartIcon} size="med" /> View cart{" "}
                  <small className="text-white bg-primary rounded-full size-5 grid place-items-center">
                    {cartItems.length}
                  </small>
                </BamLink>
                <BamLink
                  variant="ghost"
                  href="/checkout"
                  className="p-3 flex gap-2 bg-gray-100 border border-gray-300 hover:bg-gray-50  rounded-full !text-black justify-center items-center"
                >
                  <BamIcon Icon={ShareIcon} size="med" /> Checkout
                </BamLink>
              </div>
            </div>
          ) : (
            <section className="h-full flex flex-col gap-5 items-center justify-center">
              <CiShoppingCart size={130} className="opacity-60" />
              <h3>Nothing in cart</h3>
              <BamLink href="/shop">Go to shop</BamLink>
            </section>
          )}
        </>
      ) : (
        <section className="h-full flex flex-col gap-6 items-center justify-center">
          <strong>{"You're currently not logged in"}</strong>
          <small>You have to login to view your cart</small>
          <BamLink href="/auth/login">Take me to login</BamLink>
        </section>
      )}
    </CartOffCanvasClient>
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
  <div className="flex items-center w-11/12 mx-auto justify-between mb-4 pb-4 border-bottom">
    <div className="flex items-center gap-4">
      <div className="cart-product-thumb">
        <Link href={href}>
          <Image width={100} height={100} src={src} alt="Cart Product" />
        </Link>
      </div>
      <div className="">
        <h3 className="">
          <Link href={href}>{title}</Link>
        </h3>
        <div className="">
          <span className="cart-quantity">
            {quantity} <strong> * </strong>
          </span>
          <span className="price">
            <span className="text-primary">{formatCurrency(price * 100)}</span>
          </span>
        </div>
      </div>
    </div>
    <DeleteCartItemById id={id} item={title} />
    {/* <!-- Product Remove End --> */}
  </div>
);
