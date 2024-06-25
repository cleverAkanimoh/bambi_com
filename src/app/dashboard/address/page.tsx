"use client";
import React from 'react';
import { useAuth } from '@/context/auth-context';
import { useQuery } from 'react-query';
import { db } from "@/config/firebase-config";
import { doc, getDoc } from "firebase/firestore";
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

const fetchBillingAddress = async (userId: string) => {
    const docRef = doc(db, "users", userId, "addresses", "billing");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("No billing address found");
    }

    return docSnap.data() as BillingAddress;
};

const Page = () => {
    const { user } = useAuth();

    const { data: billingAddress, error, isLoading } = useQuery(
        ['billingAddress', user?.uid],
        () => fetchBillingAddress(user?.uid ?? ''),
        {
            enabled: !!user,
            refetchOnWindowFocus: false,
        }
    );


    return (
        <div className=''>
            <Breadcrumbs active="Billing Address" />
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