"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Tableau Developer & Solution Architect",
    company: "Flex",
    period: "2023 - Present",
    points: [
      "Designed and deployed 21+ enterprise dashboards using Tableau and Power BI, enabling data-driven decision making for executive leadership.",
      "Led internal training and spearheaded end-to-end deployments using Regrello workflow automation tool, driving major process optimizations.",
      "Leveraged AI prompting to accelerate the development of Python and VBA scripts, achieving a 73% reduction in manual reporting efforts.",
      "Optimized complex SQL queries and ETL pipelines (Snowflake, PostgreSQL), significantly reducing dashboard load times and data latency."
    ]
  },
  {
    role: "Procurement Analyst",
    company: "Flex",
    period: "2020 - 2023",
    points: [
      "Gathered and analyzed procurement data to identify cost-saving opportunities and supply chain efficiencies.",
      "Developed foundational dashboards and automated reporting workflows, leading to an internal promotion to a dedicated Tableau Developer role.",
      "Collaborated with cross-functional supply chain teams to standardize supplier diversity tracking and contract negotiations data."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 px-6">
       <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Professional Experience</h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-4 w-5 h-5 bg-black border-2 border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
              
              <div className="glass-card p-8 md:p-10 rounded-[2rem] group hover:border-blue-500/30 transition-all duration-500 hover:shadow-blue-500/10 hover:shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide">{exp.role}</h3>
                    <div className="text-blue-400 font-medium mt-1">{exp.company}</div>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 whitespace-nowrap shadow-inner">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-gray-400 font-light leading-relaxed flex gap-4">
                      <span className="text-blue-500 mt-1.5 shrink-0 text-xl leading-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
       </div>
    </section>
  );
}
