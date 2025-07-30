import React from 'react';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import Link from 'next/link';

const StatsSection = () => {
  return (
    <section className="bg-gray-950 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Complete Projects Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center relative bg-white/5 p-8 rounded-2xl backdrop-blur-lg shadow-xl"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-daba-green/40 rounded-full flex items-center justify-center">
              <IoIosConstruct className="w-8 h-8 text-daba-bg-teal" />
            </div>
            <h2 className="text-5xl md:text-6xl font-century-gothic-bold text-white mb-3">300+</h2>
            <p className="text-lg md:text-xl text-gray-100 font-arial-nova">Complete Projects</p>
          </motion.div>

          {/* Years of Experience Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center relative bg-white/5 p-8 rounded-2xl backdrop-blur-lg shadow-xl"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-daba-green/40 rounded-full flex items-center justify-center">
              <IoCodeWorkingSharp className="w-8 h-8 text-daba-bg-teal" />
            </div>
            <h2 className="text-5xl md:text-6xl font-century-gothic-bold text-white mb-3">2+</h2>
            <p className="text-lg md:text-xl text-gray-100 font-arial-nova">Years of Experience</p>
          </motion.div>

          {/* Happy Clients Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-white/5 p-8 rounded-2xl backdrop-blur-lg shadow-xl"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-daba-green/40 rounded-full flex items-center justify-center">
              <FaCity className="w-8 h-8 text-daba-bg-teal" />
            </div>
            <h2 className="text-5xl md:text-6xl font-century-gothic-bold text-white mb-3">107,000</h2>
            <p className="text-lg md:text-xl text-gray-100 font-arial-nova">Happy Clients</p>
          </motion.div>
        </div>

        {/* Explore Button (below the grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-10"
        >
          <h3 className="text-2xl md:text-3xl font-arial-nova-light-bold text-daba-teal mb-6">
            Explore the Data Dashboard
          </h3>
          <Link href='citizens/blog' passHref>
          <button className="bg-daba-teal text-white px-8 py-3 rounded-full font-arial-nova font-semibold text-lg hover:bg-daba-light-teal hover:shadow-xl transition-all duration-300 shadow-lg">
            EXPLORE
            <FaLongArrowAltRight className="inline ml-3" />
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;