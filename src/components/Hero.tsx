"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden z-10">
      <div className="max-w-4xl mx-auto text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 glass text-sm font-medium tracking-wide text-gray-300 shadow-xl"
        >
          Transforming Data into Actionable Insights
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m <span className="text-gradient">Pranit Patil</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
        >
          Tableau Developer | Solution Architect | Data Analyst
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="flex items-center gap-2 glass px-8 py-4 rounded-full font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 border border-white/20"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
