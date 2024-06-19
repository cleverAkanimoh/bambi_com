"use client";
import Link from 'next/link'
import React, { FormEvent, useState, useEffect } from 'react';
import { auth } from "@/config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '@/context/auth-context';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    
    useEffect(() => {
        if (user) {
            router.push("/dashboard");
        } else {
            router.push("/auth/login");
        }
    }, [user, router]);

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            setIsSubmitted(true);
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful");
            router.push("/dashboard");
        } catch (error) {
            console.error(error);
            toast.error("Login failed");
        } finally {
            setIsSubmitted(false);
        }
    };



    return (
        <div className='min-h-screen flex items-center justify-center py-10'>
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
            <form onSubmit={login} action="" className='bg-[#efefef] text-center w-[90%] mx-auto md:w-1/2 lg:w-2/5 flex flex-col gap-8 items-center px-6 py-12'>
                <div>

                    <h1 className='text-3xl font-bold'>Login</h1>
                    <p className='text-[#555] mt-3'>Please Login using account details below</p>
                </div>
                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="email" placeholder="Email" name="email" />

                <input className="w-full text-[#555] p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary" type="password" placeholder="Enter your password" name="password" />
                <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                    <label htmlFor="rememberMe" className='flex items-center gap-2 text-[#555]'>
                        <input type="checkbox" className='!border h-4 w-4  !border-primary' name="rememberMe" id="rememberMe" />
                        Remember me</label>

                    <Link href="#" className='text-[#555] hover:text-primary transition-all ease-in-out duration-200'>Forgot password?</Link>

                </div>
                <button

                    type="submit"
                    className='self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-4 hover:bg-primary hover:text-white transition-all ease-in-out duration-200'

                    disabled={isSubmitted}
                >
                    {isSubmitted ? "Logging in..." : "Login"}
                </button>
                <Link href="/auth/register" className='self-start text-[#585858] hover:text-primary transition-all ease-in-out duration-200 hover:underline'>Create account</Link>
            </form>

        </div>
    )
}

export default Page