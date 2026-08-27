"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TelegramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
  </svg>
);

export default function AboutContact() {
  return (
    <section id="about" className="relative bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="prose prose-invert max-w-none text-slate-300">
              <p className="text-lg leading-relaxed mb-6">
                Hi, I am Bayu Rizky Nurseto. I blend the analytical thinking of a developer
                with the creative eye of a designer.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Currently pursuing a degree in Information Systems at Universitas Terbuka,
                I hold a background in Multimedia which sparked my passion for both coding and design.
                With over a year of experience in graphic design and more than a year specializing
                as a Front-End Web Developer, I thrive at the intersection of aesthetics and functionality.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                I am deeply interested in building performant web applications using React and Next.js,
                and I am currently expanding my skill set into mobile development with React Native Expo.
                I believe that a great product is not just about clean code, but also about a seamless,
                intuitive user experience.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/bayurn" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors" title="GitHub">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bayu-rizky-nurseto" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors" title="LinkedIn">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://www.instagram.com/bayu_rizkyn/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors" title="Instagram">
                <InstagramIcon size={24} />
              </a>
              <a href="https://t.me/bayurizky" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors" title="Telegram">
                <TelegramIcon size={24} />
              </a>
              <a href="https://wa.me/628156297253" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-emerald-400 transition-colors" title="WhatsApp">
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Let's connect</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-xl text-blue-400 border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Jalan Setra Dago Utara VI Blok Kramat RT.008/012<br />
                    Antapani Wetan, Kota Bandung
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-xl text-emerald-400 border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:bayurizkynurseto19@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                    bayurizkynurseto19@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-xl text-purple-400 border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call / WhatsApp</h4>
                  <a href="https://wa.me/628156297253" target="_blank" rel="noreferrer" className="text-slate-400 text-sm hover:text-white transition-colors">
                    +62 815 6297 253
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/10 pt-8 pb-12 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Bayu Rizky Nurseto. All rights reserved.</p>
        <p className="mt-2">Designed and built with Next.js & Tailwind CSS.</p>
      </footer>
    </section>
  );
}
