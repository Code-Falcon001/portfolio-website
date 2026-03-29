"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Data Visualization",
    icon: <BarChart3 className="w-6 h-6" />,
    skills: [
      { name: "Tableau (Desktop, Server, Cloud, Prep)", level: 95 },
      { name: "Power BI", level: 85 },
      { name: "KPI Dashboards", level: 90 },
    ]
  },
  {
    title: "Data & Databases",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "SQL (Snowflake, PostgreSQL, MySQL)", level: 90 },
      { name: "Python & PySpark", level: 85 },
      { name: "Data Modeling & ETL Pipelines", level: 85 },
    ]
  },
  {
    title: "Intelligence & Automation",
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      { name: "Regrello Automation", level: 90 },
      { name: "Power Automate & VBA", level: 85 },
      { name: "Agentic AI & AI Tools", level: 90 },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "SharePoint & API Integration", level: 85 },
      { name: "Advanced Excel", level: 95 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Technical Arsenal</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">Mastery across modern data stacks, BI platforms, and intelligent automation frameworks to deliver end-to-end analytical solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 cursor-default shadow-lg hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-wide">{category.title}</h3>
              </div>

              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                      <span className="text-gray-500 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + sIdx * 0.15, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
