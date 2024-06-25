"use client";
import React from 'react';
import { useAuth } from '@/context/auth-context';
import { useQuery } from 'react-query';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";

const fetchUserDetails = async (userId: string) => {
  const userDoc = await getDoc(doc(db, "users", userId));
  if (!userDoc.exists()) {
    throw new Error("User document does not exist");
  }
  return userDoc.data();
};

const Page = () => {
  const { user } = useAuth();

  const { data: userDetails, error, isLoading } = useQuery(
    ['userDetails', user?.uid],
    () => fetchUserDetails(user?.uid ?? ''),
    {
      enabled: !!user,
      refetchOnWindowFocus: false,
    }
  );
 

  return (
    <React.Suspense>
    <div>
      <h1 className='font-bold text-xl mb-2'>Dashboard</h1>
      {user ? (
        <p>
          Hello, <span className='font-bold text-primary'>{userDetails?.firstName}</span> (If Not <span className='font-semibold text-primary'>{userDetails?.lastName}!</span> Logout)
          <br />
          From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </React.Suspense>
  );
};

export default Page;
