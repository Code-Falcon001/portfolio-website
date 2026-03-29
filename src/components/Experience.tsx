"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Tableau Developer",
    company: "Flextronics Technologies India Pvt Ltd",
    period: "Apr 2025 - Present",
    points: [
      "Developed interactive Tableau dashboards using LOD expressions, calculated fields, parameters, and filters to track KPIs and business performance",
      "Designed and implemented ETL pipelines using SQL, Python, PySpark, and Snowflake to process and transform large datasets",
      "Automated reporting and workflows using Python, Regrello, VBA, and Power Automate, reducing manual effort by 80–90%",
      "Built scalable data solutions integrating ETL, APIs, dashboards, and workflow automation",
      "Partnered with stakeholders to deliver business intelligence solutions and actionable insights"
    ]
  },
  {
    role: "Procurement Analyst",
    company: "Flextronics Technologies India Pvt Ltd",
    period: "Dec 2021 - Mar 2025",
    points: [
      "Built Tableau dashboards for procurement analytics, supplier performance, and inventory tracking",
      "Performed data extraction, cleaning, and transformation using SQL, Excel, and PySpark",
      "Automated manual processes using Python and VBA, improving efficiency and turnaround time",
      "Handled large datasets ensuring data accuracy and consistency for reporting."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Engineering (Mechanical)",
    institution: "Anantrao Pawar College of Engineering & Research, Pune",
    period: "Pursuing"
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "D.K.T. E's Yashwantrao Chavan Polytechnic, Ichalkaranji",
    period: "2019"
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

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 space-y-12 mb-20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-4 w-5 h-5 bg-black border-2 border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
              
              <div className="glass-card p-8 md:p-10 rounded-[2rem] group hover:scale-[1.02] active:scale-[0.98] hover:border-blue-500/30 transition-all duration-500 hover:shadow-blue-500/10 hover:shadow-2xl">
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

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 mt-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Education</h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={`edu-${idx}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-4 w-5 h-5 bg-black border-2 border-white/40 rounded-full" />
              
              <div className="glass-card p-6 md:p-8 rounded-3xl group hover:scale-[1.02] active:scale-[0.98] hover:border-white/30 transition-all duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{edu.degree}</h3>
                    <div className="text-gray-400 font-medium mt-1">{edu.institution}</div>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/5 bg-white/5 text-sm font-medium text-gray-300 whitespace-nowrap shadow-inner">
                    {edu.period}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
       </div>
    </section>
  );
}
