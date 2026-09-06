'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'PT Otten Coffee Indonesia',
    period: 'Apr 2021 - Present',
    roles: [
      {
        title: 'Frontend Web Developer (Full-time)',
        period: 'Jan 2024 – Present',
      },
      {
        title: 'Frontend Web Developer (Contract)',
        period: 'Jan 2022 – Jan 2024',
      },
      {
        title: 'Frontend Web Developer (Internship)',
        period: 'Apr 2021 – Jan 2022',
      },
    ],
    description:
      'Developed and maintained scalable front-end architecture using React. Improved web performance (Core Web Vitals) and implemented responsive UI. Collaborated with designers to ensure pixel-perfect implementation of complex UI features. Developed and validated frontend features using AI-assisted development workflows, including AI code generation, code review, debugging, functional testing, and regression validation.',
    skills: [
      'React',
      'JavaScript',
      'TypeScript',
      'CSS/SCSS',
      'Git',
      'Next.js',
      'Angular',
      'Performance Optimization',
      'AI-assisted development',
    ],
  },
  {
    role: 'Graphic Designer',
    company: 'PT. Sari Makmur Sejahtera',
    period: '2019 - 2020',
    description:
      'Designed marketing materials including logos, brochures, infographics, and social media content. Built and managed corporate websites using WordPress.',
    skills: [
      'Photoshop',
      'Illustrator',
      'After Effects',
      'WordPress',
      'Branding',
    ],
  },
  {
    role: 'Front-End Developer',
    company: '< das / >',
    period: '2020',
    description:
      'Responsible for creating a Content Management System (CMS) interface using ReactJS and Ant Design.',
    skills: ['React', 'Ant Design', 'CMS'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            My journey from crafting visual identities to engineering robust web
            applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-emerald-500/0 group-hover:from-blue-500/5 group-hover:to-emerald-500/5 transition-all duration-500" />

              <div className="md:w-1/4 shrink-0">
                <div className="flex items-center gap-2 text-slate-400 mb-2 font-mono text-sm">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {exp.company}
                </h3>

                {exp.roles ? (
                  <div className="space-y-3">
                    {exp.roles.map((r, i) => (
                      <div
                        key={i}
                        className="relative pl-4 border-l border-white/10"
                      >
                        <div className="absolute w-2 h-2 rounded-full bg-blue-500 -left-[4.5px] top-1.5 ring-4 ring-slate-900/50" />
                        <div className="text-slate-200 font-medium text-sm mb-0.5 leading-tight">
                          {r.title}
                        </div>
                        <div className="text-slate-400 text-xs font-mono">
                          {r.period}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-blue-400">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.role}</span>
                  </div>
                )}
              </div>

              <div className="md:w-3/4">
                <p className="text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-slate-300 border border-white/10 rounded-full"
                    >
                      {skill}
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
