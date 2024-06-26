
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import clsx from "clsx";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/prismaHelpers";
import { getCurrentUserCartItems } from "@/helpers/cart";

const orderStyle = clsx("p-2 flex justify-between");

const publicKey = "pk_test_ef5e04574fd9f51d757806866fce40f5ebfd6b26";

export default async function CheckoutPage() {
  const cartItems = await getCurrentUserCartItems()
  const user = await getCurrentUser();

  const cartTotal = cartItems?.reduce(
    (prev, curr) => prev + curr?.price * curr?.quantity,
    0
  );

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

    try {
      await prisma.user.update({
        where: { email },
        data: {
          name,
          email,
          country,
          city,
          address,
        },
      });
      toast.success("Billing details updated successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const componentProps = {
    email: user?.email || "",
    amount: cartTotal ?? 0 * 100, // Paystack expects amount in kobo
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
          value: "",
        },
      ],
    },
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
}

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

const Input = ({ label, id, required, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 mb-5 last:mb-0">
      {label && (
        <label htmlFor={id} className="text-gray-500">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        className="p-2 w-full border border-gray-400 rounded-md"
        {...rest}
      />
    </div>
  );
};

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

interface PaymentMethodProps extends React.ComponentProps<"input"> {
  label?: string;
}

const PaymentMethod = ({
  label,
  id,
  required,
  ...rest
}: PaymentMethodProps) => {
  return (
    <div className="flex items-center gap-3 mt-6">
      <input id={id} type="radio" required={required} {...rest} />
      {label && (
        <label htmlFor={id} className="text-gray-500">
          {label}
        </label>
      )}
    </div>
  );
};
