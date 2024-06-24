import Image from 'next/image'
import aboutImg from "../../../public/assets/images/about/1.jpg"
import WhyChooseUs from '@/components/WhyChooseUs'
import OurTeam from '@/components/OurTeam'
import Breadcrumbs from '@/components/Breadcrumbs'
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/framer";

const page = () => {
  return (
    <div className='bg-slate-100 flex flex-col gap-6'>
      <Breadcrumbs active="About" />
      <section className='w-[90%] mx-auto flex flex-col gap-6 md:flex-row md:items-center md:gap-10 py-10'>
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={fadeUp.transition}
        >
          <Image src={aboutImg} alt='About Image' />
        </motion.div>
        <motion.aside
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={fadeUp.transition}
          className='w-full flex flex-col gap-4'>
          <h1 className='text-2xl md:text-3xl'>About Us</h1>
          <p>For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond.</p>
          <p>Based in the heart of New York’s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients.</p>
        </motion.aside>

      </section>
      <div className='bg-white pt-12 pb-8'>
        <WhyChooseUs />
      </div>
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={fadeUp.transition}
      >
        <OurTeam />
      </motion.div>
    </div>
  )
}

export default page