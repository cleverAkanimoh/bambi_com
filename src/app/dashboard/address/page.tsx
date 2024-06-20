"use client";
import React, { useEffect, useState } from 'react';
import { db } from "@/config/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from '@/context/auth-context';
import Breadcrumbs from '@/components/Breadcrumbs';

interface BillingAddress {
    name: string;
    street: string;
    suite: string;
    city: string;
    state: string;
    zipCode: string;
    mobile: string;
}

const Page = () => {
    const { user } = useAuth();
    const [billingAddress, setBillingAddress] = useState<BillingAddress | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (user) {
            const fetchBillingAddress = async () => {
                try {
                    const docRef = doc(db, "users", user.uid, "addresses", "billing");
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setBillingAddress(docSnap.data() as BillingAddress);
                    } else {
                        setBillingAddress(null);
                    }
                } catch (error) {
                    console.error("Error fetching billing address:", error);
                    setBillingAddress(null);
                } finally {
                    setLoading(false);
                }
            };

            fetchBillingAddress();
        }
    }, [user]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className=''>
            {/* <Breadcrumbs active="Billing Address" /> */}
            <div className='grid grid-cols-1 gap-4 p-4'>
                <h1 className='text-black text-3xl font-bold'>Billing Address</h1>
                {billingAddress ? (
                    <div>
                        <h6>{billingAddress.name}</h6>
                        <p>{billingAddress.street} {billingAddress.suite}, {billingAddress.city}, {billingAddress.state} {billingAddress.zipCode}</p>
                        <p>Mobile: {billingAddress.mobile}</p>
                    </div>
                ) : (
                    <div className='w-full bg-stone-200 text-[#555] font-semibold p-4'>
                        You do not have any billing address saved
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
