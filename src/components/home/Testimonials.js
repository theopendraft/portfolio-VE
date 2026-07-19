"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Crown, Globe2, Megaphone, Sparkles, UsersRound, Workflow } from "lucide-react";
import { useCursor } from "@/hooks/useCursor";
import { useTheme } from "@/contexts/ThemeContext";
import { communityCards, communityStats } from "@/data/testimonials";

// Defined outside Testimonials so React never re-mounts it on cursor/state changes
function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.toString().replace(/\D/g, "")) || 0;
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toString() + suffix);
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Testimonials() {
  const { setCursorType, resetCursor } = useCursor();
  const { theme } = useTheme();

  const iconMap = {
    Crown,
    Globe2,
    Workflow,
    Sparkles,
    UsersRound,
    Megaphone,
  };

  const titleStyle = {
    fontFamily: "'Haffer', sans-serif",
    lineHeight: "100%",
    letterSpacing: "-0.03em",
  };

  return (
    <section
      className={`relative px-6 sm:px-10 py-16 sm:py-24 lg:py-32 transition-colors duration-500 ${
        theme === "dark" ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            style={titleStyle}
          >
            Beyond The Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Building communities, sharing knowledge, and contributing beyond client work.
          </motion.p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-2xl border px-5 py-4 text-center ${
                theme === "dark"
                  ? "bg-zinc-900/50 border-zinc-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div
                className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                style={titleStyle}
              >
                <AnimatedCounter value={stat.value} suffix={stat.value.toString().replace(/[0-9]/g, "")} />
              </div>
              <div
                className={`text-[11px] sm:text-xs uppercase tracking-[0.22em] ${
                  theme === "dark" ? "text-zinc-500" : "text-gray-500"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {communityCards.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isWhiteAccentCard = index === 1;
            const isGreenAccentCard = index === 4;
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={resetCursor}
            >
                <div
                  className={`group h-full p-8 rounded-2xl border transition-colors duration-300 flex flex-col gap-5 ${
                    theme === "dark"
                      ? isWhiteAccentCard
                        ? "bg-white border-zinc-200 hover:border-zinc-300"
                        : isGreenAccentCard
                          ? "bg-[#C4F047] border-[#C4F047] hover:border-[#a6c93b]"
                          : "bg-zinc-900/70 border-zinc-800 hover:border-zinc-600"
                      : isWhiteAccentCard
                        ? "bg-white border-gray-200 hover:border-gray-300"
                        : isGreenAccentCard
                          ? "bg-[#C4F047] border-[#C4F047] hover:border-[#a6c93b]"
                          : "bg-white border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div
                    className="flex items-start justify-between gap-4"
                  >
                    <span
                      className={`self-start text-xs font-bold uppercase tracking-[0.22em] px-3 py-1 rounded-full ${
                        theme === "dark"
                          ? isWhiteAccentCard
                            ? "bg-zinc-100 text-zinc-700"
                            : isGreenAccentCard
                              ? "bg-black/10 text-black"
                              : "bg-[#C4F047]/10 text-[#C4F047]"
                          : isWhiteAccentCard
                            ? "bg-zinc-100 text-zinc-700"
                            : isGreenAccentCard
                              ? "bg-black/10 text-black"
                              : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {item.badge}
                    </span>

                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        theme === "dark"
                          ? isWhiteAccentCard
                            ? "bg-zinc-100 text-zinc-700 group-hover:bg-zinc-200 group-hover:text-zinc-900"
                            : isGreenAccentCard
                              ? "bg-black/10 text-black group-hover:bg-black/20 group-hover:text-black"
                              : "bg-zinc-800 text-zinc-300 group-hover:bg-[#C4F047]/10 group-hover:text-[#C4F047]"
                          : isWhiteAccentCard
                            ? "bg-zinc-100 text-zinc-700 group-hover:bg-zinc-200 group-hover:text-zinc-900"
                            : isGreenAccentCard
                              ? "bg-black/10 text-black group-hover:bg-black/20 group-hover:text-black"
                              : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div
                    className={`text-xl font-bold leading-snug whitespace-pre-line ${
                      theme === "dark"
                        ? isWhiteAccentCard
                          ? "text-zinc-900"
                          : isGreenAccentCard
                            ? "text-black"
                            : "text-white"
                        : isWhiteAccentCard
                          ? "text-gray-900"
                          : isGreenAccentCard
                            ? "text-black"
                            : "text-gray-900"
                    }`}
                    style={titleStyle}
                  >
                    {item.title}
                  </div>

                  <p
                    className={`text-sm leading-relaxed grow ${
                      theme === "dark"
                        ? isWhiteAccentCard || isGreenAccentCard
                          ? "text-zinc-700"
                          : "text-zinc-400"
                        : isWhiteAccentCard || isGreenAccentCard
                          ? "text-gray-700"
                          : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div
                    className={`pt-4 border-t text-sm uppercase tracking-[0.2em] ${
                      theme === "dark"
                        ? isWhiteAccentCard || isGreenAccentCard
                          ? "border-zinc-200 text-zinc-600"
                          : "border-zinc-800 text-zinc-500"
                        : isWhiteAccentCard || isGreenAccentCard
                          ? "border-gray-200 text-gray-500"
                          : "border-gray-200 text-gray-500"
                    }`}
                  >
                    {item.footer}
                  </div>
                </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
