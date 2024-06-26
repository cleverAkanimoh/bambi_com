import React, { useState, useEffect, FormEvent } from "react";
import { toast } from "react-toastify";

import Breadcrumbs from "@/components/Breadcrumbs";
import Loading from "@/app/loading";
import { getCurrentUser } from "@/lib/prismaHelpers";

const Page = async () => {
  const user = await getCurrentUser();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {};

  return (
    <div className="p-2">
      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="text-[#555] grid grid-cols-1 gap-4"
        >
          <legend className="text-3xl font-bold text-black">
            Account details
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <label className="mb-2 font-semibold" htmlFor="firstName">
                First Name
              </label>
              <input
                className="w-full p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                type="text"
                placeholder="First name"
                id="firstName"
                name="firstName"
                value={user?.name ?? ""}
                required
              />
            </div>
            <div>
              <label className="mb-2 font-semibold" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                type="text"
                placeholder="Last name"
                id="lastName"
                name="lastName"
                value={user?.name ?? ""}
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-2 font-semibold" htmlFor="displayName">
              Display Name
            </label>
            <input
              className="w-full p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
              type="text"
              placeholder="Display Name"
              id="displayName"
              name="displayName"
              value={user?.name ?? ""}
              required
            />
          </div>
          <div>
            <label className="mb-2 font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              value={user?.email ?? ""}
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold text-black my-4">
              Password Change
            </h2>
            <div>
              <label className="mb-2 font-semibold" htmlFor="password">
                Current Password
              </label>
              <input
                className="w-full p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                type="password"
                placeholder="Current Password"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="mb-2 font-semibold" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  className="w-full p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                  type="password"
                  placeholder="New Password"
                  id="newPassword"
                  name="newPassword"
                  required
                />
              </div>
              <div>
                <label className="mb-2 font-semibold" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="w-full p-3 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-3 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 ${
              false ? "opacity-70" : "opacity-100"
            }`}
            disabled={false}
          >
            {false ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
