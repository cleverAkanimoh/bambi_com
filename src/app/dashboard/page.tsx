"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useAuth } from '@/context/auth-context';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config"

const Page = () => {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState<{ firstName: string; lastName: string } | null>(null);
  
  useEffect(() => {
    const fetchUserDetails = async () => {
        if (auth.currentUser) {
            const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                setUserDetails({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                });
            } else {
                // Handle case where user document does not exist
                console.log("User document does not exist");
            }
        }
    };

    fetchUserDetails();
}, [auth.currentUser]);
 

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
