"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "Tableau Certified Data Analyst Cert Prep", organization: "Certificate of Completion" },
  { name: "Microsoft Power Apps Essential Training: The Basics", organization: "Certificate of Completion" },
  { name: "Introduction to Career Skills in Data Analytics", organization: "Certificate of Completion" },
  { name: "PostgreSQL Essential Training", organization: "Certificate of Completion" },
  { name: "CSCMP Supply Chain Foundations Procurement", organization: "Certificate of Completion" },
  { name: "Fundamentals of Sustainable Supply Chains", organization: "Certificate of Completion" },
  { name: "Supply Chain Foundations: Supplier Development & Diversity", organization: "Certificate of Completion" },
  { name: "Purchasing Foundations", organization: "Certificate of Completion" },
  { name: "Strategic Negotiation", organization: "Certificate of Completion" }
];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card px-6 py-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-all duration-300 h-full"
            >
              <Award className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-white leading-tight mb-2">{cert.name}</h4>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-sm font-medium">{cert.organization}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
