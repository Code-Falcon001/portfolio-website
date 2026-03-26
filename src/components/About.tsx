"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-14 rounded-[2rem]"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white text-center md:text-left">About Me</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
              <img src="/profile.png" alt="Pranit Patil" className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10 shadow-2xl" />
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light text-center md:text-left">
              <p>
                I am a seasoned <strong className="text-white font-medium">Tableau Developer, Solution Architect, and Data Analyst</strong> with over 4 years of experience transforming complex datasets into intuitive, actionable business insights.
              </p>
              <p>
                My expertise spans across Data Modeling, BI Architecture, Procurement Analytics, and Advanced Data Visualization. By building high-performance dashboards and optimizing data workflows, I bridge the gap between raw data and strategic decision-making. I specialize in leveraging generative AI to rapidly develop Python and VBA solutions, alongside leading end-to-end workflow automation projects using platforms like Regrello to deliver strong business impact.
              </p>
            </div>
          </div>

          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 mt-10 text-center md:text-left">
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">4+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">21+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Dashboards</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gradient mb-2">73%</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tasks Automated</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">1M+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Rows Analyzed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
