
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentMethod } from "@/components/checkout/PaymentMethod"
import clsx from "clsx";
import Paystack from "@/components/checkout/Paystack";

import { getCurrentUser } from "@/lib/prismaHelpers";
import { getCurrentUserCartItems } from "@/helpers/cart";
import CheckoutForm from "@/components/checkout/CheckoutForm";

const orderStyle = clsx("p-2 flex justify-between");
export default async function CheckoutPage() {
  const cartItems = await getCurrentUserCartItems()
  const user = await getCurrentUser();

  const cartTotal = cartItems?.reduce(
    (prev, curr) => prev + curr?.price * curr?.quantity,
    0
  ) ?? 0;

  const handlePaymentMethod = (x: string) => {
    document?.getElementById("update-billing")?.click();
  };


  return (
    <main className="flex flex-col gap-4">
      <Breadcrumbs active="Checkout" />
      <section className="w-11/12 h-16 bg-gray-300 mx-auto" />
      <section className="p-4 md:w-10/12 w-11/112 flex max-md:flex-col max-md:items-center justify-center gap-4 md:gap-10 mx-auto">
        <section className="w-full max-md:max-w-md">
          <h3 className="mb-4 text-2xl">Billing Details</h3>
          <CheckoutForm user={user} />
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
                  />
                  <Paystack amount={cartTotal} display_name={user?.name ?? ""} email={user?.email ?? ""} value="" variable_name="" />
                </div>
              </div>
            </aside>
          </section>
        </section>
      </section>
    </main>
  );
}

interface OrderTileProps {
  title: string;
  price: number;
  quantity: number;
}

const OrderTile = ({ title, price, quantity }: OrderTileProps) => (
  <li className={orderStyle}>
    <p className="m-0">
      {title} x {quantity}
    </p>
    <b>${price * quantity}</b>
  </li>
);

