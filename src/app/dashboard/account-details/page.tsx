"use client"
import React, { useState, useEffect, FormEvent } from "react";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";
import { updateAccountInfo } from "@/helpers/account";

const Page = () => {
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const displayName = formData.get("displayName") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    
if(newPassword !== confirmPassword){
    toast.error("New passwords do not match")
    return
}


    try {
      console.log("Started registration");
      setIsSubmitted(true);
      await updateAccountInfo({ email, firstName, lastName, password: confirmPassword, displayName });
      toast.success("Details Updated successfully");
    } catch (error) {
      toast.error(`${error}`); 
    } finally {
      setIsSubmitted(false);
    }
  };
  

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
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <legend className="text-2xl font-bold text-black my-4">
              Password Change
            </legend>
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
}

export default Page;
