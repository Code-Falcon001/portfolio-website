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
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">About Me</h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
            <p>
              I am a seasoned <strong className="text-white font-medium">Tableau Developer, Solution Architect, and Data Analyst</strong> with over 4 years of experience transforming complex datasets into intuitive, actionable business insights.
            </p>
            <p>
              My expertise spans across Data Modeling, BI Architecture, Procurement Analytics, and Advanced Data Visualization. By building high-performance dashboards and optimizing data workflows, I bridge the gap between raw data and strategic decision-making. I specialize in leveraging generative AI to rapidly develop Python and VBA solutions, alongside leading end-to-end workflow automation projects using platforms like Regrello to deliver strong business impact.
            </p>
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 mt-8">
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
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Opt. via Auto</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">1M+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Rows Analyzed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
