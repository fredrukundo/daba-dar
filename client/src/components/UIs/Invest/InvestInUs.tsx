import React from 'react';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Image from 'next/image';

const InvestInUs = () => {
    return (
        <section className="relative bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
            <div
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
            >
                {/* Left Side: Content */}
                <div className="flex flex-col items-start gap-4">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-3xl md:text-4xl font-bold text-red-500"
                    >
                        Join Daba-cities in our work
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-800 max-w-lg text-base md:text-lg leading-relaxed"
                    >
                        We are a community of urban planners, architects, engineers, and
                        environmentalists working together to create sustainable, resilient, and
                        future-ready cities. Join us in our mission to transform urban spaces and
                        create a better world for future generations.
                    </motion.p>

                    {/* Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 bg-daba-teal text-white px-6 py-3 rounded-full font-semibold text-base md:text-lg flex items-center gap-2 hover:bg-teal-600 transition-colors"
                    >
                        INVEST IN OUR WORK
                        <FaLongArrowAltRight />
                    </motion.button>
                </div>

                <div className=" ">
                    <Image
                        src="/images/world2.png"
                        width={400}
                        height={300}
                        alt="World Map"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default InvestInUs;