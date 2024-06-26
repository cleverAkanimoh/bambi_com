import { CiSearch } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton, AddToWishlistButton } from "@/components/CartButtons";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";
import { formatCurrency } from "@/lib/utils";

export const HomeProductCard = ({
  src,
  href,
  heading,
  price,
  quantity = 1,
  id,
}: {
  src: string;
  href: string;
  heading: string;
  price: number;
  quantity?: number;
  id: string;
}) => {
 
  return (
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
    >
      <div className="relative group">
        <Link href={href} className="overflow-hidden block">
          <Image
            width={50}
            height={50}
            priority
            className="w-full group-hover:scale-110 group-hover:!bg-opacity-75 -z-10"
            src={src}
            alt={heading}
          />
        </Link>
        <span className="absolute top-2 left-2 bg-black p-1 !text-sm min-w-14 grid place-items-center rounded-md text-white">
          -18%
        </span>

        <div className="flex flex-col gap-6 absolute top-4 group-hover:top-2 right-4 text-xl p-3 text-[#555] opacity-0 group-hover:opacity-100 transition-all ease-linear duration-[400ms]">
          <AddToWishlistButton
            wishlistItem={{
              src,
              href,
              title: heading,
              price,
              quantity,
              productId: id,
              availability: 1,
            }}
          />
          <Link
            href="/compare"
            className="bg-white p-2 hover:bg-primary hover:text-white transition-all ease-linear duration-150 rounded"
          >
            <SlRefresh />
          </Link>
          <button
            className="bg-white p-2 hover:bg-primary hover:text-white transition-all ease-linear duration-150 rounded"
            data-bs-toggle="modal"
            data-bs-target="#quick-view"
                >
            <CiSearch />
          </button>
        </div>
        <AddToCartButton
          className="absolute -translate-y-[0rem] invisible !opacity-0 group-hover:!opacity-100 group-hover:-translate-y-[4rem] group-hover:visible left-1/2 -translate-x-1/2 w-1/2 bg-white hover:bg-primary hover:!text-white mx-auto text-center rounded p-3 transition-all ease-linear duration-[400ms]"
          cart={{
            src,
            href,
            title: heading,
            price,
            quantity,
            productId: id,
          }}
        />
      </div>
      <div className="flex flex-col gap-2 items-center mt-4">
        <Link href={href} className="hover:text-primary">
          {heading}
        </Link>
        <span className="price">
          <span className="new">{formatCurrency(price * 100)}</span>
        </span>
      </div>
    </motion.div>
  );
};
