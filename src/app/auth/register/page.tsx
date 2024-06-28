"use client";

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { registerUserAction } from "@/actions/authenticate";

import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/SubmitButton";
import BamLink from "@/components/BamLink";

const Page = ({
  searchParams: { success = "" },
}: {
  searchParams: { success: string };
}) => {
  const [errorMessage, dispatch] = useFormState(registerUserAction, undefined);

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs active="Register" />
      <div className="min-h-screen flex items-center justify-center py-10">
        <h1>{success}</h1>
        <form
          action={dispatch}
          className="bg-[#efefef] text-center w-[90%] mx-auto md:w-1/2 lg:w-2/5 flex flex-col gap-8 items-center px-6 py-12"
        >
          <div>
            <h1 className="text-3xl font-bold">Create account</h1>
            <p className="text-[#555] mt-3">
              Please register using account details below
            </p>
          </div>
          {success === "" && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}
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

          <SubmitButton text="Register" submitText="Registering..." />

          <BamLink
            href="/auth/login"
            variant="ghost"
            className="self-start text-[#585858] hover:text-primary transition-all ease-in-out duration-200 hover:underline"
          >
            Login
          </BamLink>
        </form>
      </div>
    </div>
  );
};

export default Page;
