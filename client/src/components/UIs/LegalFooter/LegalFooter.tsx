import React from 'react';
import { motion } from 'framer-motion';

const LegalFooter: React.FC = () => {
  return (
    <section className="bg-white py-4 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-right text-gray-600 text-sm md:text-base"
        >
          <p>
            Registered in Morocco and Rwanda.  no. XX-XX-XXX | Developed by
            <a target='_blank' href='https://www.linkedin.com/in/rukundo-fred/' className='hover:text-daba-light-teal transition-colors font-semibold'> Duke fred</a> | Copyright © 2025 Daba-cities Limited
            <span className="ml-2">
              <a href="/privacy-statement" className="text-teal-500 hover:underline">
                Privacy Statement
              </a>
            </span>
            <span className="ml-2">
              <a href="/terms-and-conditions" className="text-teal-500 hover:underline">
                Terms and Conditions
              </a>
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalFooter;