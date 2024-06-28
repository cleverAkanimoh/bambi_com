"use client";

import React, { FormEvent, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PageProps {
  searchParams: { callbackUrl: string };
}

const Page: React.FC<PageProps> = ({ searchParams: { callbackUrl = "/" } }) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const password = formData.get("password") as string;

    try {
      console.log("Started registration");
      const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          password
        })
      });

      // Check if the response status indicates success
      if (response.ok) {
        const data = await response.json();
        toast.success("Registration successful! Please login with your details");
        router.push('/auth/login');
      } else {
        // If the response status is not 2xx, parse and throw the error message
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs active="Register" />
      <div className="min-h-screen flex items-center justify-center py-10 gap-4">
        <form
          method="POST"
          onSubmit={signIn}

          className="bg-[#efefef] text-center w-[90%] mx-auto md:w-1/2 lg:w-2/5 flex flex-col gap-8 items-center px-6 py-12"
        >
          <div>
            <h1 className="text-3xl font-bold">Create account</h1>
            <p className="text-[#555] mt-3">
              Please register using account details below
            </p>
          </div>
          <input
            className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
          <input
            className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
          />
          <input
            className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
          <label
            htmlFor="newsletter"
            className="self-start flex items-center gap-2 text-[#555]"
          >
            <input
              type="checkbox"
              className="!border h-4 w-4  !border-primary"
              name="newsletter"
              id="newsletter"
            />
            Subscribe to our newsletter
          </label>
          <button
            disabled={isSubmitted}
            type="submit"
            className={`self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-4 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 disabled:opacity-70 disabled:pointer-events-none`}
          >
            {isSubmitted ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center w-[98%] mx-auto justify-between">

          <p>Already have an account?</p>
          <Link
            href="/auth/login"
            className="self-start text-[#585858] hover:text-primary transition-all ease-in-out duration-200 underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
