import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/shared/CursorFollower";
import { CursorProvider } from "@/hooks/useCursor";
import SharedAnimatedCard from "@/components/shared/SharedAnimatedCard";
import { AnimatedCardProvider } from "@/contexts/AnimatedCardContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NoiseOverlay from "@/components/shared/NoiseOverlay";
import ScrollProgress from "@/components/shared/ScrollProgress";
import LoadingScreen from "@/components/shared/LoadingScreen";
import ThemeToggle from "@/components/shared/ThemeToggle";
import ScrollToTop from "@/components/shared/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const haffer = localFont({
  variable: "--font-haffer",
  src: [
    {
      path: "../../public/fonts/haffer-font/Haffer-TRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/haffer-font/Haffer-TRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/haffer-font/Haffer-TRIAL-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/haffer-font/Haffer-TRIAL-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Pankaj Yadav | AI Video Editor & Creative Strategist",
    description:
"AI Video Editor specializing in AI-assisted commercials, UGC ads, motion graphics, podcasts, documentaries, and creative storytelling. Helping brands, startups, and creators produce engaging content with modern AI workflows.",
    keywords: [
  "AI Video Editor",
  "Video Editor",
  "Motion Graphics",
  "Creative Strategist",
  "UGC Ads",
  "Commercial Video Editor",
  "Podcast Editor",
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Google Veo",
  "Google Flow",
  "Kling AI",
  "ElevenLabs",
  "AI Content Creation",
  "Short Form Video",
  "Social Media Video Editor",
  "Brand Campaigns",
],
  authors: [{ name: "Pankaj Yadav" }],
  icons: {
    icon: "/logo/py_dark.svg",
  },
  openGraph: {
    title: "Pankaj Yadav | AI Video Editor & Creative Strategist",
    description:
"AI Video Editor specializing in AI-assisted commercials, UGC ads, motion graphics, podcasts, documentaries, and creative storytelling. Helping brands, startups, and creators produce engaging content with modern AI workflows.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${haffer.variable} antialiased`}>
        <ThemeProvider>
          <CursorProvider>
            <AnimatedCardProvider>
              <ScrollToTop />
              <LoadingScreen />
              <ThemeToggle />
              <ScrollProgress />
              <CursorFollower />
              <NoiseOverlay />
              <SharedAnimatedCard />
              <Navbar />
              {children}
              <Footer />
            </AnimatedCardProvider>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
