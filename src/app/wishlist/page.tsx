"use client"
import { useMemo, useState, useEffect } from "react";
import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CartType, WishListType } from "@/types";
import Loading from "../loading";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Breadcrumbs from "@/components/Breadcrumbs";
import { toast } from "react-toastify";
import { IoCloseCircleSharp } from "react-icons/io5";
import { getCurrentUserWishlist } from "@/helpers/wishlist";



const WishList = () => {
const [wishlist, setWishList] = useState<WishListType[] | undefined>()
  useEffect(()=>{
const wishListItems = async ()=>{
  const items = await getCurrentUserWishlist()
  setWishList(items)
}
wishListItems()
  }, [items])

const wishListItems = getCurrentUserWishlist()

  const columns: ColumnDef<CartType>[] = useMemo(() => [
    {
      header: 'Product Image',
      accessorKey: 'src', // Ensure this matches the property name in CartType
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
      accessorKey: 'title', // Ensure this matches the property name in CartType
    },
    {
      header: 'Price',
      accessorKey: 'price', // Ensure this matches the property name in CartType
      cell: (info) => `$${info.getValue()}`,
    },
    {
      header: 'Stock Status',
      cell: () => <p>In stock</p>, // Updated to render JSX directly
    },
    {
      header: 'Add to cart',
      cell: (info) => <AddToCartButton cart={info.row.original} />,
    },
    {
      header: 'Remove',
      cell: (info) => (
        <DeleteCartItemById id={`${info.row.original.id}`} item={info.row.original.title} />
      ),
    },
  ], []);

  const table = useReactTable({
    data: wishListItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error("Failed to load wishlist items");
  }

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <Breadcrumbs active="Wishlist" />
      {wishlistItems.length === 0 ? (
        <section className="h-full flex flex-col gap-5 items-center justify-center">
          <CiShoppingCart size={90} className="opacity-60" />
          <h5>No items in wishlist</h5>
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
        </div>
      )}
    </div>
  );
};

export default WishList;