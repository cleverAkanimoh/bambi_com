"use client";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import OrderTile from "@/components/OrderTile";
import {PaymentMethod, Input, OrderTile} from "./checkoutHelpers";
import clsx from "clsx";
import Breadcrumbs from "../Breadcrumbs";
import Loading from "@/app/loading";

const CheckoutClient = ({ cartItems, user, cartTotal, orderStyle, publicKey }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePaymentMethod = (x: string) => {
    document?.getElementById("update-billing")?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const country = formData.get("country") as string;
    const city = formData.get("city") as string;
    const address = formData.get("address") as string;
    const message = formData.get("message") as string;

    setIsLoading(true);
    setError(null);

    try {
      await fetch("/api/update-billing", {
        method: "POST",
        body: JSON.stringify({ email, name, country, city, address, message }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      toast.success("Billing details updated successfully");
    } catch (error) {
      
      toast.error("Failed to update billing details");
    } finally {
      setIsLoading(false);
    }
  };

  const componentProps = {
    email: user?.email || "",
    amount: (cartTotal ?? 0) * 100, // Paystack expects amount in kobo
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: user?.name || "Lorem Name",
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: user?.phone || "",
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      toast.success("Payment Successful! Thank you for doing business with us"),
    onClose: () => toast.info("User cancelled payment action"),
  };



  return (
    <main className="flex flex-col gap-4">
      <Breadcrumbs active="Checkout" />
      <section className="w-11/12 h-16 bg-gray-300 mx-auto" />
      <section className="p-4 md:w-10/12 w-11/112 flex max-md:flex-col max-md:items-center justify-center gap-4 md:gap-10 mx-auto">
        <section className="w-full max-md:max-w-md">
          <h3 className="mb-4 text-2xl">Billing Details</h3>
          <form onSubmit={handleSubmit}>
            <Input
              label="Full name"
              name="name"
              id="name"
              placeholder="Full name"
              defaultValue={user?.name ?? ""}
              required
            />
            <Input
              label="Country"
              name="country"
              defaultValue={user?.country ?? ""}
              placeholder="Country"
              required
            />
            <Input
              label="Town/City"
              name="city"
              placeholder="Town/City"
              defaultValue={user?.city ?? ""}
              required
            />
            <Input
              label="Address"
              placeholder="Address"
              name="address"
              defaultValue={user?.address ?? ""}
              required
            />
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
              defaultValue={user?.phone ?? ""}
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

            <Button
              className="w-full !text-white text-sm my-2 !bg-primary hover:!bg-black"
              id="update-billing"
            >
              Submit
            </Button>
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
                    name="payment method"
                    value={""}
                    label="Direct Bank Transfer"
                    onChange={(e) => handlePaymentMethod("bank")}
                  />
                  <div
                    className={clsx(
                      "px-4 rounded-b-md transition-all duration-300",
                      {
                        "border h-full mt-1 py-3": true,
                        " h-0 overflow-hidden": true,
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
                    name="payment method"
                    value={"paystack"}
                    onChange={() => {
                      handlePaymentMethod("paystack");
                    }}
                  />
                  <PaystackButton {...componentProps} />
                </div>
              </div>
            </aside>
          </section>
        </section>
      </section>
    </main>
  );
};

export default CheckoutClient;
