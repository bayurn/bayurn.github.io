"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  PenTool, 
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 size={24} className="text-blue-400" />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "HTML5/CSS3"],
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone size={24} className="text-emerald-400" />,
    skills: ["React Native", "Expo", "Mobile UI Patterns", "Cross-Platform Optimization"],
  },
  {
    title: "UI/UX & Graphic Design",
    icon: <PenTool size={24} className="text-purple-400" />,
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Tools & Ecosystem",
    icon: <GitBranch size={24} className="text-amber-400" />,
    skills: ["Git", "GitHub", "WordPress (CMS)", "RESTful APIs", "Vite", "NPM/Yarn"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A comprehensive overview of the tools, frameworks, and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-blue-400 transition-colors" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
