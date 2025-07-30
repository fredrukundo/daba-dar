import React from 'react';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';

const FeatureSection = () => {
  return (
    <section className="bg-daba-bg-teal py-12 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Green City Homes */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center h-72 md:h-96"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-century-gothic-bold text-daba-teal mb-4 text-center">
            Compact and Antifragile City Planning
            </h2>
            <p className="text-gray-700 mb-6 text-base md:text-lg font-arial-nova text-center">
            We design sustainable, adaptable urban spaces with efficient land use, walkability,<br/>
            and circular resource management to create future-ready cities.</p>
            
          </motion.div>
          <Link href='/search' passHref>
          <motion.button
          
            whileHover={{ scale: 1.1, backgroundColor: '#4FC3F7', rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-daba-teal text-white px-6 py-3 rounded-full font-arial-nova font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300 shadow-md flex items-center"
          >
            LOOKING TO INVEST?
            <FaLongArrowAltRight className="ml-2" />
          </motion.button>
          </Link>
        </motion.div>

        {/* Right Column: First Image (Background) */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl h-72 md:h-96 bg-[url('/images/Tanger.jpeg')] bg-cover bg-center"
        ></motion.div>

        {/* Right Column: Second Image (Background) */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl h-72 md:h-96 bg-[url('/images/MoulayDriss.jpeg')] bg-cover bg-center"
        >
         
        </motion.div>

        {/* Right Column: How We’re Building Homes */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center h-72 md:h-96"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-century-gothic-bold text-daba-coral mb-4 text-center">
            Circular and Sustainable Construction
            </h2>
            <p className="text-gray-700 mb-6 text-base md:text-lg font-arial-nova text-center">
            We develop eco-friendly materials, water recycling systems, and energy-efficient solutions to create sustainable, self-sufficient urban environments.
            </p>
          </motion.div>
          <Link href='/services/projects' passHref>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#374151', rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-daba-teal text-white px-6 py-3 rounded-full font-arial-nova font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300 shadow-md flex items-center"
          >
            LEARN MORE
            <FaLongArrowAltRight className="ml-2" />
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;