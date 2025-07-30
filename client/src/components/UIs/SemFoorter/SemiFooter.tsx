import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SFooterSection: React.FC = () => {
  return (
    <section className="bg-daba-teal/95 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Side: Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start gap-4"
        >
          <Image
            src="/images/logoWhite.png"
            width={160}
            height={160}
            priority
            alt="DabaCities Logo"
            className="p-4"
          />
          <p className="text-white text-lg font-arial-nova font-semibold md:text-xl">
            WHERE VISION BECOMES REALITY
          </p>
        </motion.div>

        {/* Middle: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-4 text-white"
        >
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-daba-bg-teal w-5 h-5" />
            <p className="text-base md:text-lg font-arial-nova text-gray-100">
              123 Main Street, Casablanca, Morocco
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-daba-bg-teal w-5 h-5" />
            <p className="text-base md:text-lg font-arial-nova text-gray-100">
              <a href="mailto:hello@dabacities.com" className="hover:text-daba-light-teal transition-colors">hello@dabacities.com</a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-daba-bg-teal w-5 h-5" />
            <p className="text-base md:text-lg font-arial-nova text-gray-100">
              T: +212 (0) 6 61 23 45 67
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaTwitter className="text-daba-bg-teal w-5 h-5" />
            <p className="text-base md:text-lg font-arial-nova text-gray-100">
            <a target='_blank' href='https://github.com/fredrukundo' className='hover:text-daba-light-teal transition-colors'>@DabaCities / Twitter</a>
              
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-daba-bg-teal w-5 h-5" />
            <p className="text-base md:text-lg font-arial-nova text-gray-100">
            <a target='_blank' href='https://www.linkedin.com/in/rukundo-fred/' className='hover:text-daba-light-teal transition-colors'>@DabaCities / LinkedIn</a>
            </p>
          </div>
        </motion.div>

        {/* Right Side: Partner Logos and Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-start gap-8"
        >
          {/* Partner Logos */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/ukaid.webp"
                width={100}
                height={50}
                alt="UKAID Logo"
                className="object-contain"
              />
              <p className="text-gray-100 text-base md:text-lg font-arial-nova">
                UKAID from the British people
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/sida.jpeg"
                width={100}
                height={50}
                alt="SIDA Logo"
                className="object-contain"
              />
              <p className="text-gray-100 text-base md:text-lg font-arial-nova">
                Swedish International Development Cooperation Agency
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div className="flex flex-col items-start gap-3">
            <p className="text-white text-lg font-arial-nova font-semibold md:text-lg uppercase">
              Sign Up for Daba-Cities Talk
            </p>
            <p className="text-gray-100 text-base md:text-lg font-arial-nova">
              Our Digital Newsletter
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default SFooterSection;