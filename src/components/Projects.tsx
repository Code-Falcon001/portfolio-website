"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github } from "lucide-react";

const projects = [
  {
    title: "HR Analytics Dashboard",
    description: "A comprehensive Tableau dashboard providing deep insights into employee retention, performance metrics, and headcount forecasting.",
    tools: ["Tableau", "SQL", "Excel"],
    image: "/hr-dashboard.jpg", 
    link: "#",
    github: "#"
  },
  {
    title: "Sales & Revenue Tracker",
    description: "An interactive Power BI solution tracking real-time sales performance across global regions with predictive revenue modeling.",
    tools: ["Power BI", "DAX", "Snowflake"],
    image: "/sales-dashboard.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "Netflix Content Analysis",
    description: "Exploratory data analysis visualizing Netflix's content strategy, genre popularity, and addition trends over the last decade.",
    tools: ["Tableau", "Python", "Pandas"],
    image: "/netflix-analysis.jpg",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">Interactive dashboards and analytical pipelines driving strategic decisions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-[2rem] overflow-hidden group flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative h-60 overflow-hidden bg-gradient-to-br from-white/10 to-transparent border-b border-white/10">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent group-hover:scale-110 transition-transform duration-700" />
                
                <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/30 transition-colors duration-500">
                  <span className="text-6xl font-black italic tracking-tighter opacity-10">{project.title.split(' ')[0]}</span>
                </div>

                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a href={project.github} className="p-2.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-white/20 hover:text-blue-400 transition-colors shadow-lg">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="p-2.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-white/20 hover:text-blue-400 transition-colors shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors tracking-wide">{project.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
