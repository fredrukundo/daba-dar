// // components/JoinSection.tsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { FaLongArrowAltRight } from 'react-icons/fa';

// const JoinSection = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Side: Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="flex flex-col items-start gap-6 bg-white p-8 rounded-xl shadow-lg md:w-1/2"
//         >
//           {/* Heading and Subheading */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//               Become a Partner
//             </h1>
//             <p className="text-xl md:text-2xl font-semibold text-teal-600 mt-2">
//               Join the Affordable Housing Movement
//             </p>
//           </motion.div>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md"
//           >
//             Our diverse network of partners spans Africa and Asia. Each is unique but all are united by an audacious goal to put a roof over the head of humanity. To succeed, we need the brightest minds and strongest convictions to build a global affordable housing movement. So, if you share our goal, we want to hear from you.
//           </motion.p>

//           {/* Button */}
//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             whileHover={{
//               scale: 1.05,
//               backgroundImage: 'linear-gradient(to right, #0f74bc, #38b2ac)',
//               boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-4 bg-gradient-to-r from-[#0f74bc] to-teal-500 text-white px-6 py-3 rounded-full font-semibold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
//           >
//             Become a Partner
//             <FaLongArrowAltRight className="ml-2" />
//           </motion.button>
//         </motion.div>

//         {/* Right Side: Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50, scale: 0.9 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//           className="relative md:w-1/2 rounded-xl overflow-hidden shadow-lg group"
//         >
//           <motion.div
//             initial={{ scale: 1.1, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="w-full h-full"
//           >
//             <Image
//               src="/images/pic1.jpeg"
//               width={800}
//               height={400}
//               alt="House"
//               className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//           </motion.div>
//           {/* Overlay for a premium effect */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default JoinSection;
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';

const JoinSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start gap-6 bg-white p-8 rounded-xl shadow-lg md:w-1/2"
        >
          {/* Heading and Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Join Our Network
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-teal-600 mt-2">
              Transforming Urban Spaces Together
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md"
          >
            Daba.Cities is a community of researchers, innovators, and industry experts dedicated to sustainable urban transformation. We collaborate across disciplines—architectural design, 
            urban planning, real estate development, and climate resilience—to create future-ready cities. Through strong partnerships with academia, private sector leaders, and policymakers, 
            we drive meaningful urban change.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundImage: 'linear-gradient(to right, #0f74bc, #38b2ac)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-gradient-to-r from-[#0f74bc] to-teal-500 text-white px-6 py-3 rounded-full font-semibold 
            text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
          >
            Become a Partner
            <FaLongArrowAltRight className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative md:w-1/2 rounded-xl overflow-hidden shadow-lg group"
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src="/images/pic1.jpeg"
              width={800}
              height={400}
              alt="Urban Development"
              className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
          {/* Overlay for a premium effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
