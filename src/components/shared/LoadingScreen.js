"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-zinc-950 select-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,240,71,0.08),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />

          <div className="relative flex flex-col items-center px-6 text-center">
            <div className="overflow-hidden">
              <motion.p
                initial={prefersReducedMotion ? { opacity: 0 } : { y: "110%" }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-[30px] font-bold uppercase tracking-[0.5em] text-zinc-500"
              >
                Pankaj Yadav
              </motion.p>
            </div>

            <div className="space-y-2">
              

              <motion.p
                initial={prefersReducedMotion ? { opacity: 0 } : { y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs pb-2 uppercase tracking-[0.32em] text-zinc-500"
              >
                AI Video Producer & Creative Strategist
              </motion.p>

              <div className="flex items-center justify-center gap-2">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-white/70"
                    animate={prefersReducedMotion ? { opacity: 1 } : { y: [0, -3, 0], opacity: [0.35, 1, 0.35] }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.05, repeat: Infinity, ease: "easeInOut", delay: index * 0.14 }}
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#C4F047] to-transparent"
            initial={{ width: "18%", opacity: 0.25 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
