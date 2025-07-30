import React from 'react';
import { motion } from 'framer-motion';

const FeaturedPartner = () => {
    return (
        <section className="bg-daba-bg-teal py-8 px-4 md:px-8 lg:px-16 flex justify-center items-center">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-2xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
                >
                    Expert Renovation,
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-2xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
                >
                    Quality Construction,
                </motion.h2>
                
                <motion.h2
                    initial={{ opacity: 0, y: 20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-2xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
                >
                     and Sustainable Solutions,
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-2xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
                >
                     All in One Place.
                </motion.h2>
            </div>
        </section>
    );
};

export default FeaturedPartner;