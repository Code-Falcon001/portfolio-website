"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github } from "lucide-react";

const projects = [
  {
    title: "Sales Dashboard",
    description: "An interactive Power BI solution tracking real-time sales performance, profit margins, and demographic trends with comprehensive quarter-by-quarter breakdowns.",
    tools: ["Power BI", "DAX", "Data Modeling"],
    image: "/sales-dashboard.png",
    link: "https://github.com/Code-Falcon001/Sales-Dashboard---Power-BI",
    github: "https://github.com/Code-Falcon001/Sales-Dashboard---Power-BI"
  },
  {
    title: "HR Analytics Dashboard",
    description: "A comprehensive Tableau dashboard providing deep insights into employee retention, performance metrics, demographics, and headcount forecasting.",
    tools: ["Tableau", "HR Analytics", "Data Visualization"],
    image: "/hr-dashboard.png",
    link: "https://public.tableau.com/views/HRAnalyticsMainRef1/HRSummary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    github: "#"
  },
  {
    title: "Netflix Content Analysis",
    description: "Exploratory data analysis visualizing Netflix's content strategy, genre popularity, and addition trends over the last decade.",
    tools: ["Tableau", "Data Analysis", "Dashboarding"],
    image: "/netflix-dashboard.png",
    link: "https://public.tableau.com/views/NetflixAnalysis_17365242806110/Netflix?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
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
              className="glass-card rounded-[2rem] overflow-hidden group flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 border border-white/5"
            >
              <div className="relative h-56 overflow-hidden bg-black/60 border-b border-white/10 flex items-center justify-center">
                
                {/* Dynamically loads image from public folder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700 -z-10" />

                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/80 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-500 transition-colors shadow-lg">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/80 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-500 transition-colors shadow-lg">
                       <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
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
