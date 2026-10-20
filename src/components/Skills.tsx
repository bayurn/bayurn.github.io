'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, PenTool, GitBranch } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const categoryIcons = [
  <Code2 key="code" size={24} className="text-blue-400" />,
  <Smartphone key="mobile" size={24} className="text-emerald-400" />,
  <PenTool key="design" size={24} className="text-purple-400" />,
  <GitBranch key="tools" size={24} className="text-amber-400" />,
];

export default function Skills() {
  const { t } = useLanguage();

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
            {t.skills.titlePrefix}{' '}
            <span className="text-gradient">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-slate-400 text-lg">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.skills.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors">
                  {categoryIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-slate-300"
                  >
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
