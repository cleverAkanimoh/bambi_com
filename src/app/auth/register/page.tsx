"use client";
import React, { FormEvent, useEffect, useState } from 'react';
import { auth, googleProvider, db } from "@/config/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { FcGoogle } from "react-icons/fc";
import { useAuth } from '@/context/auth-context';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumbs from '@/components/Breadcrumbs';

const Page = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            router.push("/");
        } else {
            router.push("/auth/register");
        }
    }, [user, router]);

    const signIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const password = formData.get('password') as string;
        try {
            setIsSubmitted(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save additional user information to Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName,
                lastName,
                email
            });

            toast.success("Registration successful");
            console.log(auth?.currentUser?.email);
            // e.currentTarget.reset();
        } catch (error: unknown) {
            console.error(error);
            // Narrow down the type of 'error'
            if (error instanceof Error) {
                toast.error(error.message); // Display the correct error message from Firestore
            } else {
                toast.error("Registration failed");
            }
         } finally {
            setIsSubmitted(false);
        }
    

    };

    return (
        <>
            {/* <Breadcrumbs active="Register" /> */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                hideProgressBar={false}
            />
        <div className='min-h-screen flex items-center justify-center py-10'>
            <form onSubmit={signIn} action="" className='bg-[#efefef] text-center w-[90%] mx-auto md:w-1/2 lg:w-2/5 flex flex-col gap-8 items-center px-6 py-12'>
                <div>
                    <h1 className='text-3xl font-bold'>Create account</h1>
                    <p className='text-[#555] mt-3'>Please register using account details below</p>
                </div>
                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="text" placeholder="First Name" name="firstName" />
                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="text" placeholder="Last Name" name="lastName" />
                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="email" placeholder="Email" name="email" />
                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="password" placeholder="Enter your password" name="password" />
                <label htmlFor="newsletter" className='self-start flex items-center gap-2 text-[#555]'>
                    <input type="checkbox" className='!border h-4 w-4  !border-primary' name="newsletter" id="newsletter" />
                    Subscribe to our newsletter
                </label>
                <button
                    disabled={isSubmitted}
                    type="submit"
                    className={`self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-4 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 ${isSubmitted ? "opacity-70" : "opacity-100"}`}
                >
                    {isSubmitted ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
        </>
    )
}

export default Page;
