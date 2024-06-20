"use client";
import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import Breadcrumbs from "@/components/Breadcrumbs";
import { sendEmail } from "@/components/email/Email";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            setIsSubmitting(true);
            await sendEmail(formData);
            toast.success("Email sent successfully!");
            // e.currentTarget.reset();
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Failed to send email. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className='w-full pb-10'>
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
                <Breadcrumbs active="Contact" />

                <div className="w-full">
                    <iframe 
                        className="w-full h-[20rem]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
                <section className='flex flex-col md:flex-row gap-8 justify-between w-[90%] mx-auto mt-14 '>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full gap-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input className="w-full p-4 outline-none ring-0 bg-stone-100 focus:bg-white border focus:border-primary" type="text" placeholder="Your Name *" name="name" required />
                            <input className="w-full p-4 outline-none ring-0 bg-stone-100 focus:bg-white border focus:border-primary" type="email" placeholder="Email *" name="email" required />
                        </div>
                        <input className="w-full p-4 outline-none ring-0 bg-stone-100 focus:bg-white border focus:border-primary" type="text" placeholder="Subject *" name="subject" required />
                        <textarea className='block bg-stone-100 focus:bg-white w-full focus:outline-none border focus:border-primary p-4 ring-0 resize-none' name="message" placeholder="Message" required />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='text-white w-full md:w-[45%] lg:w-1/3 hover:text-black text-center font-bold bg-secondary rounded-md p-4'
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                    <aside className="flex flex-col gap-4">
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                        <address className="contact-block">
                            <ul>
                                <li data-aos="fade-up" className="flex items-center gap-2 w-full p-4 border-b border-b-[#d7d7d7]" data-aos-delay="200">
                                    <FaFax className="text-xl text-[#222]" />Your address goes here
                                </li>
                                <li data-aos="fade-up" className="flex items-center gap-2 w-full p-4 border-b border-b-[#d7d7d7]" data-aos-delay="400">
                                    <MdOutlinePhone className="text-xl text-[#222]" /> <a className="hover:!text-primary" href="tel:123-123-456-789">123 123 456 789</a>
                                </li>
                                <li data-aos="fade-up" className="flex items-center gap-2 p-4 w-full" data-aos-delay="600">
                                    <MdMailOutline className="text-xl text-[#222]" /> <a className="hover:!text-primary" href="mailto:demo@example.com">demo@example.com </a>
                                </li>
                            </ul>
                        </address>
                        <div className="p-2" data-aos="fade-up" data-aos-delay="600">
                            <h6 className="title">Working Hours</h6>
                            <p>Monday – Saturday: 08AM – 10PM</p>
                        </div>
                    </aside>
                </section>
            </div>
        </React.Suspense>
    );
};

export default ContactPage;
