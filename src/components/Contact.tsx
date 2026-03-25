"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Link as Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Let&apos;s Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">Open to new opportunities and exciting data challenges.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-8 md:p-12 rounded-[2rem] h-full flex flex-col justify-center space-y-8">
              <a href="mailto:pranitp2001@gmail.com" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-500/20 transition-colors shadow-inner border border-white/5">
                  <Mail className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                  <p className="text-lg text-white font-medium group-hover:text-blue-400 transition-colors">pranitp2001@gmail.com</p>
                </div>
              </a>

              <a href="tel:+9170558410526" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-500/20 transition-colors shadow-inner border border-white/5">
                  <Phone className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                  <p className="text-lg text-white font-medium group-hover:text-blue-400 transition-colors">+91 70558 410526</p>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-500/20 transition-colors shadow-inner border border-white/5">
                  <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">LinkedIn</p>
                  <p className="text-lg text-white font-medium group-hover:text-blue-400 transition-colors">linkedin.com/in/pranitpatil</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-card p-8 md:p-12 rounded-[2rem] space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-light"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors active:scale-[0.98] mt-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
