"use client"
import Accordion from '@/components/Accordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react'

const page = () => {
    const accordionItems = [
        {
            title: "FAQ 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis molestias nulla praesentium magni. Ea repellendus facere quod minima amet porro, voluptatum qui labore veniam maxime aspernatur animi sit dolor velit et! Asperiores quis, ullam unde fuga rem"
        },
        {
            title: "FAQ 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis molestias nulla praesentium magni. Ea repellendus facere quod minima amet porro, voluptatum qui labore veniam maxime aspernatur animi sit dolor velit et! Asperiores quis, ullam unde fuga rem"
        },
        {
            title: "FAQ 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis molestias nulla praesentium magni. Ea repellendus facere quod minima amet porro, voluptatum qui labore veniam maxime aspernatur animi sit dolor velit et! Asperiores quis, ullam unde fuga rem"
        }
    ];


    return (
        <>
        <Breadcrumbs active="Faq" />
        <div className='mt-10 mb-8'>
            <div className='w-[90%] mx-auto grid gap-10 mt-10 mb-8'>
                <div className='grid gap-2'>
                    <h1 className='text-xl font-bold'>Below are frequently asked questions, you may find the answer for yourself</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis molestias nulla praesentium magni. Ea repellendus facere quod minima amet porro, voluptatum qui labore veniam maxime aspernatur animi sit dolor velit et! Asperiores quis, ullam unde fuga rem </p>
                </div>
                <div className="">
                    <Accordion items={accordionItems} />
                </div>
            </div>
        </div>
        </>
    )
}

export default page