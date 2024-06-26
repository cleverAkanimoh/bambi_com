import Breadcrumbs from "@/components/Breadcrumbs";
import clsx from "clsx";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/prismaHelpers";
import { getCurrentUserCartItems } from "@/helpers/cart";
import CheckoutClient from "./CheckoutClient";

const orderStyle = clsx("p-2 flex justify-between");

const publicKey = "pk_test_ef5e04574fd9f51d757806866fce40f5ebfd6b26";

export default async function CheckoutPage() {
  const cartItems = await getCurrentUserCartItems();
  const user = await getCurrentUser();

  const cartTotal = cartItems?.reduce(
    (prev, curr) => prev + curr?.price * curr?.quantity,
    0
  );

  return (
    <CheckoutClient 
      cartItems={cartItems} 
      user={user} 
      cartTotal={cartTotal} 
      orderStyle={orderStyle} 
      publicKey={publicKey}
    />
  );
}
