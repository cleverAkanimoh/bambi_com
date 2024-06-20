"use client";
import React, { useState, useEffect, FormEvent } from 'react';
import { auth, db } from "@/config/firebase-config";
import { updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from '@/context/auth-context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumbs from '@/components/Breadcrumbs';

const Page = () => {
    const { user } = useAuth();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        displayName: "",
        email: "",
        password: "",
        newPassword: "",
        confirmPassword: ""
    });

    useEffect(() => {
        if (user) {
            const fetchUserData = async () => {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setFormData((prevData) => ({
                        ...prevData,
                        firstName: userData.firstName || "",
                        lastName: userData.lastName || "",
                        displayName: userData.displayName || "",
                        email: userData.email || ""
                    }));
                } else {
                    console.log("No such document!");
                }
            };
            fetchUserData();
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        try {
            if (!user) throw new Error("User is not authenticated");

            const userRef = doc(db, "users", user.uid);

            // Update Firestore user data if provided
            if (formData.firstName || formData.lastName || formData.displayName || formData.email) {
                const updatedData: any = {};
                if (formData.firstName) updatedData.firstName = formData.firstName;
                if (formData.lastName) updatedData.lastName = formData.lastName;
                if (formData.displayName) updatedData.displayName = formData.displayName;
                if (formData.email && user.email !== formData.email) updatedData.email = formData.email;
                await updateDoc(userRef, updatedData);
            }

            // Reauthenticate user if email is being updated
            if (user.email && formData.email && user.email !== formData.email) {
                if (!formData.password) throw new Error("Password is required to update email");
                const credential = EmailAuthProvider.credential(user.email, formData.password);
                await reauthenticateWithCredential(user, credential);
                await updateEmail(user, formData.email);
            }

            // Update password if it has been changed and confirmed
            if (formData.newPassword && formData.newPassword === formData.confirmPassword) {
                await updatePassword(user, formData.newPassword);
            }

            toast.success("Profile updated successfully");
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An error occurred");
            }
        } finally {
            setIsSubmitted(false);
        }
    };

    return (
        <div className='p-4'>
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
            <div className='min-h-screen flex items-center justify-center'>
                <form onSubmit={handleSubmit} className='text-[#555] grid grid-cols-1 gap-4'>
                    <h1 className='text-3xl font-bold text-black'>Account details</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                        <div>
                            <label className="mb-2 font-semibold" htmlFor="firstName">First Name</label>
                            <input
                                className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                                type="text"
                                placeholder="First name"
                                id='firstName'
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="mb-2 font-semibold" htmlFor="lastName">Last Name</label>
                            <input
                                className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                                type="text"
                                placeholder="Last name"
                                id='lastName'
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="mb-2 font-semibold" htmlFor="displayName">Display Name</label>
                        <input
                            className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                            type="text"
                            placeholder="Display Name"
                            id='displayName'
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="mb-2 font-semibold" htmlFor="email">Email Address</label>
                        <input
                            className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                            type="email"
                            placeholder="Email Address"
                            id='email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <h2 className='text-2xl font-bold text-black my-4'>Password Change</h2>
                        <div>
                            <label className="mb-2 font-semibold" htmlFor="password">Current Password</label>
                            <input
                                className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                                type="password"
                                placeholder="Current Password"
                                id='password'
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className="mb-2 font-semibold" htmlFor="newPassword">New Password</label>
                                <input
                                    className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                                    type="password"
                                    placeholder="New Password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="mb-2 font-semibold" htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    className="w-full p-4 outline-none ring-0 bg-white focus:bg-white border focus:border-primary"
                                    type="password"
                                    id='confirmPassword'
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`self-start text-white w-full md:w-[40%] lg:w-[30%] text-center font-bold bg-black p-4 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 ${isSubmitted ? "opacity-70" : "opacity-100"}`}
                        disabled={isSubmitted}
                    >
                        {isSubmitted ? "Saving..." : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
