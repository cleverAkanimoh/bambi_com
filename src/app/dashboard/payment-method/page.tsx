"use client";
import React, { useEffect, useState } from 'react';
import { db } from "@/config/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from '@/context/auth-context';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PaymentMethod {
    cardNumber: string;
    expiryDate: string;
    cardHolderName: string;
}

const Page = () => {
    const { user } = useAuth();
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (user) {
            const fetchPaymentMethod = async () => {
                try {
                    const docRef = doc(db, "users", user.uid, "paymentMethods", "default");
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setPaymentMethod(docSnap.data() as PaymentMethod);
                    } else {
                        setPaymentMethod(null);
                    }
                } catch (error) {
                    console.error("Error fetching payment method:", error);
                    setPaymentMethod(null);
                } finally {
                    setLoading(false);
                }
            };

            fetchPaymentMethod();
        }
    }, [user]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className=''>
            {/* <Breadcrumbs active="Payment Method" /> */}
            <div className='grid grid-cols-1 gap-4 p-4'>
                <h1 className='text-black text-3xl font-bold'>Payment Method</h1>
                {paymentMethod ? (
                    <div className='w-full text-[#555] font-semibold p-4'>
                        <p>Card Holder: {paymentMethod.cardHolderName}</p>
                        <p>Card Number: {paymentMethod.cardNumber}</p>
                        <p>Expiry Date: {paymentMethod.expiryDate}</p>
                    </div>
                ) : (
                    <div className='w-full bg-stone-200 text-[#555] font-semibold p-4'>
                        You do not have any payment method saved
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
