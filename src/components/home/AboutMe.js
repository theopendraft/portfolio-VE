"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCursor } from "@/hooks/useCursor";
import { useTheme } from "@/contexts/ThemeContext";
import AnimatedCard from "@/components/shared/AnimatedCard";
import { useAnimatedCardContext } from "@/contexts/AnimatedCardContext";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const { setCursorType, resetCursor } = useCursor();
  const { registerSection, isMobile } = useAnimatedCardContext();
  const { theme } = useTheme();

  const titleStyle = {
    fontFamily: "'Haffer', sans-serif",
    lineHeight: "100%",
    letterSpacing: "-0.03em",
  };

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("ABOUT", sectionRef.current);
    }
  }, [registerSection]);

  const stats = [
    { value: "5+", label: "Brands Worked With" },
    { value: "40+", label: "AI-Assisted Videos" },
    { value: "3–4", label: "Videos Delivered Daily" },
  ];

  const contactInfo = [
    { label: "Email", value: "pankajyadavwiki@gmail.com" },
    { label: "Phone", value: "+91 9174867756" },
    { label: "Base", value: "Siliguri, India" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/the_open_draft",
      icon: (
        <Instagram className="w-5 h-5" />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pankaj-yadav-5998b3249/",
      icon: (
        <Linkedin className="w-5 h-5" />
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@theopendraft",
      icon: (
        <Youtube className="w-5 h-5" />
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center px-6 sm:px-10 py-16 sm:py-24 transition-colors duration-500 ${
        theme === "dark" ? "bg-transparent" : "bg-white"
      }`}
      style={{ position: "relative" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN - Content */}
          <div className="space-y-10">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`text-6xl lg:text-7xl font-bold tracking-tight uppercase ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={titleStyle}
            >
              ABOUT ME
            </motion.h2>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-lg leading-relaxed max-w-lg ${
                theme === "dark" ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              Hi, I&apos;m{" "}
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Pankaj Yadav
              </span>{" "}
              — a storyteller who happens to edit videos. I blend AI, motion
              graphics, and creative strategy to produce content that people
              don't just watch—they remember. Whether it's a UGC ad, cinematic
              reel, or AI-generated campaign, my goal is always the same:
              create visuals that make people stop scrolling. Currently, I work
              at{" "}
              <a
                href="https://blueminch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium underline underline-offset-2 transition-colors duration-200 ${
                  theme === "dark"
                    ? "text-[#C4F047] hover:text-[#d4ff5a]"
                    : "text-blue-500 hover:text-blue-600"
                }`}
              >
                Blue Minch
              </a>
              , collaborating with brands like KukuTV, Pocket FM, Seekho,
              MyShivi, and ISKCON to deliver content that captures attention
              and drives engagement.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-3 gap-6 sm:gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className={`text-3xl sm:text-4xl font-bold ${
                      theme === "dark" ? "text-[#C4F047]" : "text-blue-500"
                    }`}
                    style={titleStyle}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs sm:text-sm leading-tight ${
                      theme === "dark" ? "text-zinc-500" : "text-gray-500"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-baseline gap-3">
                  <span
                    className={`text-xs uppercase tracking-widest w-12 shrink-0 ${
                      theme === "dark" ? "text-zinc-600" : "text-gray-400"
                    }`}
                  >
                    {contact.label}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-zinc-300" : "text-gray-700"
                    }`}
                  >
                    {contact.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    theme === "dark"
                      ? "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-[#C4F047] hover:text-[#C4F047] hover:bg-[#C4F047]/5"
                      : "border-gray-300 bg-gray-50 text-gray-500 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50"
                  }`}
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={resetCursor}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/about"
                className={`inline-flex items-center px-8 py-4 rounded-full border-2 bg-transparent font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  theme === "dark"
                    ? "border-zinc-700 text-white hover:border-[#C4F047] hover:text-[#C4F047]"
                    : "border-gray-400 text-gray-900 hover:border-blue-500 hover:text-blue-500"
                }`}
                onMouseEnter={() => setCursorType("active")}
                onMouseLeave={resetCursor}
              >
                My Journey
              </Link>
              <a
                href="/resume/Pankaj_Yadav_AI_Video_Editor.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#C4F047] text-black hover:bg-[#d4ff5a]"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onMouseEnter={() => setCursorType("active")}
                onMouseLeave={resetCursor}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Animated Card (Mobile only) */}
          {isMobile && (
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ rotate: -3 }}
              >
                <AnimatedCard
                  imageSrc="/image/Pankaj_Yadav_3.jpg"
                  alt="Pankaj Yadav - AI Video Editor"
                  rotateOnScroll={false}
                  className="w-72 h-100 border-0"
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
