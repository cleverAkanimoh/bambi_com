"use client"
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config";


const Page = () => {

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

    console.log(userDetails); // This will log null on the first render

    return (
        <div>
            <h1 className='font-bold text-xl mb-2'>Dashboard</h1>
            {userDetails ? (
                <p>
                    Hello, <span className='font-bold text-primary'>{userDetails.firstName} {userDetails.lastName}</span> (If Not <span className='font-semibold text-primary'> {userDetails.lastName}  !</span> Logout)
                    <br />
                    From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                </p>
            ) : (
                <p>Loading...</p> // Placeholder for when userDetails is null (loading state)
            )}
        </div>
    );
}

export default Page;
