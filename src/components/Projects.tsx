"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    id: 1,
    title: "App News Portal",
    category: "Web & Mobile",
    image: "https://res.cloudinary.com/tvb96ebe/image/upload/v1787992940/app-newsportal-splash-screen.jpg",
    description: "A comprehensive news portal application featuring real-time updates and an intuitive reading experience.",
    tags: ["Figma", "UI/UX", "Mobile Design"],
    gallery: true,
    galleryImages: [
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787992940/app-newsportal-splash-screen.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787992940/app-newsportal-detailed-1.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787992940/app-newsportal-detailed-2.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787992940/app-newsportal-detailed-3.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787992940/app-newsportal-detailed-4.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787992940/app-newsportal-detailed-5.jpg"
    ]
  },
  {
    id: 2,
    title: "Samase Ankle Web",
    category: "Web & Mobile",
    image: "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993077/samase-ankle-web-app-wordpress-thumbnail.jpg",
    description: "E-commerce platform showcasing products with a clean, responsive layout built on top of WordPress.",
    tags: ["WordPress", "PHP", "CSS", "E-Commerce"],
    gallery: true,
    galleryImages: [
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993077/samase-ankle-web-app-wordpress-thumbnail.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993078/samase-ankle-web-app-wordpress.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993077/samase-ankle-products-web-app-wordpress-detailed.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993078/samase-ankle-wishlist-web-app-wordpress-detailed.jpg",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993077/samase-ankle-account-web-app-wordpress-detailed.jpg"
    ]
  },
  {
    id: 3,
    title: "Gemini Chatbot",
    category: "Web & Mobile",
    link: "https://gemini-chatbot-api-omega.vercel.app/",
    github: "https://github.com/bayurn/gemini-chatbot-api",
    image: "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993022/gemini-chatbot-1.png",
    description: "An AI Chatbot application developed as part of the 'Maju Bareng AI' seminar by Hacktiv8.",
    tags: ["HTML", "CSS", "JavaScript", "Gemini API"],
    gallery: true,
    galleryImages: [
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993022/gemini-chatbot-1.png",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993023/gemini-chatbot-2.png",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993596/Screenshot_2026-08-29_at_15.53.07.png",
      "https://res.cloudinary.com/tvb96ebe/image/upload/v1787993392/Screenshot_2026-08-29_at_15.49.33.png"
    ],
    imagePosition: "object-top"
  }
];

const categories = ["All", "Web & Mobile", "Graphic Design"];

export default function Projects() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedGallery, setSelectedGallery] = useState<{ images: string[], index: number } | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery) {
      setSelectedGallery({
        ...selectedGallery,
        index: (selectedGallery.index + 1) % selectedGallery.images.length
      });
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery) {
      setSelectedGallery({
        ...selectedGallery,
        index: (selectedGallery.index - 1 + selectedGallery.images.length) % selectedGallery.images.length
      });
    }
  };

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.projects.titlePrefix} <span className="text-emerald-500">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto md:mx-0 text-lg mb-8">
            {t.projects.subtitle}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                )}
              >
                {t.projects.categoryLabels[category] || category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card group overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={clsx("object-cover transition-transform duration-700 group-hover:scale-105", (project as any).imagePosition || "object-center")}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {(project as any).gallery && (
                      <button
                        onClick={() => setSelectedGallery({ images: (project as any).galleryImages, index: 0 })}
                        className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform cursor-pointer"
                        title="View Gallery"
                      >
                        <ImageIcon size={20} />
                      </button>
                    )}
                    {(project as any).link && (
                      <a href={(project as any).link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {(project as any).github && (
                      <a href={(project as any).github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur text-white border border-white/20 rounded-full hover:bg-white/20 transition-all">
                        <GithubIcon size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-semibold text-emerald-400 mb-2 tracking-wider uppercase">
                    {t.projects.categoryLabels[project.category] || project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 flex-1">
                    {t.projects.descriptions[project.id] || project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-slate-300 bg-white/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Gallery Lightbox Modal */}
        <AnimatePresence>
          {selectedGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGallery(null)}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            >
              <button
                onClick={() => setSelectedGallery(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
              >
                <X size={24} />
              </button>

              {selectedGallery.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 md:left-12 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 md:right-12 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              <motion.div
                key={selectedGallery.index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedGallery.images[selectedGallery.index]}
                  alt="Gallery preview"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </motion.div>

              {/* Image Counter */}
              {selectedGallery.images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium">
                  {selectedGallery.index + 1} / {selectedGallery.images.length}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
