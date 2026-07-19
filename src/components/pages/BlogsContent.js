"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import MagneticButton from "@/components/shared/MagneticButton";
import { useCursor } from "@/hooks/useCursor";
import { Sparkles, ArrowUpRight } from "lucide-react";

const TOPICS = [
  "AI Video Workflows",
  "Motion Graphics",
  "Creative Strategy",
  "Google Veo & Flow",
  "Storytelling",
  "Behind the Edit",
];

export default function BlogsContent() {
  const { theme } = useTheme();
  const { setCursorType, resetCursor } = useCursor();
  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-500 ${
        isDark ? "bg-transparent" : "bg-gray-50"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-xl"
      >
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 ${
            isDark ? "bg-zinc-800" : "bg-gray-200"
          }`}
        >
          <Sparkles
            size={28}
            className={isDark ? "text-[#C4F047]" : "text-blue-500"}
          />
        </div>

        {/* Label */}
        <p
          className={`text-xs uppercase tracking-[0.3em] font-medium mb-4 ${
            isDark ? "text-zinc-500" : "text-gray-400"
          }`}
        >
          Insights
        </p>

        {/* Heading */}
        <h1
          className={`text-5xl sm:text-6xl font-bold leading-none tracking-tight mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "'Haffer', sans-serif", letterSpacing: "-0.03em" }}
        >
          INSIGHTS
        </h1>

        <div
          className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] mb-6 ${
            isDark
              ? "border-[#C4F047]/20 bg-[#C4F047]/10 text-[#C4F047]"
              : "border-blue-100 bg-blue-50 text-blue-600"
          }`}
        >
          Coming Soon
        </div>

        {/* Sub */}
        <p
          className={`text-base leading-relaxed max-w-lg mx-auto ${
            isDark ? "text-zinc-400" : "text-gray-600"
          }`}
        >
          Sharing ideas on AI-assisted video editing, storytelling, motion graphics, creative strategy, content marketing, and the future of visual storytelling.
        </p>

        <div className="mt-8 mb-10">
          <p
            className={`text-xs uppercase tracking-[0.3em] font-medium mb-4 ${
              isDark ? "text-zinc-500" : "text-gray-400"
            }`}
          >
            Upcoming Topics
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TOPICS.map((topic) => (
              <span
                key={topic}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                  isDark
                    ? "border-zinc-800 bg-zinc-900/60 text-zinc-300"
                    : "border-gray-200 bg-white text-gray-700"
                }`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Accent bar */}
        <div
          className={`h-1 w-12 rounded-full mx-auto mb-10 ${
            isDark ? "bg-[#C4F047]" : "bg-blue-500"
          }`}
        />

        {/* CTA back to work */}
        <MagneticButton>
          <a
            href="/projects"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 cursor-none ${
              isDark
                ? "border-zinc-700 text-white hover:border-[#C4F047] hover:text-[#C4F047]"
                : "border-gray-300 text-gray-800 hover:border-blue-500 hover:text-blue-500"
            }`}
            onMouseEnter={() => setCursorType("active")}
            onMouseLeave={resetCursor}
          >
            View My Work
            <ArrowUpRight size={14} />
          </a>
        </MagneticButton>
      </motion.div>
    </main>
  );
}
