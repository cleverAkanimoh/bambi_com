"use client";
import React, { useState } from 'react';
import Button from '../Button';
import { toast } from 'react-toastify';
import { updateBillingDetails } from '@/helpers/account';

export default function CheckoutForm({ user }: { user: any }) {
    const [submit, setSubmit] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const name = formData.get("name") as string;
        const country = formData.get("country") as string;
        const city = formData.get("city") as string;
        const address = formData.get("address") as string;

        try {
            await updateBillingDetails({ name, email, country, city, address });
            toast.success("Billing details updated successfully");
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Something went wrong!");
            }
        } finally {
            setSubmit(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Full name"
                name="name"
                id="name"
                placeholder="Full name"
                defaultValue={user?.name ?? ""}
                required
            />
            <Input
                label="Country"
                name="country"
                defaultValue={user?.country ?? ""}
                placeholder="Country"
                required
            />
            <Input
                label="Town/City"
                name="city"
                placeholder="Town/City"
                defaultValue={user?.city ?? ""}
                required
            />
            <Input
                label="Address"
                placeholder="Address"
                name="address"
                defaultValue={user?.address ?? ""}
                required
            />
            <Input
                label="Email"
                type="email"
                id="email"
                name="email"
                defaultValue={user?.email ?? ""}
                placeholder="Email"
                required
            />
            <Input
                label="Phone number"
                type="number"
                name="phone"
                id="phone"
                defaultValue={user?.phone ?? ""}
                placeholder="Phone number"
                required
            />
            <Input
                label="Apply coupon"
                placeholder="Enter coupon code"
                name="coupon"
            />

            <textarea
                placeholder="Additional note about your order, e.g special note for delivery."
                className="w-full min-h-40 max-h-60 border-2 rounded-md p-2"
                name="message"
            />

            <Button
                className="w-full text-white text-sm my-2 !bg-primary hover:!bg-black disabled:opacity-75"
                id="update-billing"
                disabled={submit}
                type='submit'
            >
                Submit
            </Button>
        </form>
    );
}

interface InputProps extends React.ComponentProps<"input"> {
    label?: string;
}

const Input = ({ label, id, required, ...rest }: InputProps) => {
    return (
        <div className="flex flex-col gap-1 mb-5 last:mb-0">
            {label && (
                <label htmlFor={id} className="text-gray-500">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                id={id}
                required={required}
                className="p-2 w-full border border-gray-400 rounded-md"
                {...rest}
            />
        </div>
    );
};
