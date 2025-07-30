import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowDown } from "react-icons/fa6";

const ReportsSection: React.FC = () => {
  const reports = [
    {
      image: "/images/Tanger.jpeg",
      title: "Corporate Strategy",
      subtitle: "Our roadmap for 2020-2025",
      url: "#",
    },
    {
      image: "/images/MoulayDriss.jpeg",
      title: "Impact Report",
      subtitle: "Discover our latest achievements",
      url: "#",
    },
    {
      image: "/images/DabaCities.png",
      title: "PCR Summary",
      subtitle: "Key insights from Phase 2B of the CLIFF Programme",
      url: "#",
    },
  ];

  return (
    <section className="bg-daba-bg-teal py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden group"
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
              <Image
                src={report.image}
                width={500}
                height={350}
                alt={report.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col items-start gap-3">
              <h3 className="text-xl font-bold text-gray-900">
                {report.title}
              </h3>
              <a
                href={report.url}
                className="flex items-center gap-2 text-daba-teal font-medium hover:text-daba-coral transition-colors"
              >
                <FaArrowDown className="text-daba-teal" />
                <span className="text-base text-gray-700">
                  {report.subtitle}
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReportsSection;