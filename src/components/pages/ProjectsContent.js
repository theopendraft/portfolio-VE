"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";
import { useTheme } from "@/contexts/ThemeContext";
import { useCursor } from "@/hooks/useCursor";
import { featuredVideos } from "@/data/projects";

const FILTERS = ["All", "Commercials", "UGC Ads", "Documentary", "Social Media", "Motion Graphics"];

const WORK_OVERRIDES = {
  1: {
    badge: "Commercial",
    headline: "AI-Assisted UGC Campaign",
    summary:
      "Produced a high-retention AI-assisted UGC campaign combining motion graphics, AI-generated visuals, and fast-paced editing optimized for social platforms.",
    filters: ["Commercials", "UGC Ads", "Social Media", "Motion Graphics"],
  },
  2: {
    badge: "Documentary",
    headline: "Documentary-Style Brand Story",
    summary:
      "Documentary-style edit focused on emotional storytelling, cinematic pacing, and immersive sound design.",
    filters: ["Documentary", "Social Media"],
  },
  3: {
    badge: "Social",
    headline: "Performance Social Campaign",
    summary:
      "Fast-cut campaign built for hooks, clarity, and retention, shaped around platform-native rhythm and conversion-minded storytelling.",
    filters: ["Commercials", "UGC Ads", "Social Media"],
  },
  4: {
    badge: "Motion Graphics",
    headline: "Cinematic Motion Piece",
    summary:
      "Motion-heavy branded piece combining compositing, typography, and AI-assisted workflow design.",
    filters: ["Documentary", "Motion Graphics"],
  },
};

const WORK_ITEMS = featuredVideos.map((project) => ({
  ...project,
  ...WORK_OVERRIDES[project.id],
}));

const SHORT_FORM_PLACEHOLDERS = [
  {
    id: "sf-1",
    brand: "Brand / Client",
    title: "Short-Form Hook",
    category: "UGC Ad",
    badge: "Placeholder",
    duration: "0:18",
    summary: "Swap this card with a real short-form piece later.",
    tools: ["Premiere Pro", "After Effects", "CapCut"],
  },
  {
    id: "sf-2",
    brand: "Personal Project",
    title: "Motion Teaser",
    category: "Motion Graphics",
    badge: "Placeholder",
    duration: "0:24",
    summary: "Use this slot for a motion-led edit, teaser, or social cutdown.",
    tools: ["Veo", "Kling", "ElevenLabs"],
  },
  {
    id: "sf-3",
    brand: "Client Name",
    title: "Social Campaign Cut",
    category: "Social Media",
    badge: "Placeholder",
    duration: "0:30",
    summary: "Replace this with a campaign clip or branded vertical video.",
    tools: ["ChatGPT", "Premiere Pro", "Photoshop"],
  },
  {
    id: "sf-4",
    brand: "Brand / Client",
    title: "Documentary Snippet",
    category: "Documentary",
    badge: "Placeholder",
    duration: "0:42",
    summary: "This slot works well for a documentary excerpt or behind-the-scenes edit.",
    tools: ["DaVinci Resolve", "After Effects", "Photoshop"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProjectsContent() {
  const { theme } = useTheme();
  const { setCursorType, resetCursor } = useCursor();
  const [activeFilter, setActiveFilter] = useState("All");

  const isDark = theme === "dark";

  const filtered =
    activeFilter === "All"
      ? WORK_ITEMS
      : WORK_ITEMS.filter((work) => work.filters?.includes(activeFilter));

  const accentColor = isDark ? "#C4F047" : "#3b82f6";

  return (
    <main
      className={`relative min-h-screen overflow-hidden pt-38 pb-24 transition-colors duration-500 ${
        isDark ? "bg-transparent" : "bg-gray-50"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -left-32 top-8 h-80 w-80 rounded-full blur-3xl opacity-25 ${
            isDark ? "bg-[#C4F047]" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-zinc-500" : "bg-orange-200"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-8">
        <motion.div {...fadeUp(0.08)} className="mb-12 sm:mb-16">
          <p
            className={`text-xs uppercase tracking-[0.3em] font-medium mb-3 ${
              isDark ? "text-zinc-500" : "text-gray-400"
            }`}
          >
            Selected Work
          </p>
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tight whitespace-pre-line ${
              isDark ? "text-white" : "text-gray-950"
            }`}
            style={{ fontFamily: "'Haffer', sans-serif", letterSpacing: "-0.04em" }}
          >
            SELECTED
            {"\n"}
            WORK.
          </h1>
          <p
            className={`mt-5 max-w-2xl text-base sm:text-lg leading-relaxed ${
              isDark ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            A selection of AI-assisted commercials, branded campaigns, documentaries, motion graphics, and creative experiments.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.16)} className="mb-12 sm:mb-14 flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={resetCursor}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-none ${
                  isActive
                    ? isDark
                      ? "border-[#C4F047] bg-[#C4F047] text-black"
                      : "border-blue-500 bg-blue-500 text-white"
                    : isDark
                    ? "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-600 hover:text-white"
                    : "border-gray-200 bg-white/70 text-gray-500 hover:border-gray-400 hover:text-gray-900"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeFilter}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {filtered.map((work, index) => (
              <WorkCard
                key={work.id}
                work={work}
                index={index}
                isDark={isDark}
                accentColor={accentColor}
                setCursorType={setCursorType}
                resetCursor={resetCursor}
              />
            ))}
          </motion.section>
        </AnimatePresence>

        <motion.section {...fadeUp(0.34)} className="mt-20 sm:mt-24">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`text-xs uppercase tracking-[0.3em] font-medium mb-3 ${isDark ? "text-zinc-500" : "text-gray-400"}`}>
                Short-Form Content
              </p>
              <h2
                className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-gray-950"
                }`}
                style={{ fontFamily: "'Haffer', sans-serif", letterSpacing: "-0.03em" }}
              >
                Placeholders for future clips
              </h2>
            </div>
            <p className={`max-w-xl text-sm sm:text-base leading-relaxed ${isDark ? "text-zinc-500" : "text-gray-500"}`}>
              Keep or delete these cards as needed. They are intentionally easy to replace with your own short-form work.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {SHORT_FORM_PLACEHOLDERS.map((item) => (
              <div
                key={item.id}
                className={`rounded-[1.5rem] border p-5 transition-all duration-300 ${
                  isDark
                    ? "border-zinc-800 bg-zinc-950/50"
                    : "border-gray-200 bg-white/80"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] ${
                      isDark
                        ? "border-[#C4F047]/20 bg-[#C4F047]/10 text-[#C4F047]"
                        : "border-blue-100 bg-blue-50 text-blue-600"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${isDark ? "text-zinc-600" : "text-gray-400"}`}>
                    {item.duration}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${isDark ? "text-zinc-500" : "text-gray-400"}`}>
                    {item.brand}
                  </p>
                  <h3 className={`text-xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-950"}`} style={{ fontFamily: "'Haffer', sans-serif", letterSpacing: "-0.03em" }}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-gray-600"}`}>
                    {item.summary}
                  </p>
                  <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${isDark ? "text-zinc-600" : "text-gray-400"}`}>
                    {item.category}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                        isDark
                          ? "border-zinc-800 bg-zinc-900/80 text-zinc-300"
                          : "border-gray-200 bg-gray-50 text-gray-700"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div {...fadeUp(0.5)} className="mt-16 sm:mt-20 text-center">
          <p className={`text-sm mb-4 ${isDark ? "text-zinc-500" : "text-gray-500"}`}>
            Want to see more?
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-gray-950"
            }`}
            style={{ fontFamily: "'Haffer', sans-serif", letterSpacing: "-0.03em" }}
          >
            Let&apos;s create something worth watching.
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${isDark ? "text-zinc-500" : "text-gray-500"}`}>
            More campaigns are available on request.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 rounded-full border-2 px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-none ${
                  isDark
                    ? "border-[#C4F047] text-[#C4F047] hover:bg-[#C4F047] hover:text-black"
                    : "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                }`}
                onMouseEnter={() => setCursorType("active")}
                onMouseLeave={resetCursor}
              >
                Let&apos;s Talk
                <ArrowUpRight size={14} />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function WorkCard({ work, index, isDark, accentColor, setCursorType, resetCursor }) {
  const backgroundClass = isDark
    ? "border-zinc-800 bg-zinc-950/55 hover:border-[#C4F047]/40"
    : "border-gray-200 bg-white/85 hover:border-blue-400/50 hover:shadow-[0_24px_80px_rgba(15,23,42,0.08)]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group overflow-hidden rounded-[1.75rem] border transition-all duration-300 ${backgroundClass}`}
    >
      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <a
          href={work.watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative min-h-[280px] overflow-hidden bg-zinc-950 focus:outline-none"
          aria-label={`Watch ${work.title}`}
          onMouseEnter={() => setCursorType("active")}
          onMouseLeave={resetCursor}
        >
          <Image
            src={work.previewImage || "/project/y1.png"}
            alt={work.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-black/75 via-black/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
              style={{ boxShadow: `0 0 0 1px ${accentColor}22, 0 20px 60px rgba(0,0,0,0.35)` }}
            >
              <Play size={26} className="translate-x-0.5" fill="currentColor" />
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5 text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              {work.duration}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] backdrop-blur-sm">
              {work.badge}
            </span>
          </div>
        </a>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] ${
                  isDark
                    ? "border-[#C4F047]/20 bg-[#C4F047]/10 text-[#C4F047]"
                    : "border-blue-100 bg-blue-50 text-blue-600"
                }`}
              >
                {work.badge}
              </span>
              <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${isDark ? "text-zinc-600" : "text-gray-400"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${isDark ? "text-zinc-500" : "text-gray-400"}`}>
                Client
              </p>
              <p className={`mt-2 text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-950"}`} style={{ fontFamily: "'Haffer', sans-serif", letterSpacing: "-0.03em" }}>
                {work.brand}
              </p>
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-bold leading-tight tracking-tight ${
                isDark ? "text-white" : "text-gray-950"
              }`}
              style={{ fontFamily: "'Haffer', sans-serif", letterSpacing: "-0.03em" }}
            >
              {work.headline}
            </h2>

            <p className={`max-w-2xl text-sm sm:text-base leading-relaxed ${isDark ? "text-zinc-400" : "text-gray-600"}`}>
              {work.summary}
            </p>

            {work.results?.length ? (
              <div className="space-y-3 pt-1">
                <div className={`text-xs uppercase tracking-[0.25em] font-semibold ${isDark ? "text-zinc-500" : "text-gray-400"}`}>
                  Impact
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.results.map((result) => (
                    <span
                      key={result}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                        isDark
                          ? "border-[#C4F047]/15 bg-[#C4F047]/10 text-[#C4F047]"
                          : "border-blue-100 bg-blue-50 text-blue-600"
                      }`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {work.tools?.length ? (
              <div className="space-y-3 pt-1">
                <div className={`text-xs uppercase tracking-[0.25em] font-semibold ${isDark ? "text-zinc-500" : "text-gray-400"}`}>
                  Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                        isDark
                          ? "border-zinc-800 bg-zinc-900/80 text-zinc-300"
                          : "border-gray-200 bg-gray-50 text-gray-700"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={work.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-none ${
                isDark
                  ? "border-[#C4F047] text-[#C4F047] hover:bg-[#C4F047] hover:text-black"
                  : "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
              }`}
              onMouseEnter={() => setCursorType("active")}
              onMouseLeave={resetCursor}
            >
              Watch
              <ArrowUpRight size={14} />
            </a>

            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-none ${
                isDark
                  ? "border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white"
                  : "border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-950"
              }`}
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={resetCursor}
            >
              Request Breakdown
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
