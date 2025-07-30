import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';

const IntroSection: React.FC = () => {
  return (
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
              <div className="w-18 h-18 flex items-center justify-center">
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
            Daba.Cities is an environmental and social enterprise transforming city centers into vibrant, resilient spaces. By restoring underutilized properties and integrating sustainable solutions like water recycling, urban farming, and eco-friendly construction, we create compact, people-centered environments. Our mission is to build walkable, inclusive cities that thrive amid change, fostering healthier and more efficient urban living.
          </motion.p>

          {/* Button */}
          <Link href='/citizens/about' passHref>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 bg-daba-teal text-white px-6 py-2 rounded-full font-arial-nova font-semibold
             hover:bg-daba-light-teal transition-colors"
          >
            More About Daba-Cities
            <FaLongArrowAltRight className="inline ml-2" />
          </motion.div>
          </Link>
        </div>

        {/* Right Side: Additional Info with Fancy Vertical Line */}
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
  );
};

export default IntroSection;