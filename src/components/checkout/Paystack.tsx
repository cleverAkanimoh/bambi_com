"use client"

import React from 'react'
import { PaystackButton } from "react-paystack";

const publicKey = "pk_test_ef5e04574fd9f51d757806866fce40f5ebfd6b26";
export default function Paystack({ email, amount, display_name, variable_name, value }: { email: string; amount: number; display_name: string; variable_name: string; value: string }) {
    const componentProps = {
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        metadata: {
            custom_fields: [

                {
                    display_name,
                    variable_name,
                    value,
                },
            ],
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
            alert("Payment Successfull! Thank you for doing business with us"),
        onClose: () => alert("User cancelled payment action"),
    };

    return (
        <PaystackButton {...componentProps} />
    )
}
