"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";
import { BiDesktop, BiRefresh, BiStreetView } from "react-icons/bi";

export default function CtaSection() {
  return (
    <section className="my-10 p-2">
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={fadeUp.transition}
      >
        {/* <!-- Section Title Start --> */}
        <div className="text-center space-y-4 mb-8">
          <h2 className="font-semibold text-2xl sm:text-3xl mx-auto max-w-lg">
            Promoting screen-free healthy development
          </h2>
          <h5 className="max-w-md mx-auto font-normal">
            Once upon a time, families played. Today, between screen time and
            homework, free play Otilo.
          </h5>
        </div>
        {/* <!-- Section Title End --> */}
      </motion.div>

      <article className="flex flex-wrap justify-center items-center gap-x-4">
      <div className="w-11/12 md:w-10/12 mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 items-center place-items-center gap-6 lg-grid-cols-3">
        <CtaCard
          heading="Open-ended Play"
          paragraph=" Our products allows children to be creative, experiment with
              different ideas and work through problems independently"
          Icon={BiStreetView}
        />
        <CtaCard
          heading="Non-digital"
          paragraph="We create screen-free games and storybooks that delight kids,
              spark imagination and create experiences that engage the whole
              family."
          Icon={BiDesktop}
        />
        <CtaCard
          heading="Environmental Friendly"
          paragraph="Bambi offers high-quality, sustainably made products focused on
              kids and families. We design with safety in mind, free from
              harmful materials."
          Icon={BiRefresh}
        />
        </div>
      </article>
    </section>
  );
}

const CtaCard = ({
  Icon,
  paragraph,
  heading,
}: {
  Icon: React.ElementType;
  paragraph: string;
  heading: string;
}) => (
  <motion.div
    className="flex items-center justify-center flex-col gap-4 max-w-md"
    initial={fadeUp.initial}
    whileInView={fadeUp.whileInView}
    transition={fadeUp.transition}
  >
    <Icon className="size-20 text-secondary" />
    <div className="text-center mb-10 space-y-2">
      <h4 className="font-normal text-xl">{heading}</h4>
      <p>{paragraph}</p>
    </div>
  </motion.div>
);
