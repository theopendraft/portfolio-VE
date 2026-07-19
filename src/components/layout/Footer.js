'use client';

import { useCursor } from '@/hooks/useCursor';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { setCursorType, resetCursor } = useCursor();
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@theopendraft',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.996 2.996 0 00-2.108-2.12C19.536 3.5 12 3.5 12 3.5s-7.536 0-9.39.566a2.996 2.996 0 00-2.108 2.12A31.24 31.24 0 000 12a31.24 31.24 0 00.502 5.814 2.996 2.996 0 002.108 2.12C4.464 20.5 12 20.5 12 20.5s7.536 0 9.39-.566a2.996 2.996 0 002.108-2.12A31.24 31.24 0 0024 12a31.24 31.24 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/the_open_draft',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.5a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8zm5.15-1.8a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pankaj-yadav-5998b3249/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:pankajyadavwiki@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Floating Action Buttons (Desktop) */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40 space-y-4">
        {/* Resume Button */}
        <a
          href="/resume/Pankaj_Yadav_AI_Video_Editor.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 shadow-lg group ${
            theme === 'dark'
              ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-[#C4F047] hover:text-black hover:border-[#C4F047]'
              : 'bg-white border-gray-300 text-gray-900 hover:bg-blue-500 hover:text-white hover:border-blue-500'
          }`}
          onMouseEnter={() => setCursorType('active')}
          onMouseLeave={resetCursor}
          aria-label="Download Resume"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider">Resume</span>
        </a>

        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/@theopendraft"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 shadow-lg group ${
            theme === 'dark'
              ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-[#C4F047] hover:text-black hover:border-[#C4F047]'
              : 'bg-white border-gray-300 text-gray-900 hover:bg-blue-500 hover:text-white hover:border-blue-500'
          }`}
          onMouseEnter={() => setCursorType('active')}
          onMouseLeave={resetCursor}
          aria-label="YouTube Channel"
        >
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a2.996 2.996 0 00-2.108-2.12C19.536 3.5 12 3.5 12 3.5s-7.536 0-9.39.566a2.996 2.996 0 00-2.108 2.12A31.24 31.24 0 000 12a31.24 31.24 0 00.502 5.814 2.996 2.996 0 002.108 2.12C4.464 20.5 12 20.5 12 20.5s7.536 0 9.39-.566a2.996 2.996 0 002.108-2.12A31.24 31.24 0 0024 12a31.24 31.24 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider">YouTube</span>
        </a>
      </div>

      {/* Main Footer */}
      <footer className={`relative border-t px-6 sm:px-10 py-12 sm:py-16 transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-black border-zinc-900'
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">

            {/* Left: Personal Info */}
            <div className="space-y-6">
              <div>
                <h3 className={`text-3xl font-bold mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Pankaj Yadav
                </h3>
                <p className={`text-base ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'
                }`}>
                  AI Video Editor & Creative Strategist
                </p>
                <p className={`mt-1 text-sm ${
                  theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'
                }`}>
                  Motion Graphics · Storytelling · AI-Assisted Production
                </p>
              </div>

              <div className={`space-y-1.5 text-sm ${
                theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'
              }`}>
                <p>pankajyadavwiki@gmail.com</p>
                <p>Siliguri, India · Open to Remote & On-site</p>
              </div>

              <p className={`text-sm max-w-md ${
                theme === 'dark' ? 'text-zinc-600' : 'text-gray-400'
              }`}>
                Creating AI-assisted videos, cinematic edits, motion graphics, and performance-driven content that helps brands tell memorable stories.
              </p>

              <div className={`space-y-2 text-sm ${
                theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'
              }`}>
                <p className="uppercase tracking-widest text-xs">Available for</p>
                <p>Full-time · Freelance · Creative Collaborations</p>
              </div>
            </div>

            {/* Right: Social Links */}
            <div className="space-y-6">
              <h4 className={`text-xs font-semibold uppercase tracking-widest ${
                theme === 'dark' ? 'text-zinc-600' : 'text-gray-400'
              }`}>
                Connect
              </h4>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-5 py-3 border rounded-full transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-[#C4F047] hover:border-[#C4F047]'
                        : 'bg-gray-100 border-gray-300 text-gray-600 hover:text-blue-500 hover:border-blue-500'
                    }`}
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={resetCursor}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className={`mt-12 rounded-3xl border px-6 py-5 sm:px-8 sm:py-6 text-center ${
            theme === 'dark'
              ? 'border-zinc-900 bg-zinc-950/40 text-zinc-300'
              : 'border-gray-200 bg-gray-50 text-gray-700'
          }`}>
            <p className="text-sm sm:text-base italic">
              "Creating stories that people remember."
            </p>
          </div>

          {/* Bottom Bar */}
          <div className={`mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm mb-0 md:mb-14 ${
            theme === 'dark' ? 'border-zinc-900 text-zinc-700' : 'border-gray-200 text-gray-400'
          }`}>
            <p>
              © {new Date().getFullYear()} Pankaj Yadav. All rights reserved.
            </p>
            <p className={`text-xs ${theme === 'dark' ? 'text-zinc-800' : 'text-gray-300'}`}>
              Designed & Developed by Pankaj Yadav
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
