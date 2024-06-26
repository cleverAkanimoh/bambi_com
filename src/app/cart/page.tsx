"use client";
import { useState, useMemo } from "react";
import { useClearAllItemsFromCart, useCartItems, useRemoveSingleCartItem } from "@/lib/cart";

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
import { getCurrentUser } from "@/lib/prismaHelpers";

const Page = () => {
  
  const [clearCart, setClearCart] = useState(false);
  const carItems = getCurrentUser()
  const clearAllItemsFromCartMutation = useClearAllItemsFromCart();

  const handleClearCart = () => {
    try {
      setClearCart(true);
      clearAllItemsFromCartMutation.mutate(undefined, {
        onSuccess: () => {
          toast.success(`All items have been deleted from cart`);
          setClearCart(false);
        },
        onError: (error: unknown) => {
          if (error instanceof Error) {
            toast.error(`${error.message}`);
          }
          setClearCart(false);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      setClearCart(false);
    }
  };

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
    {
      header: "Actions",
      cell: (info) => (
        <DeleteCartItemById
          id={`${info.row.original.id}`} 
          item={info.row.original.title}
          
        />
      ),
    },
  ], []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <Breadcrumbs active="Cart" />
      {cartItems.length === 0 ? (
        <section className="h-full flex flex-col gap-5 items-center justify-center">
          <CiShoppingCart size={90} className="opacity-60" />
          <h5>Nothing in cart</h5>
          <Link href="/shop" className="text-primary hover:underline flex items-center gap-1">
            Go to shop <FaArrowRight className="" />
          </Link>
        </section>
      ) : (
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

          <section className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link className="p-2 text-white rounded-md text-center font-semibold bg-primary" href="/checkout">Checkout</Link>
            <Link className="p-2 text-white rounded-md text-center font-semibold bg-primary" href="/shop">Continue Shopping</Link>
            <button
              className={`p-2 text-white rounded-md text-center font-semibold bg-red-600 ${clearCart && "opacity-75"}`}
              onClick={handleClearCart}
              disabled={clearCart}
            >
              {clearCart ? "Clearing" : "Clear Cart"}
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default Page;
