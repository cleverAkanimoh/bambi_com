"use client";
import Accordion from "@/components/Accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";
import React from "react";

const page = () => {
  const accordionItems = [
    {
      title: "FAQ 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis molestias nulla praesentium magni. Ea repellendus facere quod minima amet porro, voluptatum qui labore veniam maxime aspernatur animi sit dolor velit et! Asperiores quis, ullam unde fuga rem",
    },
    {
      title: "FAQ 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis molestias nulla praesentium magni. Ea repellendus facere quod minima amet porro, voluptatum qui labore veniam maxime aspernatur animi sit dolor velit et! Asperiores quis, ullam unde fuga rem",
    },
    {
      title: "FAQ 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis molestias nulla praesentium magni. Ea repellendus facere quod minima amet porro, voluptatum qui labore veniam maxime aspernatur animi sit dolor velit et! Asperiores quis, ullam unde fuga rem",
    },
  ];

  return (
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      className="flex flex-col gap-6"
    >
      <Breadcrumbs active="Faq" />
      <div className="p-6 md:p-10 mb-4">
        <div className="w-[90%] mx-auto grid gap-10">
          <div className="grid gap-2">
            <h1 className="text-xl font-bold">
              Below are frequently asked questions, you may find the answer for
              yourself
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis molestias nulla praesentium magni. Ea repellendus
              facere quod minima amet porro, voluptatum qui labore veniam maxime
              aspernatur animi sit dolor velit et! Asperiores quis, ullam unde
              fuga rem{" "}
            </p>
          </div>
          <div className="">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
