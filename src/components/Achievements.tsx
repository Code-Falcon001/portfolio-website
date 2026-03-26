"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(from, { duration: duration * 1000 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { label: "Automation Improvement", value: 73, suffix: "%" },
  { label: "Dashboards Delivered", value: 21, suffix: "+" },
  { label: "Performance Gain", value: 40, suffix: "%" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Measurable Impact</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass p-10 rounded-[2rem] text-center flex flex-col justify-center gap-4 hover:bg-white/5 transition-colors border border-white/5 hover:border-blue-500/20"
            >
              <h3 className="text-6xl md:text-7xl font-bold pb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
