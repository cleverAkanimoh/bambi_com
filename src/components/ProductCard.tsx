import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "./Button";

export const ProductCard = ({
  src,
  href,
  heading,
  price,
}: {
  src: string | StaticImageData;
  href: string;
  heading: string;
  price: number;
}) => (
  <div>
    <div className="relative group">
      <Link href={href} className="overflow-hidden block">
        <Image
          width={50}
          height={50}
          priority
          className="w-full group-hover:scale-110 group-hover:!bg-opacity-75 -z-10"
          src={src}
          alt={heading}
          data-aos="fade-in"
        />
      </Link>
      <span className="absolute top-2 left-2 bg-black p-1 !text-sm min-w-14 grid place-items-center rounded-md text-white">
        -18%
      </span>

      <div
        className="z-10 group-hover:fade-in opacity-0 group-hover:!opacity-100 absolute right-2 top-2 space-y-2 transition-all duration-300"
        data-aos="fade-in"
      >
        <Button>
          <i className="pe-7s-like"></i>
        </Button>
        <Button>
          <i className="pe-7s-refresh-2"></i>
        </Button>
        <Button>
          <i className="pe-7s-search"></i>
        </Button>
      </div>
      <button className="btn btn-whited btn-hover-primary text-capitalize add-to-cart absolute bottom-4 left-1/2 -translate-x-1/2 w-8/12 !text-sm  opacity-0 group-hover:!opacity-100">
        Add To Cart
      </button>
    </div>
    <div className="flex flex-col items-center">
      <Link href={href} className="hover:text-primary">
        {heading}
      </Link>
      <span className="price">
        <span className="new">${price}</span>
      </span>
    </div>
  </div>
);
