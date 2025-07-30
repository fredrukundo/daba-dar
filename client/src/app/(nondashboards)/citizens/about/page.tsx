"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  IoCodeWorkingSharp,
} from "react-icons/io5";
import { IoIosConstruct } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import ContactFormSection from "@/components/UIs/ContactUs/ContactUs";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const AboutCitizens = () => {
  return (
    <div className="flex flex-col text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-end justify-start overflow-hidden">
        {/* Photo */}
        <Image
          src="/images/pic1.jpeg"
          alt="Background Image"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
        <motion.div
          className="relative z-10 flex items-center gap-4 p-6 md:p-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="h-32 md:h-40 lg:h-48 w-3 bg-[#056739]"></div>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            About
            <br />
            US
            <br />
            <span className="text-[#0f74bc]">THE DABA WAY</span>
          </h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="bg-daba-bg-teal py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Logo and Heading */}
          <div className="flex flex-col items-start gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/images/DaCircle.png" alt="Daba Logo" width={150} height={100} />
                </div>
                <h1 className="text-3xl md:text-4xl font-century-gothic-bold text-daba-teal">
                  Redefining Urban Living for a Sustainable Future
                </h1>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 max-w-lg text-base font-arial-nova"
            >
              Daba.Cities is an environmental and social enterprise transforming city centers into vibrant, resilient spaces.
              By restoring underutilized properties and integrating sustainable solutions like water recycling, urban
              farming, and eco-friendly construction, we create compact, people-centered environments. Our mission is
              to build walkable, inclusive cities that thrive amid change, fostering healthier and more efficient urban
              living.
            </motion.p>
          </div>

          {/* Right Side: Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-daba-teal text-left md:w-1/3 flex items-center gap-4"
          >
            {/* Fancy Vertical Line */}
            <div className="h-32 w-2 bg-daba-green rounded-full"></div>
            {/* Text */}
            <p className="text-lg font-arial-nova-light-bold text-daba-green">
              We create cities that are healthier, more efficient, and better equipped for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team & Partnerships */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        {/* Photo sections */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-daba-teal text-left md:w-1/3 flex items-center gap-4"
          >
            {/* Fancy Vertical Line */}
            <div className="h-32 w-2 bg-daba-green rounded-full"></div>
            {/* Text */}
            <p className="text-lg font-arial-nova-light-bold text-daba-green">
              We are a team of passionate individuals dedicated to transforming urban spaces into vibrant, sustainable
              environments.
            </p>
          </motion.div>
          <div className="flex-grow">
            <Image
              src="/images/inclusive-cities.jpeg"
              alt="Team Photo"
              width={1000}
              height={500}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-century-gothic-bold text-daba-teal">
              Join Our Team
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Be Part of the Movement Shaping the Future of Cities
            </p>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Consultants */}
            <div className="bg-gray-950 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <IoIosConstruct className="w-8 h-8 text-daba-green" />
                <h3 className="text-xl font-semibold text-white">Consultants</h3>
              </div>
              <p className="text-gray-300 text-lg">
                We are always interested in hearing from sector-specialist consultants
                who have great ideas and want to work with us.
              </p>
              <Button className="mt-4 bg-daba-green text-white hover:bg-gray-800">
                <a href="/contact">Connect with us</a>
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Interns */}
            <div className="bg-gray-950 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <IoCodeWorkingSharp className="w-8 h-8 text-daba-green" />
                <h3 className="text-xl font-semibold text-white">Internships</h3>
              </div>
              <p className="text-gray-300 text-lg">
                Come and gain valuable insights into how a data-driven international
                development organization works.
              </p>
              <Button className="mt-4 bg-daba-green text-white hover:bg-gray-800">
                <a href="/contact">Connect with us</a>
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Researchers */}
            <div className="bg-gray-950 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <FaCity className="w-8 h-8 text-daba-green" />
                <h3 className="text-xl font-semibold text-white">
                  Researchers
                </h3>
              </div>
              <p className="text-gray-300 text-lg">
                Contribute to transforming the lives of the bottom 40% of income
                earners in Africa and Asia.
              </p>
              <Button className="mt-4 bg-daba-green text-white hover:bg-gray-800">
                <a href="/contact">Connect with us</a>
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactFormSection />
    </div>
  );
};

export default AboutCitizens;
