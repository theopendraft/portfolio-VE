"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { useCursor } from "@/hooks/useCursor";
import MagneticButton from "@/components/shared/MagneticButton";

const experience = [
  {
    company: "Blue Minch",
    url: "https://blueminch.com/",
    role: "AI Video Editor",
    type: "AI Production",
    period: "Jul 2026 – Present",
    location: "Siliguri, India",
    current: true,
    highlights: [
      "Produced 40+ AI-assisted commercials, UGC ads, podcasts, and branded campaigns for Kuku FM, Pocket FM, Seekho, and other digital-first brands.",
      "Delivered 3–4 production-ready videos daily while maintaining creative quality and fast turnaround times.",
      "Leveraged Adobe Premiere Pro, After Effects, Kling, Veo, Google Flow, and ElevenLabs to reduce production time by 35% through AI-assisted workflows.",
      "Built reusable templates, presets, and editing SOPs that improved team editing efficiency by 40%.",
      "Collaborated with brand managers, scriptwriters, and designers to produce high-retention, performance-focused social content.",
    ],
  },
  {
    company: "Web3Spell",
    url: "#",
    role: "Video Editor",
    type: "Long-form",
    period: "Jul 2024 – Nov 2024",
    location: "Vidisha, India",
    current: false,
    highlights: [
      "Produced 25+ long-form educational videos featuring animations, tutorials, and structured visual storytelling.",
      "Improved audience engagement by 28% through stronger pacing, motion graphics, and content optimization.",
      "Worked closely with educators to transform technical concepts into engaging visual content.",
    ],
  },
  {
    company: "ISKCON Ujjain",
    url: "#",
    role: "Video Editor",
    type: "Social Media",
    period: "Dec 2023 – May 2024",
    location: "Ujjain, India",
    current: false,
    highlights: [
      "Produced Instagram Reels and promotional campaigns generating 32M+ impressions across social platforms.",
      "Covered GBC College, documenting sessions featuring 25+ international spiritual leaders.",
      "Captured and edited professional footage using Sony cinema camera systems, delivering event highlights and promotional content.",
    ],
  },
  {
    company: "BrandArtist",
    url: "#",
    role: "Video Editor",
    type: "Commercial",
    period: "Jul 2023 – Oct 2023",
    location: "Remote",
    current: false,
    highlights: [
      "Edited promotional videos, commercials, and branded marketing content for digital campaigns.",
      "Enhanced visual storytelling through motion graphics, typography, transitions, and sound design.",
      "Collaborated remotely with creative teams to deliver client-ready assets within tight deadlines.",
    ],
  },
  {
    company: "Oll.co",
    url: "#",
    role: "Video Editing Intern",
    type: "Internship",
    period: "Dec 2022 – Mar 2023",
    location: "Remote",
    current: false,
    highlights: [
      "Produced promotional videos, YouTube educational content, and commercial edits.",
      "Managed projects from concept development through post-production and final delivery.",
      "Built foundational skills in editing workflows, storytelling, and client communication.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institution: "Samrat Ashok Technological Institute",
    location: "Vidisha, Madhya Pradesh",
    period: "2022 - 2026",
    cgpa: "7.27",
    note: "Formal training that strengthened my systems thinking and problem-solving approach.",
  },
];

const recognition = [
  {
    badge: "Leadership",
    title: "Board Member - Wiki Club SATI",
    description:
      "Organize Wikimedia initiatives, lead technical and media workshops, mentor new contributors, and help grow one of SATI's most active student communities.",
  },
  {
    badge: "International",
    title: "Wikimania 2025",
    description:
      "Awarded a full scholarship to attend Wikimania 2025 in Nairobi, collaborating with contributors and open-knowledge leaders from around the world.",
  },
  {
    badge: "Open Source",
    title: "Wiki Movement",
    description:
      "Jury Member for Wiki Loves Folklore 2025 and Core Team Member of Wiki Science Competition 2025, supporting international Wikimedia campaigns.",
  },
  {
    badge: "Founder",
    title: "The Creator's Den",
    description:
      "Founded a student-led creative community connecting designers, filmmakers, developers, and storytellers through collaborative projects and workshops.",
  },
  {
    badge: "Community",
    title: "Google Developer Group, SATI",
    description:
      "Co-organised technical workshops, open-source events, and developer meetups, helping build a culture of learning for 200+ students.",
  },
  {
    badge: "Speaker",
    title: "Workshops & Sessions",
    description:
      "Delivered sessions on video editing, Wikimedia, design thinking, and technical topics, helping students explore creativity and technology together.",
  },
];

const inspirationCards = [
  "Cinema",
  "Documentaries",
  "Travel",
  "Culture",
  "Technology",
  "Open Knowledge",
  "Photography",
  "Design",
];

export default function AboutContent() {
  const { theme } = useTheme();
  const { setCursorType, resetCursor } = useCursor();

  const titleStyle = {
    fontFamily: "var(--font-haffer), 'Haffer', sans-serif",
    lineHeight: "100%",
    letterSpacing: "-0.03em",
  };

  const sectionLabel = (text) => (
    <p
      className={`text-xs uppercase tracking-[0.25em] font-medium mb-4 ${
        theme === "dark" ? "text-zinc-500" : "text-gray-400"
      }`}
    >
      {text}
    </p>
  );

  const divider = (
    <div
      className={`w-full h-px my-16 sm:my-20 ${
        theme === "dark" ? "bg-zinc-800" : "bg-gray-200"
      }`}
    />
  );

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const quickStats = [
    { label: "Current Focus", value: "AI-assisted Video Production", sub: "Motion graphics, editing, strategy" },
    { label: "Experience", value: "2+ Years", sub: "Software + creative production" },
    { label: "Based In", value: "India", sub: "Open to remote & on-site" },
    { label: "Open For", value: "Full-time", sub: "Freelance and collaborations" },
  ];

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-transparent" : "bg-white"
      }`}
    >
      <section className="relative px-6 sm:px-10 lg:px-16 pt-38 pb-0 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 lg:gap-16 items-end min-h-[82vh]">
          <div className="flex flex-col justify-end pb-16 lg:pb-20 z-10">
            <motion.p
              {...fadeUp(0.08)}
              className={`text-xs uppercase tracking-[0.3em] font-medium mb-6 ${
                theme === "dark" ? "text-zinc-500" : "text-gray-400"
              }`}
            >
              AI Video Editor · Creative Strategist · India
            </motion.p>

            <motion.h1
              {...fadeUp(0.12)}
              className={`font-bold leading-[0.9] tracking-tight mb-8 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={{ ...titleStyle, fontSize: "clamp(4rem, 10vw, 9rem)" }}
            >
              PANKAJ
              <br />
              <span className={theme === "dark" ? "text-[#C4F047]" : "text-blue-500"}>
                YADAV.
              </span>
            </motion.h1>

            <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-2 mb-7">
              {[
                { label: "AI-first Editor", accent: true },
                { label: "Open to Opportunities", accent: false },
                { label: "Creative Strategy", accent: false },
                { label: "Motion Graphics", accent: false },
              ].map(({ label, accent }) => (
                <span
                  key={label}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border ${
                    accent
                      ? theme === "dark"
                        ? "bg-[#C4F047]/10 border-[#C4F047]/40 text-[#C4F047]"
                        : "bg-blue-50 border-blue-300 text-blue-600"
                      : theme === "dark"
                        ? "border-zinc-700 text-zinc-400"
                        : "border-gray-300 text-gray-600"
                  }`}
                >
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.p
              {...fadeUp(0.22)}
              className={`text-base leading-relaxed max-w-md mb-8 ${
                theme === "dark" ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              I help brands, startups, and creators turn ideas into cinematic stories through AI-assisted editing, motion graphics, and creative strategy. My background in software engineering gives me a unique systems-thinking approach to modern content production.
            </motion.p>

            <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-3">
              <MagneticButton>
                <a
                  href="/resume/Pankaj_Yadav_AI_Video_Editor.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-[#C4F047] text-black hover:bg-[#d4ff5a]"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  onMouseEnter={() => setCursorType("active")}
                  onMouseLeave={resetCursor}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  View Resume
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className={`inline-flex items-center px-6 py-3 rounded-full border-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                    theme === "dark"
                      ? "border-zinc-700 text-white hover:border-[#C4F047] hover:text-[#C4F047]"
                      : "border-gray-400 text-gray-900 hover:border-blue-500 hover:text-blue-500"
                  }`}
                  onMouseEnter={() => setCursorType("active")}
                  onMouseLeave={resetCursor}
                >
                  Get in Touch
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.15)}
            className="hidden lg:block relative self-end h-[75vh] max-h-[680px] rounded-t-3xl overflow-hidden"
          >
            <Image
              src="/image/Pankaj_Yadav_4.jpg"
              alt="Pankaj Yadav"
              fill
              className="object-cover object-top"
              sizes="420px"
              priority
            />
            <div
              className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t ${
                theme === "dark" ? "from-zinc-950" : "from-white"
              } to-transparent`}
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.18)}
            className="lg:hidden relative w-full h-64 rounded-2xl overflow-hidden mt-4 mb-10"
          >
            <Image
              src="/image/Pankaj_Yadav_4.jpg"
              alt="Pankaj Yadav"
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section
        className={`px-6 sm:px-10 lg:px-16 py-16 sm:py-20 transition-colors duration-500 ${
          theme === "dark" ? "bg-zinc-900/40" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 py-6 lg:py-16">
          <div className="lg:col-span-2 space-y-5">
            <motion.div {...fadeUp(0)}>
              {sectionLabel("Story")}
            </motion.div>
            <motion.h2
              {...fadeUp(0.05)}
              className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={titleStyle}
            >
              The Story Behind The Editor
            </motion.h2>
            <motion.div
              {...fadeUp(0.1)}
              className={`space-y-4 text-base leading-relaxed ${
                theme === "dark" ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              <p>
                I started as a software engineer, building AI-powered products and solving technical problems. Over time, I realized what excited me most was not only writing code - it was telling stories, designing experiences, and creating visuals that connect with people.
              </p>
              <p>
                Today I combine both worlds. I use AI, motion graphics, editing, and creative strategy together with an engineering mindset to produce videos that are both visually engaging and strategically effective.
              </p>
              <p>
                Beyond client work, I enjoy building communities, speaking at events, contributing to Wikimedia, and exploring how AI is reshaping storytelling.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.15)} className="space-y-6">
            {sectionLabel("At a Glance")}
            {quickStats.map((item) => (
              <div
                key={item.label}
                className={`pb-5 border-b last:border-0 ${
                  theme === "dark" ? "border-zinc-800" : "border-gray-200"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-widest mb-1 ${
                    theme === "dark" ? "text-zinc-600" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.value}
                </p>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-zinc-500" : "text-gray-500"
                  }`}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {divider}

      <section className="px-6 sm:px-10 lg:px-16 py-10 sm:py-16 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-12">
          {sectionLabel("Inspiration")}
          <h2
            className={`text-4xl sm:text-5xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            style={titleStyle}
          >
            Things That Inspire Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {inspirationCards.map((item, index) => (
            <motion.div
              key={item}
              {...fadeUp(index * 0.05)}
              className={`rounded-2xl border p-5 sm:p-6 text-center ${
                theme === "dark"
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <p
                className={`text-sm sm:text-base font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="py-6 lg:py-16">
          <motion.div {...fadeUp(0)} className="mb-14">
            {sectionLabel("Journey")}
            <h2
              className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={titleStyle}
            >
              Career Journey
            </h2>
            <motion.p
              {...fadeUp(0.06)}
              className={`mt-4 max-w-3xl text-base sm:text-lg leading-relaxed ${
                theme === "dark" ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              4+ years of experience across AI-assisted video production, branded content, educational media, and high-performance social campaigns.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div
              className={`absolute left-[7px] top-3 bottom-3 w-px ${
                theme === "dark" ? "bg-zinc-800" : "bg-gray-200"
              }`}
            />

            <div className="space-y-0">
              {experience.map((job, i) => (
                <motion.div
                  key={`${job.role}-${i}`}
                  {...fadeUp(i * 0.1)}
                  className="relative pl-10 pb-10 last:pb-0"
                >
                  <div
                    className={`absolute left-0 top-[10px] w-[15px] h-[15px] rounded-full border-2 z-10 ${
                      job.current
                        ? theme === "dark"
                          ? "bg-[#C4F047] border-[#C4F047]"
                          : "bg-blue-500 border-blue-500"
                        : theme === "dark"
                          ? "bg-zinc-950 border-zinc-600"
                          : "bg-white border-gray-400"
                    }`}
                  >
                    {job.current && (
                      <span
                        className={`absolute inset-0 rounded-full animate-ping opacity-40 ${
                          theme === "dark" ? "bg-[#C4F047]" : "bg-blue-500"
                        }`}
                      />
                    )}
                  </div>

                  <div
                    className={`rounded-2xl border p-7 lg:p-9 transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-zinc-900 border-zinc-800"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                          <h3
                            className={`text-xl font-bold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {job.role}
                          </h3>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                              job.current
                                ? theme === "dark"
                                  ? "bg-[#C4F047]/10 text-[#C4F047]"
                                  : "bg-blue-100 text-blue-600"
                                : theme === "dark"
                                  ? "bg-zinc-800 text-zinc-400"
                                  : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {job.type}
                          </span>
                          {job.current && (
                            <span
                              className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
                                theme === "dark"
                                  ? "bg-green-500/10 text-green-400"
                                  : "bg-green-50 text-green-600"
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                              Current
                            </span>
                          )}
                        </div>
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium transition-colors ${
                            theme === "dark"
                              ? "text-zinc-400 hover:text-[#C4F047]"
                              : "text-gray-500 hover:text-blue-500"
                          }`}
                        >
                          {job.company} ↗
                        </a>
                      </div>
                      <div className="shrink-0 sm:text-right">
                        <p
                          className={`text-sm font-semibold ${
                            theme === "dark" ? "text-zinc-300" : "text-gray-700"
                          }`}
                        >
                          {job.period}
                        </p>
                        <p
                          className={`text-xs mt-0.5 ${
                            theme === "dark" ? "text-zinc-600" : "text-gray-400"
                          }`}
                        >
                          {job.location}
                        </p>
                      </div>
                    </div>

                    {job.highlights.length > 0 && (
                      <ul className="space-y-2.5">
                        {job.highlights.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span
                              className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${
                                theme === "dark" ? "bg-[#C4F047]" : "bg-blue-500"
                              }`}
                            />
                            <span
                              className={`text-sm leading-relaxed ${
                                theme === "dark" ? "text-zinc-400" : "text-gray-600"
                              }`}
                            >
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`px-6 sm:px-10 lg:px-16 py-16 sm:py-24 transition-colors duration-500 ${
          theme === "dark" ? "bg-zinc-900/40" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto py-6 lg:py-16">
          <motion.div {...fadeUp(0)} className="mb-12">
            {sectionLabel("Learning")}
            <h2
              className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={titleStyle}
            >
              Creative Learning
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                {...fadeUp(i * 0.08)}
                className={`rounded-2xl border p-8 ${
                  theme === "dark"
                    ? "bg-zinc-900 border-zinc-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="space-y-4">
                  <h3
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {edu.degree}
                  </h3>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-zinc-400" : "text-gray-600"
                    }`}
                  >
                    <p className="font-medium">{edu.institution}</p>
                    <p>{edu.location}</p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p
                        className={`text-xs uppercase tracking-widest mb-1 ${
                          theme === "dark" ? "text-zinc-600" : "text-gray-400"
                        }`}
                      >
                        Period
                      </p>
                      <p
                        className={`font-semibold ${
                          theme === "dark" ? "text-zinc-200" : "text-gray-800"
                        }`}
                      >
                        {edu.period}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-xs uppercase tracking-widest mb-1 ${
                          theme === "dark" ? "text-zinc-600" : "text-gray-400"
                        }`}
                      >
                        CGPA
                      </p>
                      <p
                        className={`text-2xl font-bold ${
                          theme === "dark" ? "text-[#C4F047]" : "text-blue-500"
                        }`}
                        style={titleStyle}
                      >
                        {edu.cgpa}
                      </p>
                    </div>
                  </div>
                  {edu.note && (
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-zinc-500" : "text-gray-500"
                      }`}
                    >
                      {edu.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              {...fadeUp(0.08)}
              className={`rounded-2xl border p-8 ${
                theme === "dark"
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="space-y-4">
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Currently Learning
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-zinc-400" : "text-gray-600"
                  }`}
                >
                  I keep expanding the creative toolkit that powers my workflow.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Premiere Pro",
                    "After Effects",
                    "DaVinci Resolve",
                    "ChatGPT",
                    "Claude",
                    "Veo",
                    "Google Flow",
                    "Runway",
                    "Storytelling",
                    "Motion Design",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                        theme === "dark"
                          ? "border-zinc-700 bg-zinc-800 text-zinc-400"
                          : "border-gray-200 bg-gray-50 text-gray-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="py-6 lg:py-24 ">
          <motion.div {...fadeUp(0)} className="mb-12">
            {sectionLabel("Community & Leadership")}
            <h2
              className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={titleStyle}
            >
              Beyond The Timeline
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recognition.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.08)}
                className={`rounded-2xl border p-8 flex flex-col gap-4 ${
                  theme === "dark"
                    ? "bg-zinc-900 border-zinc-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <span
                  className={`self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    theme === "dark"
                      ? "bg-[#C4F047]/10 text-[#C4F047]"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {item.badge}
                </span>
                <h4
                  className={`text-xl font-bold leading-snug ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    theme === "dark" ? "text-zinc-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`px-6 sm:px-10 lg:px-16 py-20 sm:py-28 text-center transition-colors duration-500 ${
          theme === "dark" ? "bg-zinc-900/40" : "bg-gray-50"
        }`}
      >
        <div className="max-w-2xl mx-auto space-y-6 py-6 lg:py-24">
          <motion.h2
            {...fadeUp(0)}
            className={`text-5xl sm:text-6xl font-bold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            style={titleStyle}
          >
            Let's Create Something Worth Watching
          </motion.h2>
          <motion.p
            {...fadeUp(0.08)}
            className={`text-base ${
              theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Open to full-time opportunities, creative collaborations, AI-first production, and ambitious storytelling projects.
          </motion.p>
          <motion.div
            {...fadeUp(0.14)}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#C4F047] text-black hover:bg-[#d4ff5a]"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onMouseEnter={() => setCursorType("active")}
                onMouseLeave={resetCursor}
              >
                Get in Touch
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://www.linkedin.com/in/pankaj-yadav-5998b3249/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-8 py-4 rounded-full border-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  theme === "dark"
                    ? "border-zinc-700 text-white hover:border-[#C4F047] hover:text-[#C4F047]"
                    : "border-gray-400 text-gray-900 hover:border-blue-500 hover:text-blue-500"
                }`}
                onMouseEnter={() => setCursorType("active")}
                onMouseLeave={resetCursor}
              >
                LinkedIn Profile
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
