"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useRouter } from "next/navigation";

const Page = ({
  searchParams: { callbackUrl = "/" },
}: {
  searchParams: { callbackUrl: string };
}) => {
  const router = useRouter()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      console.log("Started Login");
      const response = await fetch(`/api/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          callbackUrl
        })
      });

      // Check if the response status indicates success
      if (response.ok) {
        const data = await response.json();
        toast.success("Login Successful");
        router.push('/');
      } else {
        // If the response status is not 2xx, parse and throw the error message
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
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
      <Breadcrumbs active="Login" />
      <div className="flex items-center justify-center p-4 md:p-10 mb-4">
        <form
          onSubmit={login}

          className="bg-[#efefef] text-center w-full mx-auto md:w-3/4 lg:w-1/2 flex flex-col gap-8 items-center px-4 py-10 md:px-6 md:py-12"
        >
          <div>
            <legend className="text-3xl font-bold text-black">Login</legend>
            <p className="text-[#555] mt-3">
              Please Login using account details below
            </p>
          </div>
          <input
            className="w-full text-[#555] p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="email"
            placeholder="Email"
            name="email"
          />

          <input
            className="w-full text-[#555] p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <div className="self-start flex flex-col gap-4 md:gap-0 md:flex-row w-full items-center justify-between">
            <label
              htmlFor="rememberMe"
              className="flex items-center gap-2 text-[#555]"
            >
              <input
                type="checkbox"
                className="!border h-4 w-4  !border-primary"
                name="rememberMe"
                id="rememberMe"
              />
              Remember me
            </label>

            <Link
              href="#"
              className="text-[#555] hover:text-primary transition-all ease-in-out duration-200"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className={`self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-3 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 disabled:opacity-70 disabled:pointer-events-none`}
            disabled={isSubmitted}
          >
            {isSubmitted ? "Logging in..." : "Login"}
          </button>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center w-full justify-between">
            <p>Don&apos;t have an account?</p>
            <Link
              href="/auth/register"
              className="self-start text-[#585858] hover:text-primary transition-all ease-in-out duration-200 underline"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
