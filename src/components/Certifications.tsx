"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const certifications = [
  { name: "Tableau Certified Data Analyst", organization: "Tableau", domain: "tableau.com" },
  { name: "Microsoft Power BI Certification", organization: "Microsoft", domain: "microsoft.com" },
  { name: "Microsoft Power Apps Essential Training: The Basics", organization: "LinkedIn Learning", domain: "linkedin.com" },
  { name: "Introduction to Career Skills in Data Analytics", organization: "LinkedIn Learning", domain: "linkedin.com" },
  { name: "PostgreSQL Essential Training", organization: "LinkedIn Learning", domain: "linkedin.com" },
  { name: "CSCMP Supply Chain Foundations Procurement", organization: "LinkedIn Learning", domain: "linkedin.com" },
  { name: "Fundamentals of Sustainable Supply Chains", organization: "LinkedIn Learning", domain: "linkedin.com" },
  { name: "Supply Chain Foundations: Supplier Development & Diversity", organization: "LinkedIn Learning", domain: "linkedin.com" },
  { name: "Purchasing Foundations", organization: "LinkedIn Learning", domain: "linkedin.com" },
  { name: "Strategic Negotiation", organization: "LinkedIn Learning", domain: "linkedin.com" }
];

function CertImage({ domain, organization }: { domain: string, organization: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 overflow-hidden shadow-inner p-2 group-hover:bg-white/10 transition-colors">
      {!error && domain ? (
        <img 
          src={`https://logo.clearbit.com/${domain}`} 
          alt={organization} 
          className="w-full h-full object-contain rounded-md drop-shadow-md"
          onError={() => setError(true)}
        />
      ) : (
        <Award className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" />
      )}
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Certifications & Training</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">Continuous learning to stay at the cutting edge of data and analytics.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="glass p-5 rounded-2xl group hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 flex gap-5 items-center cursor-default bg-gradient-to-br from-white/5 to-transparent"
            >
              <CertImage domain={cert.domain} organization={cert.organization} />
              
              <div className="flex flex-col flex-grow justify-center">
                 <h4 className="text-gray-100 font-semibold leading-snug group-hover:text-blue-400 transition-colors line-clamp-2 text-sm md:text-base pr-2">{cert.name}</h4>
                 <div className="flex items-center gap-2 mt-2.5">
                   <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                   <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-bold truncate max-w-[150px]">{cert.organization}</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
