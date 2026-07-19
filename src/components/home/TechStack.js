"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Tech Stack section
 * Shows all technologies grouped by category with brand-color indicators.
 *
 * TO ADD MORE TOOLS: append items to the relevant category in `techCategories`.
 * TO ADD A NEW CATEGORY: push a new { label, items } object to `techCategories`.
 */

const techCategories = [
  {
    label: "Editing",
    items: [
      { name: "Adobe Premiere Pro", dot: "#9999FF" },
      { name: "DaVinci Resolve", dot: "#FF6B35" },
      { name: "CapCut", dot: "#111111" },
    ],
  },
  {
    label: "Motion Design",
    items: [
      { name: "After Effects", dot: "#9999FF" },
      { name: "Photoshop", dot: "#31A8FF" },
      { name: "Illustrator", dot: "#FF9A00" },
      { name: "Blender", dot: "#F5792A" },
      { name: "Cinema 4D", dot: "#011A6A" },
    ],
  },
  {
    label: "AI Production",
    items: [
      { name: "ChatGPT", dot: "#10A37F" },
      { name: "Claude", dot: "#D97706" },
      { name: "Gemini", dot: "#4285F4" },
      { name: "Veo", dot: "#34A853" },
      { name: "Kling", dot: "#7C3AED" },
      { name: "Google Flow", dot: "#4285F4" },
      { name: "Midjourney", dot: "#000000" },
      { name: "Magnific", dot: "#9333EA" },
      { name: "ElevenLabs", dot: "#111111" },
      { name: "HeyGen", dot: "#2563EB" },
    ],
  },
  {
    label: "Post Production",
    items: [
      { name: "Color Grading", dot: "#F59E0B" },
      { name: "Lumetri", dot: "#FBBF24" },
      { name: "Adobe Audition", dot: "#8B5CF6" },
      { name: "Sound Design", dot: "#06B6D4" },
      { name: "Proxy Workflow", dot: "#6B7280" },
      { name: "Media Management", dot: "#10B981" },
    ],
  },
  {
    label: "Creative Strategy",
    items: [
      { name: "UGC Ads", dot: "#EF4444" },
      { name: "Brand Storytelling", dot: "#F97316" },
      { name: "Performance Marketing", dot: "#3B82F6" },
      { name: "Audience Retention", dot: "#8B5CF6" },
      { name: "Hooks", dot: "#22C55E" },
      { name: "Content Strategy", dot: "#F59E0B" },
    ],
  },
  {
    label: "Automation",
    items: [
      { name: "Remotion", dot: "#7C3AED" },
      { name: "Node.js", dot: "#339933" },
      { name: "n8n", dot: "#EA4B71" },
      { name: "Prompt Engineering", dot: "#10A37F" },
      { name: "Workflow Design", dot: "#2563EB" },
    ],
  },
];

export default function TechStack() {
  const { theme } = useTheme();

  const titleStyle = {
    fontFamily: "'Haffer', sans-serif",
    lineHeight: "100%",
    letterSpacing: "-0.03em",
  };

  return (
    <section
      className={`relative px-6 sm:px-10 lg:px-16 py-20 lg:py-28 transition-colors duration-500 ${
        theme === "dark" ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-xs uppercase tracking-[0.25em] font-medium mb-3 ${
                theme === "dark" ? "text-zinc-500" : "text-gray-400"
              }`}
            >
              TOOLKIT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`text-5xl lg:text-6xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={titleStyle}
            >
              Creative Toolkit
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-sm max-w-xs lg:text-right ${
              theme === "dark" ? "text-zinc-500" : "text-gray-400"
            }`}
          >
            From editing and motion graphics to AI generation and creative strategy, these are the tools behind every project.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: catIndex * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col sm:flex-row sm:items-start gap-5 pb-10 ${
                catIndex < techCategories.length - 1
                  ? theme === "dark"
                    ? "border-b border-zinc-800/60"
                    : "border-b border-gray-100"
                  : ""
              }`}
            >
              {/* Category label */}
              <div className="sm:w-48 shrink-0">
                <span
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    theme === "dark" ? "text-zinc-600" : "text-gray-400"
                  }`}
                >
                  {category.label}
                </span>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    transition={{
                      default: { duration: 0.3, delay: catIndex * 0.04 + techIndex * 0.03 },
                      y: { type: "spring", stiffness: 400, damping: 20 },
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium cursor-default select-none transition-colors duration-200 ${
                      theme === "dark"
                        ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {/* Brand color dot */}
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: tech.dot }}
                    />
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
