"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";
import { LuRefreshCw } from "react-icons/lu";
import { FaStreetView } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="my-10">
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={fadeUp.transition}
      >
        {/* <!-- Section Title Start --> */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Promoting screen-free healthy development</h2>
          <h5 className="mt-2 text-xl font-semibold mx-auto">
            Once upon a time, families played. Today, between screen time and
            homework, free play Otilo.
          </h5>
        </div>
        {/* <!-- Section Title End --> */}
      </motion.div>

      <div className="w-11/12 md:w-10/12 mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 items-center place-items-center gap-6 lg-grid-cols-3">
        <CtaCard
          heading="Open-ended Play"
          paragraph=" Our products allows children to be creative, experiment with
              different ideas and work through problems independently"
          icon={<FaStreetView />}
        />
        <CtaCard
          heading="Non-digital"
          paragraph="We create screen-free games and storybooks that delight kids,
              spark imagination and create experiences that engage the whole
              family."
          icon={<FaDesktop />}
        />
        <CtaCard
          heading="Environmental Friendly"
          paragraph="Bambi offers high-quality, sustainably made products focused on
              kids and families. We design with safety in mind, free from
              harmful materials."
          icon={ <LuRefreshCw />}
        />
      </div>
    </section>
  );
}

const CtaCard = ({
  icon,
  paragraph,
  heading,
}: {
  icon: any;
  paragraph: string;
  heading: string;
}) => (
  <motion.div
    className=""
    initial={fadeUp.initial}
    whileInView={fadeUp.whileInView}
    transition={fadeUp.transition}
  >
    <div className="flex flex-col items-center justify-start gap-5 text-center my-6 h-full min-h-[400px] ">
  <span className="text-5xl text-secondary">{icon}</span>
  <h4 className="cta-title">{heading}</h4>
  <p>{paragraph}</p>
</div>

  </motion.div>
);
