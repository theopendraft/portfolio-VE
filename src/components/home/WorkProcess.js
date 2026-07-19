"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Clapperboard, BarChart3 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * WorkProcess - 4-step creative workflow
 *
 * TO ADD case study examples per step: fill in the `example` field below.
 * TO REMOVE this section: delete it from page.js (no other dependencies).
 */

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Strategy",
    description:
      "Every successful video starts before the edit. I understand the audience, platform, campaign objective, and content strategy before opening the timeline.",
    example: "DELIVERABLE\n\nCreative Brief",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Pre-Production",
    description:
      "I develop scripts, hooks, visual references, AI prompts, storyboards, and creative direction that define the video's structure.",
    example: "DELIVERABLE\n\nStoryboard",
  },
  {
    number: "03",
    icon: Clapperboard,
    title: "Production",
    description:
      "Assets are generated, edited, animated, color graded, and polished using AI-assisted workflows combined with professional editing tools.",
    example: "DELIVERABLE\n\nFinal Edit",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize",
    description:
      "Delivery doesn't end at export. I refine videos using audience retention, watch time, and campaign performance to continuously improve future content.",
    example: "DELIVERABLE\n\nCampaign Assets",
  },
];

export default function WorkProcess() {
  const { theme } = useTheme();

  const titleStyle = {
    fontFamily: "'Haffer', sans-serif",
    lineHeight: "100%",
    letterSpacing: "-0.03em",
  };

  return (
    <section
      className={`relative px-6 sm:px-10 lg:px-16 py-20 lg:py-28 transition-colors duration-500 ${
        theme === "dark" ? "bg-transparent" : "bg-gray-50"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
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
              Process
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
              How I Work
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
            Blending storytelling, AI workflows, motion graphics, and performance marketing into a repeatable creative process.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`relative h-full rounded-2xl border p-7 flex flex-col gap-5 group transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-zinc-900/60 border-zinc-800 hover:border-zinc-600"
                      : "bg-white border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {/* Step number */}
                  <span
                    className={`text-xs font-bold tracking-widest uppercase ${
                      theme === "dark" ? "text-zinc-700" : "text-gray-300"
                    }`}
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-zinc-800 text-zinc-300 group-hover:bg-[#C4F047]/10 group-hover:text-[#C4F047]"
                        : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                    style={titleStyle}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed flex-1 ${
                      theme === "dark" ? "text-zinc-400" : "text-gray-500"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Example placeholder - fill step.example in steps[] to show */}
                  {step.example && (
                    <div
                      className={`text-xs px-3 py-2 rounded-lg font-mono ${
                        theme === "dark"
                          ? "bg-zinc-800 text-zinc-500"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {step.example}
                    </div>
                  )}

                  {/* Connector line (hidden on last card, shown on desktop) */}
                  {index < steps.length - 1 && (
                    <div
                      className={`hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-px ${
                        theme === "dark" ? "bg-zinc-700" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
