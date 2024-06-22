"use client";
import { useEffect, useState, useMemo } from "react";
import { auth } from "@/config/firebase-config";
import { getUserCartItems } from "@/lib/cart";
import { useAuth } from "@/context/auth-context";
import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CartType } from "@/types";
import Loading from "../loading";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Breadcrumbs from "@/components/Breadcrumbs";

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

  useEffect(() => {
    if (user) {
      setIsFetching(true)
      const unsubscribe = getUserCartItems(user, (items) => {
        setCartItems(items);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
      setIsFetching(false)
    }
  }, [user]);

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
        <div className="w-full md:w-[90%] mx-auto">
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
      </div>
      )}
    </div>
  );
}

export default Page;
