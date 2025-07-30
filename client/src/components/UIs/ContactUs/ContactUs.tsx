import React from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardArrowDown } from "react-icons/md";

const ContactFormSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start gap-4 md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-500 leading-tight">
            Fill in your details. <br />
            Click sign up. <br />
            <span className="text-red-500">Change the world.</span>
          </h2>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="md:w-1/2 w-full"
        >
          <form className="flex flex-col gap-4">
            {/* Form Heading */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Let&apos;s start a conversation
            </h3>

            {/* Form Inputs */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Organisation"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="green-city-homes">Green City Homes International Ltd</option>
                <option value="green-city-homes">Green City Homes International Ltd</option>
                <option value="green-city-homes">Green City Homes International Ltd</option>
                <option value="green-city-homes">Green City Homes International Ltd</option>
                <option value="green-city-homes">Green City Homes International Ltd</option>
                {/* Add more options as needed */}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <MdKeyboardArrowDown size={25}/>
              </div>
            </div>

            {/* Privacy Statement */}
            <p className="text-sm text-gray-600">
              We&apos;ll never share your data with other companies. See  <a href="/privacy-statement" className="text-teal-500 hover:underline">
                Privacy Statement
              </a> for more information.
            </p>

            {/* Submit Button */}
            <motion.button
              type="submit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="self-end bg-daba-teal/95 text-white px-6 py-2 rounded-full font-semibold text-base hover:bg-teal-600 transition-colors"
            >
              SUBMIT
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;