"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCursor } from "@/hooks/useCursor";
import { useTheme } from "@/contexts/ThemeContext";
import { featuredVideos, shortVideos } from "@/data/projects";

export default function FeaturedProjects() {
  const { setCursorType, resetCursor } = useCursor();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilmId, setActiveFilmId] = useState(null);
  const containerRef = useRef(null);

  const titleStyle = {
    fontFamily: "'Haffer', sans-serif",
    lineHeight: "100%",
    letterSpacing: "-0.02em",
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="projects"
      className={`relative transition-colors duration-500 ${theme === "dark" ? "bg-transparent" : "bg-gray-100"
        }`}
    >
      <div className="relative px-4 sm:px-8 py-16 sm:py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className={`text-xs uppercase tracking-[0.25em] font-medium mb-3 ${theme === "dark" ? "text-zinc-500" : "text-gray-400"
            }`}
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className={`text-6xl lg:text-7xl font-bold tracking-tight mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          style={titleStyle}
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={`text-lg max-w-2xl mx-auto leading-relaxed ${theme === "dark" ? "text-zinc-400" : "text-gray-600"
            }`}
        >
          Stories crafted with AI, motion graphics, and performance-driven editing.
        </motion.p>
      </div>

      {isMobile ? (
        <div className="space-y-6 px-4 sm:px-8 pb-16 sm:pb-24">
          {featuredVideos.map((project, index) => (
            <FilmCard
              key={project.id}
              project={project}
              index={index}
              theme={theme}
              titleStyle={titleStyle}
              setCursorType={setCursorType}
              resetCursor={resetCursor}
              activeFilmId={activeFilmId}
              setActiveFilmId={setActiveFilmId}
              isMobile
            />
          ))}
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${featuredVideos.length * 88}vh`, position: "relative" }}
        >
          <div className="relative">
            {featuredVideos.map((project, index) => (
              <FilmCard
                key={project.id}
                project={project}
                index={index}
                totalCards={featuredVideos.length}
                containerRef={containerRef}
                theme={theme}
                titleStyle={titleStyle}
                setCursorType={setCursorType}
                resetCursor={resetCursor}
                activeFilmId={activeFilmId}
                setActiveFilmId={setActiveFilmId}
              />
            ))}
          </div>
        </div>
      )}

      <div className={`relative px-4 sm:px-8 py-14 sm:py-18 ${theme === "dark" ? "bg-transparent" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`text-xs uppercase tracking-[0.25em] font-medium mb-3 ${theme === "dark" ? "text-zinc-500" : "text-gray-400"}`}>
                Short Form
              </p>
              <h3 className={`text-4xl lg:text-5xl font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`} style={titleStyle}>
                Short-Form Content
              </h3>
            </div>
            <p className={`text-sm max-w-xl leading-relaxed ${theme === "dark" ? "text-zinc-500" : "text-gray-500"}`}>
              Vertical edits, UGC hooks, and campaign cutdowns designed for fast consumption and high retention.
            </p>
          </div>

          <div className="columns-1 gap-4 sm:gap-5 md:columns-2 xl:columns-3 [column-fill:_balance]">
            {shortVideos.map((video, index) => (
              <ShortVideoCard
                key={video.id}
                video={video}
                theme={theme}
                setCursorType={setCursorType}
                resetCursor={resetCursor}
                tall={index % 3 === 1}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={`relative px-4 sm:px-8 py-16 sm:py-20 ${theme === "dark" ? "bg-transparent" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className={`text-xs uppercase tracking-[0.25em] font-medium mb-3 ${theme === "dark" ? "text-zinc-500" : "text-gray-400"}`}>
              Behind The Edit
            </p>
            <h3 className={`text-4xl lg:text-5xl font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`} style={titleStyle}>
              Pipeline
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {[
              ["ChatGPT", "Script"],
              ["Veo / Kling", "AI Assets"],
              ["Premiere Pro", "Editing"],
              ["After Effects", "Motion Graphics"],
              ["ElevenLabs", "Voice & Delivery"],
            ].map(([tool, stage]) => (
              <div
                key={tool}
                className={`rounded-2xl border px-5 py-4 ${theme === "dark"
                    ? "border-zinc-800 bg-zinc-900/40 text-white"
                    : "border-gray-200 bg-white text-gray-900"
                  }`}
              >
                <div className="text-sm font-semibold uppercase tracking-wider">{tool}</div>
                <div className={`mt-2 text-xs uppercase tracking-[0.25em] ${theme === "dark" ? "text-zinc-500" : "text-gray-500"}`}>
                  {stage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`relative px-8 pb-16 sm:pb-20 text-center transition-colors duration-500 ${theme === "dark"
            ? "bg-black-800"
            : "bg-linear-to-b from-gray-100 to-gray-200"
          }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className={`text-lg ${theme === "dark" ? "text-zinc-500" : "text-gray-500"}`}>
            Want to see more?
          </p>
          <Link
            href="/projects"
            className={`inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 bg-transparent font-semibold text-base uppercase tracking-wider transition-all duration-300 ${theme === "dark"
                ? "border-zinc-700 text-white hover:border-[#C4F047] hover:text-[#C4F047] hover:shadow-[0_0_30px_rgba(196,240,71,0.3)]"
                : "border-gray-400 text-gray-900 hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              }`}
            onMouseEnter={() => setCursorType("active")}
            onMouseLeave={resetCursor}
          >
            Explore More Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FilmCard({
  project,
  index,
  totalCards,
  containerRef,
  theme,
  titleStyle,
  setCursorType,
  resetCursor,
  activeFilmId,
  setActiveFilmId,
  isMobile = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeFilmId === project.id;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardStart = totalCards ? index / totalCards : 0;
  const cardEnd = totalCards ? (index + 1) / totalCards : 1;
  const targetScale = totalCards ? 1 - (totalCards - index) * 0.05 : 1;
  const isLastCard = index === totalCards - 1;
  const scale = useTransform(scrollYProgress, [cardStart, cardEnd], [1, targetScale]);
  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardEnd - 0.1, cardEnd],
    isLastCard ? [1, 1, 1] : [1, 0.86, 0.14],
  );

  const embedUrl = project.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0&modestbranding=1&playsinline=1`
    : null;

  const filmShell = (
    <div
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center rounded-3xl overflow-hidden border p-8 lg:p-16 transition-all duration-500 h-full ${theme === "dark"
          ? "bg-zinc-900 border-zinc-800 hover:border-[#C4F047]"
          : "bg-white border-gray-300 hover:border-blue-500"
        }`}
    >
      <button
        type="button"
        className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer text-left"
        onClick={!isActive ? () => setActiveFilmId(project.id) : undefined}
        onMouseEnter={() => {
          setIsHovered(true);
          setCursorType("active");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          resetCursor();
        }}
      >
        {isActive && embedUrl ? (
          <iframe
            src={embedUrl}
            title={`${project.brand} ${project.title}`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <Image
            src={project.previewImage || "/project/aladdyn.png"}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        )}

{!isActive && (
  <>
    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-90 transition-opacity duration-500" />

    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className={`flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white shadow-2xl backdrop-blur-sm ${
          isHovered ? "scale-105" : "scale-100"
        } transition-transform duration-300`}
      >
        <svg className="h-7 w-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </div>

    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-center justify-between text-white">
      <span className="text-xs font-semibold uppercase tracking-[0.25em]">
        {project.duration}
      </span>

      <span className="text-xs font-medium uppercase tracking-[0.2em] rounded-full border border-white/20 bg-white/10 px-3 py-1">
        {project.category}
      </span>
    </div>
  </>
)}
      </button>

      <div className="space-y-5">
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${theme === "dark" ? "bg-[#C4F047]/10 text-[#C4F047]" : "bg-blue-100 text-blue-600"}`}>
            {project.badge || "Featured"}
          </span>
          <span className={`text-xs font-bold tracking-widest uppercase ${theme === "dark" ? "text-zinc-600" : "text-gray-400"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3
          className={`text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300 ${theme === "dark" ? "text-white hover:text-[#C4F047]" : "text-gray-900 hover:text-blue-500"
            }`}
          style={titleStyle}
        >
          {project.title}
        </h3>

        <div className="space-y-1">
          <p className={`text-sm font-medium uppercase tracking-wider ${theme === "dark" ? "text-zinc-500" : "text-gray-400"}`}>
            {project.brand}
          </p>
          <p className={`text-sm font-medium uppercase tracking-wider ${theme === "dark" ? "text-zinc-600" : "text-gray-500"}`}>
            {project.category}
          </p>
        </div>

        <p className={`text-base leading-relaxed ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        {project.role?.length ? (
          <div className="space-y-3 pt-1">
            <div className={`text-xs uppercase tracking-[0.25em] font-semibold ${theme === "dark" ? "text-zinc-500" : "text-gray-400"}`}>
              Role
            </div>
            <div className="flex flex-wrap gap-2">
              {project.role.map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border ${theme === "dark" ? "bg-zinc-800 text-zinc-300 border-zinc-700" : "bg-gray-100 text-gray-700 border-gray-300"}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {project.results?.length ? (
          <div className="space-y-3 pt-1">
            <div className={`text-xs uppercase tracking-[0.25em] font-semibold ${theme === "dark" ? "text-zinc-500" : "text-gray-400"}`}>
              Results
            </div>
            <div className="flex flex-wrap gap-2">
              {project.results.map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${theme === "dark" ? "bg-[#C4F047]/10 text-[#C4F047] border-[#C4F047]/20" : "bg-blue-50 text-blue-600 border-blue-100"}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {project.workflow?.length ? (
          <div className="space-y-3 pt-1">
            <div className={`text-xs uppercase tracking-[0.25em] font-semibold ${theme === "dark" ? "text-zinc-500" : "text-gray-400"}`}>
              Workflow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.workflow.map((step, stepIndex) => (
                <div key={step} className="flex items-center gap-2">
                  <span className={`px-3 py-1.5 text-xs font-medium rounded-full border ${theme === "dark" ? "bg-zinc-800 text-zinc-300 border-zinc-700" : "bg-gray-100 text-gray-700 border-gray-300"}`}>
                    {step}
                  </span>
                  {stepIndex < project.workflow.length - 1 && (
                    <span className={`text-xs font-semibold ${theme === "dark" ? "text-zinc-600" : "text-gray-400"}`}>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {project.tools?.map((tech) => (
            <span
              key={tech}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-full border ${theme === "dark" ? "bg-zinc-800 text-zinc-300 border-zinc-700" : "bg-gray-100 text-gray-700 border-gray-300"}`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] uppercase ${theme === "dark" ? "bg-zinc-700 text-zinc-200" : "bg-white text-gray-700"}`}>
                {tech.slice(0, 2)}
              </span>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button
            type="button"
            className={`flex items-center gap-2 transition-colors duration-300 ${theme === "dark" ? "text-white hover:text-[#C4F047]" : "text-gray-900 hover:text-blue-500"}`}
                onClick={() => {
        if (isActive) return;
        setActiveFilmId(project.id);
    }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider">
              {isActive ? "Hide Preview" : "Watch Full Film"}
            </span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          {project.watchUrl && (
            <a
              href={project.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${theme === "dark" ? "text-zinc-600 hover:text-[#C4F047]" : "text-gray-400 hover:text-blue-500"}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
      >
        {filmShell}
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky px-5 bg-transparent flex items-center"
      style={{
        top: "80px",
        scale,
        opacity,
        willChange: "transform, opacity",
        height: "calc(100vh - 160px)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full h-7xl">
        {filmShell}
      </div>
    </motion.section>
  );
}

function ShortVideoCard({ video, theme, setCursorType, resetCursor, tall }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

const getYoutubeId = (url) => {
  if (!url) return null;

  const match = url.match(/shorts\/([^?]+)/);

  return match?.[1] ?? null;
};

const youtubeId = video.youtubeId || getYoutubeId(video.watchUrl);

const embedUrl = youtubeId
  ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&playsinline=1`
  : null;

  return (
    <button
      type="button"
      onClick={() => {
        if (!embedUrl) return;
        setIsPlaying(true);
      }}
      className={`group mb-4 inline-block w-full rounded-2xl border overflow-hidden text-left transition-all duration-300 cursor-none ${theme === "dark"
          ? "border-zinc-800 bg-zinc-900/40 hover:border-[#C4F047]"
          : "border-gray-200 bg-white hover:border-blue-500"
        }`}
      onMouseEnter={() => {
        setIsHovered(true);
        setCursorType("active");
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        resetCursor();
      }}
    >
      <div className={`relative overflow-hidden bg-zinc-900 ${tall ? "aspect-[9/18]" : "aspect-[9/15]"}`}>
        {isPlaying && embedUrl ? (
          <iframe
            src={embedUrl}
            title={`${video.brand} ${video.title}`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <Image
            src={video.previewImage}
            alt={video.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        )}
        {!isPlaying && (
        <>

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white shadow-xl backdrop-blur-sm transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}>
            <svg className="h-5 w-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              {video.duration}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] rounded-full border border-white/20 bg-white/10 px-2.5 py-1">
              {video.category}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider">{video.brand}</p>
            <h4 className="text-lg font-bold leading-tight" style={{ fontFamily: "'Haffer', sans-serif" }}>
              {video.title}
            </h4>
          </div>
        </div>
          </>
          )}
      </div>
      
    </button>
  );
}
