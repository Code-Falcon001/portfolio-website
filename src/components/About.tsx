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
            <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 group hover:scale-[1.05] active:scale-[0.95] transition-transform duration-500 cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
              <img src="/profile.png" alt="Pranit Patil" className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10 shadow-2xl" />
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light text-center md:text-left">
              <p>
                I am a seasoned <strong className="text-white font-medium">Data Analyst & Tableau Developer</strong> with over 4.2+ years of experience in Business Intelligence, Data Visualization, and Workflow Automation.
              </p>
              <p>
                My expertise spans across ETL pipeline development, data transformation, and KPI dashboards. By building high-performance solutions using SQL, Python, PySpark, and Snowflake, I bridge the gap between raw data and strategic decision-making. I specialize in leveraging Regrello, APIs, and AI tools to automate workflows and deliver scalable, data-driven solutions.
              </p>
            </div>
          </div>

          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 mt-10 text-center md:text-left">
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">4.2+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">40%</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Efficiency Gain</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gradient mb-2">1M+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Records Processed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">End-to-End</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Data Pipelines</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
