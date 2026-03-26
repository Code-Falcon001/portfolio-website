"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github, BarChart2 } from "lucide-react";

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
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light"
        >
          Tableau Developer | Solution Architect | Data Analyst
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center gap-6 mb-10"
        >
           <a href="https://www.linkedin.com/in/pranit-patil-372550170" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all" aria-label="LinkedIn">
             <Linkedin className="w-7 h-7" />
           </a>
           <a href="https://github.com/Code-Falcon001" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all" aria-label="GitHub">
             <Github className="w-7 h-7" />
           </a>
           <a href="https://public.tableau.com/app/profile/pranit.patil1017/vizzes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all" aria-label="Tableau Public">
             <BarChart2 className="w-7 h-7" />
           </a>
        </motion.div>

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
