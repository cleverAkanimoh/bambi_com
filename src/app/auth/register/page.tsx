"use client";

import React, { FormEvent, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { loginUserAction, registerUserAction } from "@/actions/authenticate";
import { toast } from "react-toastify";
import { useFormStatus } from "react-dom";

const Page = ({
  searchParams: { callbackUrl = "/" },
}: {
  searchParams: { callbackUrl: string };
}) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs active="Register" />
      <div className="min-h-screen flex items-center justify-center py-10">
        <form
          action={registerUserAction}
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
          />
          <input
            className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <input
            className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
            type="password"
            placeholder="Enter your password"
            name="password"
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
            disabled={pending}
            type="submit"
            className={`self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-4 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 disabled:opacity-70 disabled:pointer-events-none`}
          >
            {pending ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
