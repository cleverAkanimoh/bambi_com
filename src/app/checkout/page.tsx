"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import { fetchInRealtimeAndRenderPostsFromDB } from "@/components/navbar/CartOffCanvas";
import { useAuth } from "@/context/auth-context";
import { CartType } from "@/types";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import NotFound from "../not-found";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";

const orderStyle = clsx("p-2 flex justify-between");

const publicKey = "pk_test_ef5e04574fd9f51d757806866fce40f5ebfd6b26";

export default function CheckoutPage() {
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cartItems, setCartItems] = useState<CartType[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const data = await fetchInRealtimeAndRenderPostsFromDB();
      setCartItems(data);
    };
    fetchCartItems();
  }, [cartItems, user]);

  const cartTotal = cartItems?.reduce(
    (prev, curr) => prev + curr?.price * curr?.quantity,
    0
  );

  const handlePaymentMethod = (x: string) => {
    document?.getElementById("update-billing")?.click();
    return x;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("firstName") as string;
    const country = formData.get("country") as string;
    const city = formData.get("city") as string;
    const address = formData.get("address") as string;
    const message = formData.get("message") as string;

    try {
      await updateDoc(doc(db, "users", user?.uid ?? ""), {
        name,
        email,
        country,
        city,
        address,
        message,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const componentProps = {
    email: "crushclever1@gmail.com",
    amount: 400000.0,
    metadata: {
      name: "clever akanimoh",
      phone: "08113530038",
    },
    className: clsx("my-3 w-full border py-2 hover:underline", {
      hiden: paymentMethod !== "paystack",
    }),
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      toast.success("Thanks for doing business with us! Come back soon!!"),
    onClose: () => toast.info("User cancelled payment action"),
  };

  return (
    <main className="flex flex-col gap-4">
      <Breadcrumbs active="Checkout" />
      <section className="w-11/12 h-16 bg-gray-300 mx-auto" />
      <section className="p-2 md:w-10/12 w-full flex max-md:flex-col max-md:items-center justify-center gap-4 mx-auto">
        <section className="w-full max-md:max-w-md">
          <h3 className="mb-3">Billing Details</h3>
          <form onSubmit={handleSubmit}>
            <Input
              label="Full name"
              name="name"
              id="name"
              placeholder="Full name"
              required
            />
            <Input
              label="Country"
              name="country"
              placeholder="Country"
              required
            />
            <Input
              label="Town/City"
              name="city"
              placeholder="Town/City"
              required
            />
            <Input label="Address" placeholder="Address" name="city" required />
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              defaultValue={user?.email ?? ""}
              placeholder="Email"
              required
            />
            <Input
              label="Phone number"
              type="number"
              name="phone"
              id="phone"
              defaultValue={user?.phoneNumber ?? ""}
              placeholder="Phone number"
              required
            />
            <Input
              label="Apply coupon"
              placeholder="Enter coupon code"
              name="coupon"
            />

            <textarea
              placeholder="Additional note about your order, e.g special note for delivery."
              className="w-full min-h-40 max-h-60 border-2 rounded-md p-2"
              name="message"
            />

            <button className="sr-oly" id="update-billing">
              submit
            </button>
          </form>
        </section>

        <section className="w-full max-md:max-w-md h-fit p-4 border rounded-md divide-y font-light">
          <aside className="divide-y">
            <p className="mb-4 text-2xl">Your Order</p>
            <div className={clsx(orderStyle, "text-base")}>
              <strong>Product</strong>
              <span>Total</span>
            </div>

            <ul className="divide-y p-0.5">
              {cartItems?.map((item, index) => (
                <OrderTile
                  key={index}
                  price={item.price}
                  title={item.title}
                  quantity={item.quantity}
                />
              ))}
            </ul>

            <div className={orderStyle}>
              <strong className="">Cart subtotal</strong>
              <span>${cartTotal}</span>
            </div>

            <div className={orderStyle}>
              <b className="text-primary">Order Total</b>
              <big>
                <b>${cartTotal}</b>
              </big>
            </div>
          </aside>
          <section>
            <aside>
              <div className="space-y-4">
                <div>
                  <PaymentMethod
                    id="bank"
                    value={paymentMethod}
                    label="Direct Bank Transfer"
                    onChange={(e) => handlePaymentMethod("bank")}
                  />
                  <div
                    className={clsx(
                      "px-4 rounded-b-md transition-all duration-300",
                      {
                        "border h-full mt-1 py-3": paymentMethod === "bank",
                        " h-0 overflow-hidden": paymentMethod !== "bank",
                      }
                    )}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti odio atque dicta cumque et beatae, repellat iusto
                      non
                    </p>
                    <h5>Send ${cartTotal} to:</h5>
                    <ul>
                      <li>
                        <b>Account name:</b> Bambi Stores
                      </li>
                      <li>
                        <b>Account number:</b> 0123456789
                      </li>
                      <li>
                        <b>Bank</b>: Moniepoint MFB
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <PaymentMethod
                    id="paystack"
                    label="Continue with Paystack"
                    value={paymentMethod}
                    onChange={() => {
                      handlePaymentMethod("paystack");
                    }}
                  />
                  <PaystackButton {...componentProps} />
                </div>
                {/* <PaymentMethod value="bank" title="Direct Bank Transfer" /> */}
              </div>
            </aside>
          </section>
        </section>
      </section>
    </main>
  );
}

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

const Input = ({ label, id, required, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 mb-5 last:mb-0">
      {label && (
        <label htmlFor={id} className="text-base font-medium pl-1">
          {label}
          {required ? (
            <span className="text-red-500">*</span>
          ) : (
            <span className="text-gray-300 text-sm">{"(optional)"}</span>
          )}
        </label>
      )}
      <input
        {...rest}
        required={required}
        className="border focus:!border-primary p-2 rounded"
      />
    </div>
  );
};

const OrderTile = ({
  title,
  price,
  quantity,
}: {
  title: string;
  quantity: number;
  price: number;
}) => (
  <li className={orderStyle}>
    <span>
      {title}{" "}
      <b>
        <small>x</small> {quantity}
      </b>
    </span>
    <span>${price} </span>
  </li>
);

const PaymentMethod = ({ label, id, value, children, ...rest }: InputProps) => {
  return (
    <div
      className={clsx(
        "space-x-2 p-4 first:mt-6 rounded text-base font-medium hover:bg-primary/60 hover:border-primary hover:text-white border transition-colors duration-300",
        {
          "bg-primary text-white": id === value,
        }
      )}
    >
      <input type="radio" name="payment" {...rest} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
