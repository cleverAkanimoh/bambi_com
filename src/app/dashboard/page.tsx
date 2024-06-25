import { getCurrentUser } from "@/lib/prismaHelpers";
import React from "react";

const Page = async () => {
  const user = await getCurrentUser();
  return (
    <div>
      <h1 className="font-bold text-xl mb-2">Dashboard</h1>
      {user ? (
        <p>
          Hello,{" "}
          <span className="font-bold text-primary">
            {user?.name.split(" ")[0]}
          </span>{" "}
          (If Not{" "}
          <span className="font-semibold text-primary">
            {user?.name.split(" ")[1]}!
          </span>{" "}
          Logout)
          <br />
          From your account dashboard, you can easily check & view your recent
          orders, manage your shipping and billing addresses, and edit your
          password and account details.
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
