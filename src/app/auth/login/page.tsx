"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import Breadcrumbs from "@/components/Breadcrumbs";
import { loginUserAction } from "@/actions/authenticate";

const Page = ({
  searchParams: { callbackUrl = "/" },
}: {
  searchParams: { callbackUrl: string };
}) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      setIsSubmitted(true);
      await loginUserAction({ email, password, callbackUrl });
      toast.success("Login successful");
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
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
          action=""
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
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full items-center justify-between">
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
          <Link
            href="/auth/register"
            className="self-start text-[#585858] hover:text-primary transition-all ease-in-out duration-200 hover:underline"
          >
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;
