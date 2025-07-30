import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-end justify-start overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/videotwo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Hero Content with Strong Line */}
      <motion.div
        className="relative z-10 flex items-center gap-4 p-6 md:p-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Strong Vertical Line */}
        <div className="h-32 md:h-40 lg:h-48 w-3 bg-daba-green rounded-full"></div>

        {/* Animated Text */}
        <h1 className="text-white text-4xl md:text-6xl font-century-gothic-bold leading-tight">
          Compact & Antifragile
          <br />
          City Planning
          <br />
          {/* BECOMES REALITY */}
          {/* <br /> */}
          <span className="text-daba-teal">Sustainable Construction</span>
        </h1>
      </motion.div>
    </section>
  );
};

export default HeroSection;