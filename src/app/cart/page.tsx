"use client";
import { useEffect, useState, useMemo } from "react";
import { auth } from "@/config/firebase-config";
import { clearAllItemsFromCart, getUserCartItems, removeSingleCartItem } from "@/lib/cart";
import { useAuth } from "@/context/auth-context";
import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CartType } from "@/types";
import Loading from "../loading";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Breadcrumbs from "@/components/Breadcrumbs";
import { toast } from "react-toastify";
import { IoCloseCircleSharp } from "react-icons/io5";
import { DeleteCartItemById } from "@/components/CartButtons";


// interface CartItem {
//   id: string;
//   src: string;
//   href: string;
//   title: string;
//   price: number;
//   quantity: number;
// }

const Page = () => {
  const [cartItems, setCartItems] = useState<CartType[]>([]);
  const { user, loading } = useAuth();
  const [isFetching, setIsFetching] = useState(false)
  const [clearCart, setClearCart] = useState(false)

  useEffect(() => {
    if (user) {
      setIsFetching(true)
      const unsubscribe = getUserCartItems(user, (items) => {
        setCartItems(items);
        setIsFetching(false)
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, [user]);


  const handleClearCart = ()=>{
  try{
  setTimeout(async () => {
    if (user) {
      setClearCart(true)
      await clearAllItemsFromCart()
      setClearCart(false)
      toast.success(`Item has been deleted from cart`);
    }
  }, 5000);
} catch (error) {
  if (error instanceof Error) {
    toast.error(`${error.message}`);
  }
}
}

  const data = useMemo(() => cartItems, [cartItems]);
  const columns: ColumnDef<CartType>[] = useMemo(() => [
    {
      header: 'Product Image',
      accessorKey: 'src',
      cell: (info) => (
        <Image
          src={info.getValue() as string}
          alt={info.row.original.title}
          height={100}
          width={100}
                    className="w-32 h-32"
        />
      )
    },
    {
      header: 'Product Name',
      accessorKey: 'title',
    },
    {
      header: 'Quantity',
      accessorKey: 'quantity',
    },
    {
      header: 'Price',
      accessorKey: 'price',
      cell: (info) => `$${info.getValue()}`,
    },
    // {
    //   header: 'Actions',
    //   cell: (info) => (
    //     <button onClick={() => removeSingleCartItem(cartItems.id)}>
    //    <IoCloseCircleSharp className="text-2xl text-red-600" />
    //     </button>
    // <DeleteCartItemById id={info.row.original.uid as string} item={info.getValue() as string} />
    //   ),
    // },
  ], []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
if(loading || isFetching){
    <Loading />
}
  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <Breadcrumbs active="Cart" />
      {cartItems.length === 0 ? (<section className="h-full flex flex-col gap-5 items-center justify-center">
                <CiShoppingCart size={90} className="opacity-60" />
                <h5>Nothing in cart</h5>
                <Link href="/shop" className="text-primary hover:underline flex items-center gap-1">
                  Go to shop <FaArrowRight className="" />
                </Link>
              </section>): (
        <div className="w-[95%] md:w-[90%] mx-auto flex gap-6 flex-col">
       <table className="min-w-full bg-white text-center">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr className="bg-primary text-white" key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="p-2 border">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <section className="flex items-center justify-center gap-6">
        <Link className="p-2 text-white rounded-md text-center font-semibold bg-primary" href="/checkout">Checkout</Link>
        <Link className="p-2 text-white rounded-md text-center font-semibold bg-primary" href="/shop">Continue Shoping</Link>
        <button className={`p-2 text-white rounded-md text-center font-semibold bg-red-600 ${clearCart && "opacity-75"}`} onClick={handleClearCart}>{clearCart ? "Clearing" : "Clear Cart"}</button>
      </section>
      </div>
      )}
    </div>
  );
}

export default Page;
